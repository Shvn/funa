import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppDrawerNav from "../navigators/AppDrawerNav";
import { NavigationActions } from "react-navigation";

export default class Dashboard extends Component {
	static router = AppDrawerNav.router;

	static navigationOptions = ({ navigation }) => {
		return {
			title: "Futuristic News App",
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.navigate("DrawerToggle")}>
					<Icon name="md-menu" size={30} style={{ padding: 10 }} />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity
					onPress={() =>
						navigation.dispatch(
							NavigationActions.reset({
								index: 0,
								key: null,
								actions: [NavigationActions.navigate({ routeName: "Home" })]
							})
						)
					}
				>
					<Icon name="ios-log-out" size={30} style={{ padding: 10 }} />
				</TouchableOpacity>
			)
		};
	};

	render() {
		return <AppDrawerNav navigation={this.props.navigation} />;
	}
}
