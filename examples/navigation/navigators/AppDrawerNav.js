import { createDrawerNavigator } from "react-navigation-drawer";
import AccountTabNav from './AccountTabNav';
import NewsStackNav from './NewsStackNav';

const AppDrawerNav = createDrawerNavigator({
  News: {
    screen: NewsStackNav,
    navigationOptions: {
      title: 'News',
    },
  },
  Account: {
    screen: AccountTabNav,
    navigationOptions: {
      title: 'Account',
    },
  },
});

export default AppDrawerNav;
