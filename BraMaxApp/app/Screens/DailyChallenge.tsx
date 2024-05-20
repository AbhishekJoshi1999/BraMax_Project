import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit'; // Importing LineChart for graph
import { FontAwesome } from '@expo/vector-icons'; // Importing FontAwesome for icons

const DailyChallenge = () => {
  const navigation = useNavigation();

  // Sample data for the graph
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Color of the line
        strokeWidth: 2, // Width of the line
      },
    ],
  };

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.greenCard]}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('SimpleArithmetic')}>
            <Text style={styles.bigButtonText}>Spatial Knowledge</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: '5%' }}>
          <View style={[styles.card, styles.redCard]}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('WordPuzzle')}>
              <Text style={styles.bigButtonText}>Word and Wisdom</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, styles.lightBlueCard]}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('SpatialKnowledge')}>
              <Text style={styles.bigButtonText}>Word Puzzle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Summary Report Card */}
      <View style={[styles.summaryBigcard, styles.summaryCard]}>
        <LineChart
          data={data}
          width={300}
          height={200}
          yAxisLabel="Games"
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
      {/* Additional Buttons at the Bottom */}
      <View style={[styles.additionalButtonsContainer]}>
        <TouchableOpacity style={[styles.additionalButton, styles.blueButton]}>
          <FontAwesome name="facebook" size={20} color="#3b5998" />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.additionalButton, styles.lightBlueButton]}>
          <FontAwesome name="twitter" size={20} color="#1DA1F2" />
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.additionalButton, styles.lightRedButton]}>
          <FontAwesome name="google" size={20} color="#DB4437" />
          <Text style={styles.buttonText}>Gmail</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={styles.arrowButton} onPress={goBack}>
          <View style={styles.backButton}>
            <FontAwesome name="arrow-left" size={24} color="#007AFF" />
          </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cardContainer: {
    width: '50%',
    marginBottom: '5%',
  },
  card: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryBigcard: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F6F0',
    flexDirection: 'row', // To align text and dot horizontally
    paddingHorizontal: 10,
  },
  additionalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    position: 'absolute',
    bottom: 160, // Adjusted to move the buttons up slightly
  },
  additionalButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bigButtonText: {
    fontSize: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5, // Adjust margin as needed
  },
  greenCard: {
    backgroundColor: '#8BC34A',
  },
  redCard: {
    backgroundColor: '#EF9A9A',
  },
  lightBlueCard: {
    backgroundColor: '#ADD8E6',
  },
  blueButton: {
    backgroundColor: '#007AFF',
  },
  lightBlueButton: {
    backgroundColor: '#87CEFA',
  },
  lightRedButton: {
    backgroundColor: '#FFCCCB',
  },
  summaryCard: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  arrowButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 70,
    marginLeft:290,
     // Adjusted to make the entire TouchableOpacity pressable
  },
  backButton: {
    backgroundColor: '#0000FFF',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
});

export default DailyChallenge;
