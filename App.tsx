/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import NativeAudioStatus from './specs/NativeAudioStatus';

const waitAsync = async () => {
  const startTime = Date.now();
  const result = await NativeAudioStatus.isMusicPlayingAsync();
  console.log('result', result);
  const endTime = Date.now();
  console.log('Time taken waitAsync', endTime - startTime);
};

function App() {
  useEffect(() => {
    const startTime = Date.now();
    console.log(
      'App mounted',
      NativeAudioStatus.isMusicPlaying(),
      NativeAudioStatus.isMusicPlayingAsync,
    );
    const endTime = Date.now();
    console.log('Time taken', endTime - startTime);
    waitAsync();
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
