import 'setimmediate';

import {Navigation} from 'react-native-navigation';

import {name as appName} from './app.json';
import Main from './screens/Main';
import App from './screens/App';

Navigation.registerComponent('com.myApp.App', () => App);
Navigation.registerComponent('com.myApp.Main', () => Main);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.App',
            },
          },
        ],
      },
    },
  });
});
