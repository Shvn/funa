import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import RootNav from "./navigators/RootNav";

const Root = createAppContainer(RootNav);

export default class App extends Component {
  render() {
    return <Root />;
  }
}
