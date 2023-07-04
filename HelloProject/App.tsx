import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import AppPro from './AppPro';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello world with comp </Text>
        <AppPro />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
