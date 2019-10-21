import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 40 }}>SigninScreen</Text>
      <Button
        title="Don't have an account? Go to Sign Up"
        onPress={()=> navigation.navigate('Signup')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;