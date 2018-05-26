import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class NewsLocal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>NewsLocal</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("NewsDetail", {
              topic: "React Navigation"
            })
          }
        >
          <Text style={styles.link}>Go to News Detail with params</Text>
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
