import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for icons
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for arrow icon
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

// Define an interface for the training program data
interface TrainingProgram {
  title: string;
  description: string;
  image: any; // Type can be adjusted based on the image source type
}

// Dummy data for training programs (replace with actual data)
const trainingPrograms: TrainingProgram[] = [
  {
    title: 'Memory Enhancement',
    description: 'Improve your memory with effective techniques and exercises.',
    image: require('./assets/memory-enhancement.jpeg'), // Adjust path and image source as needed
  },
  {
    title: 'Focus Training',
    description: 'Enhance your ability to concentrate and stay focused.',
    image: require('./assets/focus-training.jpeg'), // Adjust path and image source as needed
  },
  {
    title: 'Problem Solving',
    description: 'Sharpen your problem-solving skills with challenging exercises.',
    image: require('./assets/problem-solving.jpg'), // Adjust path and image source as needed
  },
];

const TrainingPrograms = () => {
  const navigation = useNavigation();

  const handleProgramPress = (programTitle: string) => {
    console.log(`Navigating to ${programTitle} program...`);
    // Implement navigation logic here if needed
  };

  const navigateBack = () => {
    navigation.navigate('Index'); // Navigate back to the Index page
  };
  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.programsContainer}>
        {trainingPrograms.map((program, index) => (
          <TouchableOpacity
            key={index}
            style={styles.programCard}
            onPress={() => handleProgramPress(program.title)}
          >
            <Image source={program.image} style={styles.programImage} />
            <Text style={styles.programTitle}>{program.title}</Text>
            <Text style={styles.programDescription}>{program.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Social Icons and Arrow Button */}
      <View style={styles.bottomButtonsContainer}>
     <TouchableOpacity style={styles.arrowButton} onPress={goBack}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  programsContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  programCard: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  programImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  programTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  programDescription: {
    fontSize: 16,
    color: '#454545',
    textAlign: 'center',
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  
  arrowButton: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 15,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TrainingPrograms;
