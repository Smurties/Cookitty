import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Text } from "native-base";
import { Divider } from "react-native-elements";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";

export default class InfoRow extends Component {
  constructor(props) {
    super(props);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: "100%",
          width: 1,
          backgroundColor: "#e1e8ee"
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <Divider style={styles.topDivider} />
        <FlatList
          horizontal
          data={this.props.info}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-around",
            alignContent: "space-around"
          }}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text>{item.title}</Text>
              <Text>{item.number}</Text>
            </View>
          )}
          keyExtractor={item => item.title}
        />
        <Divider style={ScreenStyleSheet.bottomDivider} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topDivider: {
    marginTop: 10,
    marginBottom: 0
  }
});
