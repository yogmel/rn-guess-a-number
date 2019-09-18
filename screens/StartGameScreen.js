import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Input from './../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from './../constants/colors';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [seletedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
      return;
    }

    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
    Keyboard.dismiss();
  }

  let confirmedOutput;

  if(confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{seletedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(seletedNumber)} />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCaptalize='none'
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
            />
          <View style={styles.buttonContainer}>
            <View  style={styles.button}>
              <Button color={Colors.primary} title="Reset" onPress={resetInputHandler} />
            </View>
            <View  style={styles.button}> 
              <Button color={Colors.accent} title="Confirm" onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: '100%',
    maxWidth: 80
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

export default StartGameScreen;