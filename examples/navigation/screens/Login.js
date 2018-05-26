import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

export default class Login extends Component {
  resetToDashboard() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Dashboard" })]
      })
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <TouchableOpacity onPress={() => this.resetToDashboard()}>
          <Text style={[styles.link, { color: "blue" }]}>Go to Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Go Back</Text>
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
    margin: 10
  }
});
