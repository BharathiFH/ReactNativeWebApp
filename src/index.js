/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppName from './app.json';

AppRegistry.registerComponent(AppName.name, () => App);
AppRegistry.runApplication(AppName.name, {
  rootTag: document.getElementById('root'),
});
