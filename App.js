import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading } from "expo";
import * as Font from "expo-font";

import Home from "./src/screens/Home/Home";

let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("./assets/fonts/Poppins-Light.otf"),
};

class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return <Home />;
    } else {
      return <AppLoading />;
    }
  }
}

export default App;
