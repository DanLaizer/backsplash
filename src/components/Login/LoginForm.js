import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar} from 'react-native';

export default class LoginForm extends React.Component {
  render(){
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.container}>
          <StatusBar
            barStyle="light-content"
          />
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            returnKeyType="go"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <View style={{ height: 30 }} />

      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }

});
