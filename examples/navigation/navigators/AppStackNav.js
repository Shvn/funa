import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const AppStackNav = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default AppStackNav;
