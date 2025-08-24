import {Pressable, SafeAreaView, View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import React, {useState} from 'react';
import Block from '../components/Block.tsx';

export const FADE_IN_DURATION = 150;
export const LAYOUT_DURATION = 200;

export const generateElements = (length = 5) =>
  new Array(length)
    .fill(0)
    .map((_, index) => ({id: index + 1, name: `test${index}`}));

let localScreenState = generateElements();

const Main = ({componentId}: {componentId: string}) => {
  const [elementsState, setElementsState] = useState<
    {id: number; name: string}[]
  >(generateElements());
  const handleElementPress = (id: number) => {
    setElementsState(oldElements => {
      const newState = oldElements.filter(({id: oldId}) => oldId !== id);
      localScreenState = [...newState];
      return newState;
    });
  };
  const renderElement = ({id, name}: {id: number; name: string}) => (
    <Block key={id} id={id} name={name} onPress={handleElementPress} />
  );

  const handleGoBack = () => {
    Navigation.pop(componentId);
  };

  const handleAdd = () => {
    setElementsState(oldElements => {
      const newState = [
        ...oldElements,
        {id: oldElements.length, name: `test${oldElements.length}`},
      ];
      localScreenState = [...newState];
      return newState;
    });
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View>{elementsState.map(renderElement)}</View>
      <View>
        <Pressable
          style={{width: 100, height: 100, backgroundColor: 'red'}}
          onPress={handleGoBack}>
          <Text>Back</Text>
        </Pressable>
        <Pressable
          style={{width: 100, height: 100, backgroundColor: 'green'}}
          onPress={handleAdd}>
          <Text>Add element</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Main;
