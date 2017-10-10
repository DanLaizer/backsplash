import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/backspash2.png')}
          />
          <Text style={styles.title}>Backsplash</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 250,
    height: 250
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
    backgroundColor:'transparent'
  }
});
