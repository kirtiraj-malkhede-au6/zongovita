import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Screen3 = ({navigation: {replace}, route}) => {
  let countValue = route?.params?.count;
  const navigateToScreen2 = () => {
    replace('Screen2', {count: countValue});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{countValue}</Text>
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
  counterText: {
    fontSize: 24,
  },
});

export default Screen3;
