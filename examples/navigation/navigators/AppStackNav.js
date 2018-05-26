import { StackNavigator } from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";

const AppStackNav = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: Login,
		navigationOptions: {
			header: null
		}
	},
	Signup: {
		screen: Signup,
		navigationOptions: {
			header: null
		}
	},
	Dashboard: { screen: Dashboard }
});

export default AppStackNav;
