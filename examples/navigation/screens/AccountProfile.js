import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class AccountProfile extends Component {
	static navigationOptions = {
		title: "profile"
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>AccountProfile</Text>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("NewsLocal")}
				>
					<Text style={styles.link}>Try going to Local News</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	link: {
		fontSize: 16,
		textAlign: "center",
		margin: 10,
		color: "blue"
	}
});
