import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const Screen2 = ({navigation: {navigate, replace}, route}) => {
  let paramsValue = route?.params?.count;

  const [counter, setCounter] = useState(paramsValue ? paramsValue : 0);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (pause) {
      const conterhandler = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000);
      return () => clearInterval(conterhandler);
    }
  }, [paramsValue, pause]);

  const navigateToScreen3 = () => {
    replace('Screen3', {count: counter});
  };
  const navigateToScreen1 = () => {
    replace('Screen1', {count: 0});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>
      <Text>Counter</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToScreen1}>
        <Text>Go to Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToScreen3}>
        <Text>Go to Screen 3</Text>
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
  counterText: {
    fontSize: 24,
  },
});

export default Screen2;
