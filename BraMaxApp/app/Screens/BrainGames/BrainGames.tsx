import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/app/type';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for icons

// Define a type or interface for game data
interface Game {
  title: string;
  description: string;
  image: any; // Assuming images are imported correctly
  link: string; // URL to open when play button is pressed
}

const BrainGames = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Dummy data for different games
  const games: Game[] = [
    {
      title: 'Chess',
      description: 'Challenge your mind with classic Chess.',
      image: require('../assets/chess.jpg'), // Adjust path and image source as needed
      link: 'https://www.chess.com/',
    },
    {
      title: 'Puzzle',
      description: 'Solve intriguing puzzles to sharpen your skills.',
      image: require('../assets/puzzle.png'), // Adjust path and image source as needed
      link: 'https://www.crazygames.com/c/puzzle',
    },
    {
      title: 'Quiz',
      description: 'Test your knowledge with fun quizzes.',
      image: require('../assets/Quiz.png'), // Adjust path and image source as needed
      link: 'https://poki.com/en/quiz',
    },
    // Add more games as needed
  ];

  // Function to open external URL
  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open link:', err));
  };

  // Function to navigate to different game screens
  const handleStartGame = (screenName: keyof RootStackParamList, link: string) => {
    if (screenName.startsWith('http')) {
      handleOpenLink(screenName); // Open external link directly
    } else {
      navigation.navigate(screenName); // Navigate to internal screen
    }
  };

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Brain Games</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {games.map((game, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gameCard}
            onPress={() => handleStartGame(`BrainGames/${game.title}` as keyof RootStackParamList, game.link)}
          >
            <View style={styles.cardContent}>
              <Image source={game.image} style={styles.gameCardImage} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.gameCardTitle}>{game.title}</Text>
                <Text style={styles.gameCardDescription}>{game.description}</Text>
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={() => handleStartGame(game.link, game.link)}
                >
                  <Text style={styles.playButtonText}>Play</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Brain Games Inc.</Text>
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
    backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  gameCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameCardImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 20,
  },
  cardTextContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  gameCardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  gameCardDescription: {
    fontSize: 16,
    color: '#454545',
    marginBottom: 10,
  },
  playButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  playButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#454545',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
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

export default BrainGames;
