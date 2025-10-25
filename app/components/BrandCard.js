import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BrandCard({ brand, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: brand.logo_url }} 
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{brand.name}</Text>
        <Text style={styles.tagline} numberOfLines={1}>
          {brand.tagline}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {brand.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  info: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 13,
    color: '#6FB1FC',
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#a0a0a0',
    lineHeight: 18,
  },
});