import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from "../screens/Dashboard";
import AppStackNav from './AppStackNav';

const RootNav = createStackNavigator({
  Guest: {
    screen: AppStackNav,
    navigationOptions: {
      header: null,
    },
  },
  Dashboard: {
    screen: Dashboard
  },
});

export default RootNav;
