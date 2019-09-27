import { createBottomTabNavigator } from 'react-navigation-tabs';
import NewsGlobal from "../screens/NewsGlobal";
import NewsLocal from "../screens/NewsLocal";

const NewsTabNav = createBottomTabNavigator(
  {
    NewsGlobal: {
      screen: NewsGlobal,
      navigationOptions: {
        tabBarLabel: "Global"
      },
    },
    NewsLocal: {
      screen: NewsLocal,
      navigationOptions: {
        tabBarLabel: "Local"
      },
    }
  },
  {
    backBehavior: 'none',
  }
);
export default NewsTabNav;
