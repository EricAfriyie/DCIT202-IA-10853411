import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'

export default function StartScreen({ navigation }) {
  return (
    <Background>
    <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Kews Login</Header>
      <Paragraph>
       
        Join us now to start your amazing tech shopping and orders.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
