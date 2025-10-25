import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import BrandCard from '../components/BrandCard';
import ErrorScreen from '../components/ErrorScreen';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchBrands } from '../services/BrandServices';

export default function HomeScreen() {
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadBrands = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await fetchBrands();
    
    console.log('API Response:', { data, error }); // Debug log
    
    if (error) {
      setError(error);
    } else {
      setBrands(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadBrands();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorScreen message={error} onRetry={loadBrands} />;

  return (
    <LinearGradient
      colors={['#2d4a8e', '#1a2d5a', '#0f1829', '#060a14']}
      locations={[0, 0.3, 0.7, 1]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.header}>Top Brands Today</Text>
        <FlatList
          data={brands}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <BrandCard
              brand={item}
              onPress={() => {
                console.log('Navigating to brand:', item.id);
                router.push({
                  pathname: '/brand-detail',
                  params: { brandId: item.id }
                });
              }}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 24,
  },
  list: {
    paddingBottom: 20,
  },
});