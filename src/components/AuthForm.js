import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Spacer>
      <Text h1>{headerText}</Text>
    </Spacer>
    <Input
      autoCapitalize='none'
      autoCorrect={false}
      label="Email"
      value={email}
      onChangeText={setEmail}
    />
    <Spacer />
    <Input
      autoCapitalize='none'
      autoCorrect={false}
      label="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
    <Spacer />
    <Button title={submitButtonText}
      onPress={() => onSubmit({ email, password })}
    />
  </>
)
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;