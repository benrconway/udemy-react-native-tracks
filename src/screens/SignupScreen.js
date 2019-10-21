import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h1>Sign Up For Tracker</Text>
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
      { state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null }
      <Spacer />
      <Button title="Sign up"
        onPress={() => signup({ email, password }, () => {
          navigation.navigate('mainFlow');
        })}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 120
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  }
});

export default SignupScreen;