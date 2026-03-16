import { SafeAreaView } from "react-native";
import { Navigation } from "react-native-navigation";

const React = require('react');
const { View, Text, StyleSheet, TouchableOpacity } = require('react-native');
// const Colors = require('../commons/Colors');

const Toast = function ({ componentId }) {
  return (
    <SafeAreaView pointerEvents="box-none" style={{flex: 1}}>
    <View style={styles.root}>
      <TouchableOpacity onPress={() => Navigation.dismissOverlay(componentId)} style={styles.toast}>
        <Text style={styles.text}>This a very important message!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Navigation.dismissOverlay(componentId)}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // flexDirection: 'column-reverse',
  },
  toast: {
    elevation: 2,
    flexDirection: 'row',
    height: 40,
    margin: 16,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    marginRight: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

Toast.options = {
  layout: {
    componentBackgroundColor: 'transparent',
  },
  overlay: {
    interceptTouchOutside: false,
  },
};

module.exports = Toast;