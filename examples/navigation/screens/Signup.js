import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Signup</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.goBack}>Go Back</Text>
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
  goBack: {
    fontSize: 16,
    textAlign: "center",
    margin: 10
  }
});
