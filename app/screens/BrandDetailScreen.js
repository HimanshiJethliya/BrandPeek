import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ErrorScreen from '../components/ErrorScreen';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchBrandById } from '../services/BrandServices';

export default function BrandDetailScreen() {
  const router = useRouter();
  const { brandId } = useLocalSearchParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const loadBrand = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await fetchBrandById(brandId);
    
    if (error) {
      setError(error);
    } else {
      setBrand(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (brandId) {
      loadBrand();
    }
  }, [brandId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorScreen message={error} onRetry={loadBrand} />;

  return (
    <LinearGradient
      colors={['#1a2456', '#2d3a6e', '#1a2456']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: brand.logo_url }} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.brandName}>{brand.name}</Text>
        <Text style={styles.tagline}>{brand.tagline}</Text>
        <Text style={styles.description}>{brand.description}</Text>

        <TouchableOpacity
          style={[styles.followButton, isFollowing && styles.followingButton]}
          onPress={() => setIsFollowing(!isFollowing)}
        >
          <Text style={styles.followButtonText}>
            {isFollowing ? '✓ Following' : '+ Follow'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  backText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logo: {
    width: 100,
    height: 100,
  },
  brandName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#d0d0d0',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  followButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 30,
    minWidth: 200,
  },
  followingButton: {
    backgroundColor: '#2ecc71',
  },
  followButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});