import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function ClienteHomeScreen() {
  const [status, setStatus] = useState('Verificando localização...');

  useEffect(() => {
    checkLocation();
  }, []);

  const checkLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setStatus('Permissão de localização negada');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      // Mock location check (to be replaced with actual geofencing)
      setStatus('Procurando serviço próximo...');
    } catch (error) {
      setStatus('Erro ao obter localização');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  status: {
    fontSize: 18,
    textAlign: 'center',
  },
});