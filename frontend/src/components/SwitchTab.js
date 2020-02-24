import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


const initialLayout = { width: Dimensions.get('window').width };

export default class SwitchTab extends Component{
    constructor(props) {
        super(props);
    }

    

    render() {

        function FirstRoute() {
            return <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
        }
            

          
        function SecondRoute() {
            return <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
        }
          
        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
        ]);

        const renderScene = SceneMap({
            first: FirstRoute,
            second: SecondRoute,
        });

        return (
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
            />
          );
    }
  
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});