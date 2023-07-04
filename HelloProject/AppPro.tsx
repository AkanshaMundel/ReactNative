/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
          hiiis
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AppPro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: 'red',
  },
  darkText: {
    color: '#000000',
  },
});
