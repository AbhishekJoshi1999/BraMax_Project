import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import App from './app'; 
import { RootStackParamList } from '@/app/type'; // Import your type definitions

// Define the 'MyBraMaxHomeNavBar' component
const MyBraMaxHomeNavBar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToBraMaxDetails = () => {
    navigation.navigate('Screens/BraMaxDetails'); // Ensure the route name matches your type definitions
  };

  return (
    <TouchableOpacity style={styles.navButton} onPress={navigateToBraMaxDetails}>
      <Text style={styles.navButtonText}>My BraMax Home</Text>
    </TouchableOpacity>
  );
};

// Define the main 'Index' component
const Index = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToScreen = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <MyBraMaxHomeNavBar />
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Screens/DailyChallenge')}>
        <Text style={styles.buttonText}>Daily Challenge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Screens/BrainGames/BrainGames')}>
        <Text style={styles.buttonText}>Brain Games</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Screens/BraMaxDetails')}>
        <Text style={styles.buttonText}>Progress Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Screens/TrainingProgram')}>
        <Text style={styles.buttonText}>Customized Training Program</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowButton} onPress={() => alert('Please go through the game first')}>
        <Icon name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Index;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  navButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  arrowButton: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
