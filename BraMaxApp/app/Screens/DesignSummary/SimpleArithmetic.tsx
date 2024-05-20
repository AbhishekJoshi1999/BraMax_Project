// SimpleArithmetic.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimpleArithmetic = () => {
  return (
    <View style={styles.container}>
      <Text>Simple Arithmetic Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SimpleArithmetic;
