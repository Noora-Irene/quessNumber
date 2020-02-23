import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export default function App() {

 //  Math.floor(Math.random() * 100) + 1 
  const [input, setInput] = useState('');
  const [count, setScore] = useState('0');
  const [msg, setMsg] = useState('Guess number between 1 - 100');

  const buttonPressed= () => {

    if (input < Math.floor(Math.random() * 100) + 1) {
        setMsg('Your guess ' + input + ' is too low.');
        setScore(parseInt(count) + 1);
    } else if (input > Math.floor(Math.random() * 100) + 1) {
        setMsg('Your guess ' + input + ' is too high.');
        setScore(parseInt(count) + 1);
    } else {
       Alert.alert('You guessed the number in ' + count + ' guesses');
  }
};

  return (

    <View style={styles.wholeScreen}>
      <Text> {msg} </Text>
        <TextInput
          style={styles.input} 
          keyboardType= 'numeric'
          onChangeText={(input) => setInput(input)}
          value={input}
        />
      <Button onPress= {buttonPressed} title='Make guess' />
    </View>
  );
}
const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '30%',
    borderColor: 'black',
    borderWidth: 1
  }
});
