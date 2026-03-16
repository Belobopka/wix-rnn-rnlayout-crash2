import {Pressable, SafeAreaView, View, Text} from 'react-native';
import React, {useState} from 'react';
import Block from '../components/Block.tsx';
import {generateElements} from '../helpers/generateElements.ts';

export const FADE_IN_DURATION = 150;
export const LAYOUT_DURATION = 200;

// let localScreenState = generateElements();

const Main = ({componentId}: {componentId: string}) => {
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
        {id: oldElements.length + 1, name: `test${oldElements.length + 1}`},
      ];
      // localScreenState = [...newState];
      return newState;
    });
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'black',}}>
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
};

export default Main;
