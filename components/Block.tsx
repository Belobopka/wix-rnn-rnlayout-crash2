import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  Layout,
} from 'react-native-reanimated';
import {FADE_IN_DURATION, LAYOUT_DURATION} from '../screens/Main.tsx';
import {Pressable, Text} from 'react-native';
import React from 'react';

const Block = ({
  id,
  name,
  onPress,
}: {
  id: number;
  name: string;
  onPress: (id: number) => void;
}) => (
  <Animated.View
    key={id}
    style={{width: 50, height: 50, backgroundColor: 'orange'}}
    entering={FadeIn.delay(FADE_IN_DURATION)}
    exiting={FadeOut.delay(FADE_IN_DURATION)}
    layout={Layout.duration(LAYOUT_DURATION).easing(Easing.cubic)}>
    <Pressable
      style={{width: '100%', height: '100%'}}
      onPress={() => onPress(id)}>
      <Text>{name}</Text>
    </Pressable>
  </Animated.View>
);

export default Block;
