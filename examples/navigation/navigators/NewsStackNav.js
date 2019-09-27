import { createStackNavigator } from "react-navigation-stack";
import NewsTabNav from './NewsTabNav';
import NewsDetail from '../screens/NewsDetail';

const NewsStackNav = createStackNavigator(
  {
    NewsTabNav: { screen: NewsTabNav },
    NewsDetail: { screen: NewsDetail },
  },
  {
    headerMode: 'none',
  }
);

export default NewsStackNav;
