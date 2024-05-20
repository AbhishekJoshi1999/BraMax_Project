import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyBraMaxHomeNavBar from './Screens/Navbar/MyBraMaxHomeNavBar';
import Index from './index';
import DailyChallenge from './Screens/DailyChallenge';
import BrainGames from './Screens/DesignSummary/BrainGames';
import ProgressTracking from './Screens/DesignSummary/ProgressTracking';
import CustomizedTrainingProgram from './Screens/DesignSummary/CustomizedTrainingProgram';
import BraMaxDetails from './Screens/BraMaxDetails';
import Chess from './Screens/BrainGames/Chess';
import { RootStackParamList } from './type';
import Puzzle from './Screens/BrainGames/Puzzle';
import Quiz from './Screens/BrainGames/Quiz';

const stack = createStackNavigator();

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Screens/DailyChallenge" component={DailyChallenge} />
        <Stack.Screen name="Screens/BrainGames/BrainGames" component={BrainGames} />
        <Stack.Screen name="Screens/ProgressTracking" component={ProgressTracking} />
        <Stack.Screen name="Screens/TrainingProgram" component={CustomizedTrainingProgram} />
        <Stack.Screen name="Screens/BraMaxDetails" component={BraMaxDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;