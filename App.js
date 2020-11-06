import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './src/pages/LoginPage';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions:{
      title: "BEM VINDO",
    }
  }

}, {
  defaultNavigationOptions: {
    title: "SERIES",
    headerTintColor: 'red',
    headerStyle: {
      backgroundColor: 'black',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'

    },
    headerTitleStyle: {
      color: 'red',
      fontFamily: 'sans-serif',
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;