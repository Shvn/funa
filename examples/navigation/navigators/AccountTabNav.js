import { TabNavigator } from "react-navigation";
import AccountProfile from "../screens/AccountProfile";
import AccountSetting from "../screens/AccountSetting";

const AccountTabNav = TabNavigator(
	{
		AccountProfile: { screen: AccountProfile },
		AccountSetting: {
			screen: AccountSetting,
			navigationOptions: {
				title: "Setting"
			}
		}
	},
	{
		backBehavior: "none",
		tabBarPosition: "bottom"
	}
);
export default AccountTabNav;
