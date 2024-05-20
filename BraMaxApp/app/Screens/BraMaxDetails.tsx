
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit'; // Importing LineChart for graph
import { FontAwesome } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';

const BraMaxDetails = () => {
  const navigation = useNavigation();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  // Sample data for the graph
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Color of the line
        strokeWidth: 2 // Width of the line
      }
    ]
  };
  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.greenCard]}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('SimpleArithmetic')}>
            <Text style={styles.bigButtonText}>Simple Arithmetic</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: '5%' }}>
          <View style={[styles.card, styles.redCard]}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('WordPuzzle')}>
              <Text style={styles.bigButtonText}>Word Puzzle</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, styles.lightBlueCard]}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('SpatialKnowledge')}>
              <Text style={styles.bigButtonText}>Spatial Knowledge</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.datePickerContainer}>
      <View style={styles.datePicker}>
  <Text style={styles.datePickerLabel}>Date From:</Text>
  

</View>

<View style={styles.datePicker}>
  <Text style={styles.datePickerLabel}>Date To:</Text>

</View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={[styles.smallButton, styles.blueButton]} onPress={() => handleButtonPress('Search')}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.smallButton, styles.blueButton]} onPress={() => handleButtonPress('ClearSearch')}>
          <Text style={styles.buttonText}>Clear Search</Text>
        </TouchableOpacity>
      </View>
      {/* Additional Buttons */}
      <View style={styles.additionalButtonsContainer}>
        <TouchableOpacity style={[styles.additionalButton, styles.blueButton]} onPress={() => handleButtonPress('AdditionalScreen1')}>
          <View style={styles.dotContainer}>
            <View style={styles.dot}></View>
          </View>
          <Text style={styles.buttonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.additionalButton, styles.blueButton]} onPress={() => handleButtonPress('AdditionalScreen2')}>
          <View style={styles.dotContainer}>
            <View style={styles.dot}></View>
          </View>
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.additionalButton, styles.blueButton]} onPress={() => handleButtonPress('AdditionalScreen3')}>
          <View style={styles.dotContainer}>
            <View style={styles.dot}></View>
          </View>
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
      </View>
      {/* Summary Report Card */}
      <View style={[styles.summaryBigcard, styles.summaryCard]}>
        <Text style={styles.summaryTitle}>Games Played Summary</Text>
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
              borderRadius: 16
            }
          }}
        />
       
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
  smallButton: {
    width: 80,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    marginHorizontal: 10,
  },
  additionalButtonsContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#00000',
    alignItems: 'flex-end',
  },
  additionalButton: {
    width: '70%',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 1,
    flexDirection: 'row', // Align text and dot horizontally
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
  buttonSideText: {
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
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  datePicker: {
    flex: 1,
    marginRight: 10,
  },
  datePickerLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 5,
    borderRadius: 1,
    backgroundColor: '#454545',
    // Black dot color
    marginRight: 10,
  },
  dotText: {
    fontSize: 10,
    color: '#C70039', // Black text color for dot text
    fontWeight: 'bold',
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
    position: 'absolute',
    bottom: 0,
    right: 20,
    backgroundColor: 'transparent',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
});

export default BraMaxDetails;