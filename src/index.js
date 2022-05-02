import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Hello Tellwut User !</Text>
    </View>
  )
};

export default App;

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontFamily: 'Rubik-Italic'
    }
});
