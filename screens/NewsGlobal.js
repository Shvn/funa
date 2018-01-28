import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class NewsGlobal extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>NewsGlobal</Text>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("AccountSetting")}
				>
					<Text style={styles.link}>Try going to Account Setting</Text>
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
