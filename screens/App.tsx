/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {generateElements} from '../helpers/generateElements.ts';
import Block from '../components/Block.tsx';

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

  return (
    <SafeAreaView style={styles.webview}>
      <View>{elementsState.map(renderElement)}</View>
      <View>
        <Pressable
          style={{width: 100, height: 100, backgroundColor: 'green'}}
          onPress={handleAdd}>
          <Text>Add element</Text>
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
