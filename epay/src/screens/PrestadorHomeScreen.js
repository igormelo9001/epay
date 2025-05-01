import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PrestadorHomeScreen() {
  const handleServiceComplete = () => {
    // Mock payment processing (to be implemented)
    alert('Serviço concluído! Processando pagamento...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Prestador</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleServiceComplete}
      >
        <Text style={styles.buttonText}>Concluir Serviço</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});