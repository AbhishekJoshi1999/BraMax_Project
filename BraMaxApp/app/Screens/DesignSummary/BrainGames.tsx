import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BrainGames = () => {
  const handleStartGame = () => {
    // Logic to start a game
    console.log('Starting a game...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Brain Games</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.gameButton} onPress={handleStartGame}>
          <Text style={styles.gameButtonText}>Start Game</Text>
        </TouchableOpacity>
        {/* Add more game options or components here */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Brain Games Inc.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  gameButtonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#454545',
  },
});

export default BrainGames;
