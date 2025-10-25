import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0a0e27' },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="brand-detail" options={{ presentation: 'modal' }} />
    </Stack>
  );
}