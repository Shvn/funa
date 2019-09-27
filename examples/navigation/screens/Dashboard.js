import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import AppDrawerNav from "../navigators/AppDrawerNav";

export default class Dashboard extends Component {
  static router = AppDrawerNav.router;

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Futuristic News App",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={{ padding: 10 }}>Menu</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{ padding: 10 }}>Logout</Text>
        </TouchableOpacity>
      )
    };
  };

  render() {
    return <AppDrawerNav navigation={this.props.navigation} />;
  }
}
