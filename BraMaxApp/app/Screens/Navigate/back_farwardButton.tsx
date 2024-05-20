import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackForward = () => {
  const navigation = useNavigation();

  const handleBackward = () => {
    navigation.goBack(); // Navigates to the previous screen
  };

  const handleForward = () => {
    // Define your logic for forward navigation
    // For example, navigate to the next screen in the stack
    navigation.navigate('NextPage');
  };

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navigationButton} onPress={handleBackward}>
        <Text style={styles.buttonText}>Backward</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationButton} onPress={handleForward}>
        <Text style={styles.buttonText}>Forward</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  navigationButton: {
    width: '45%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BackForward;
