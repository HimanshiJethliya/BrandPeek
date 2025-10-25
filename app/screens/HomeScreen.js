import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
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
    
    if (error) {
      setError(error);
    } else {
      setBrands(data);
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
      colors={['#6495ED', '#4169E1', '#191970', '#000033', '#000000']}
      locations={[0, 0.3, 0.6, 0.85, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
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
              onPress={() => router.push({
                pathname: '/brand-detail',
                params: { brandId: item.id }
              })}
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