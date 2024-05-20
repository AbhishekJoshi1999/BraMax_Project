import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyBraMaxHomeNavBar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateToScreen('Index')} // Example screen name, replace with actual screen name
      >
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateToScreen('DailyChallenge')} // Example screen name, replace with actual screen name
      >
        <Text style={styles.navText}>Daily Challenge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateToScreen('BrainGames')} // Example screen name, replace with actual screen name
      >
        <Text style={styles.navText}>Brain Games</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateToScreen('ProgressTracking')} // Example screen name, replace with actual screen name
      >
        <Text style={styles.navText}>Progress Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateToScreen('TrainingProgram')} // Example screen name, replace with actual screen name
      >
        <Text style={styles.navText}>Training Program</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    height: 60,
    paddingHorizontal: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyBraMaxHomeNavBar;
