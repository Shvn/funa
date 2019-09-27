import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountProfile from "../screens/AccountProfile";
import AccountSetting from "../screens/AccountSetting";

const AccountTabNav = createBottomTabNavigator(
  {
    AccountProfile: {
      screen: AccountProfile,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    },
    AccountSetting: {
      screen: AccountSetting,
      navigationOptions: {
        tabBarLabel: "Setting"
      }
    }
  },
  {
    backBehavior: "none",
  }
);
export default AccountTabNav;
