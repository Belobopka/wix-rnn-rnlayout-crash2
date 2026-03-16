/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ActionSheetIOS,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {generateElements} from '../helpers/generateElements.ts';
import Block from '../components/Block.tsx';
import {Navigation} from 'react-native-navigation';

// used for testing elements persist between screen nav
// let localScreenState = generateElements();

function App({componentId}: {componentId: string}): React.JSX.Element {
  const [elementsState, setElementsState] = useState<
    {id: number; name: string}[]
  >(generateElements());

  const handleElementPress = (id: number) => {
    setElementsState(oldElements => {
      const newState = oldElements.filter(({id: oldId}) => oldId !== id);
      // localScreenState = [...newState];
      return newState;
    });
  };
  const renderElement = ({id, name}: {id: number; name: string}) => (
    <Block key={id} id={id} name={name} onPress={handleElementPress} />
  );

  const handleAdd = () => {
    setElementsState(oldElements => {
      const newState = [
        ...oldElements,
        {id: oldElements.length + 1, name: `test${oldElements.length}`},
      ];
      // localScreenState = [...newState];
      return newState;
    });
  };

  const handleShowActionSheet = () => {
    if (Platform.OS === 'android') return;
    ActionSheetIOS.showActionSheetWithOptions(
      {
        //title: 'Select an option',
        // message: 'This is a message',
        options: ['Cancel', 'Option 2', 'Option 3'],
        // cancelButtonIndex: 0,
      },
      selectedIndex => {
        console.log(selectedIndex);
      },
    );
  };

  return (
    <SafeAreaView style={styles.webview}>
      <View>{elementsState.map(renderElement)}</View>
      <View>
        <Pressable
          style={{width: 100, height: 100, backgroundColor: 'green'}}
          onPress={handleAdd}>
          <Text>Add element</Text>
        </Pressable>
        <Pressable
          style={{width: 100, height: 100, backgroundColor: 'red'}}
          onPress={handleShowActionSheet}>
          <Text>Show toast</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

App.options = {
  topBar: {
    visible: false,
  },
};

const styles = StyleSheet.create({
  webview: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default App;
