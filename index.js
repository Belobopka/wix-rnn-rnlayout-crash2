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
      bottomTabs: {
        options: {
          bottomTabs: {
            backgroundColor: 'green',
          },
        },
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'APP_TAB',
              children: [
                {
                  component: {
                    id: 'com.myApp.App',
                    name: 'com.myApp.App',
                  },
                },
              ],
              options: {
                bottomTab: {
                  name: 'App',
                  text: 'APP',
                  selectedTextColor: 'orange',
                },
              },
            },
          },
          {
            stack: {
              id: 'MAIN_TAB',
              children: [
                {
                  component: {
                    id: 'com.myApp.Main',
                    name: 'com.myApp.Main',
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTab: {
                  name: 'Main',
                  text: 'MAIN',
                  selectedTextColor: 'orange',
                },
              },
            },
          },
        ],
      },
    },
  });
});
