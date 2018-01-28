import { DrawerNavigator } from "react-navigation";
import AccountTabNav from "./AccountTabNav";
import NewsStackNav from "./NewsStackNav";

const AppDrawerNav = DrawerNavigator({
	News: {
		screen: NewsStackNav,
		navigationOptions: {
			title: "News"
		}
	},
	Account: {
		screen: AccountTabNav,
		navigationOptions: {
			title: "Account"
		}
	}
});

export default AppDrawerNav;
