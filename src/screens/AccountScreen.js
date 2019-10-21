import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from  'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.label}>Account Screen</Text>
      <Spacer>
        <Button
          style={styles.signout}
          title="Sign Out"
          onPress={signout}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 48
  },
  signout: {
  }
});

export default AccountScreen;