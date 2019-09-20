import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import BodyText from './../components/BodyText';
import TitleText from './../components/TitleText';

import MainButton from './../components/MainButton';
import Colors from './../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>
        The Game is Over!
      </TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('./../assets/success.png')}
          source={{ uri: 'https://www.petmd.com/sites/default/files/Senior-Cat-Care-2070625.jpg' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <BodyText>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>
        NEW GAME
      </MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  textContainer: {
    marginBottom: 20,
    width: '80%'
  }
});

export default GameOverScreen;