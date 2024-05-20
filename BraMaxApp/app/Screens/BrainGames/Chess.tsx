import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Chess = () => {
  const [selectedSquare, setSelectedSquare] = useState(null); // State to track selected square

  const handleSquarePress = (index) => {
    if (selectedSquare === index) {
      // Deselect square if it's already selected
      setSelectedSquare(null);
    } else {
      // Otherwise, select the square
      setSelectedSquare(index);
      console.log('Selected square:', index);
      // Implement logic for moving pieces or any other game logic here
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chess</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.board}>
          {Array.from({ length: 64 }, (_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.square,
                (index + Math.floor(index / 8)) % 2 === 0 ? styles.light : styles.dark,
                selectedSquare === index && styles.selected,
              ]}
              onPress={() => handleSquarePress(index)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => console.log('New Game')}>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Resume Game')}>
          <Text style={styles.buttonText}>Resume Game</Text>
        </TouchableOpacity>
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
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
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
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240, // Adjust size as needed
  },
  square: {
    width: 30,
    height: 30,
  },
  dark: {
    backgroundColor: '#769656',
  },
  light: {
    backgroundColor: '#EEEDD2',
  },
  selected: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
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

export default Chess;
