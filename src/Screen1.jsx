import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const Screen1 = ({navigation: {replace}}) => {
  const [counter, setCounter] = useState(0);

  const navigateToScreen2 = () => {
    replace('Screen2', {count: counter});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>
      <Text>Counter</Text>

      <TouchableOpacity style={styles.button} onPress={navigateToScreen2}>
        <Text>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  counterBtn: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'skyblue',
  },
  counterText: {
    fontSize: 24,
  },
});

export default Screen1;
