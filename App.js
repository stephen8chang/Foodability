// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { MAP_TYPES } from 'react-native-maps';
// import MapView from "react-native-maps"
// import Permissions from "expo"
// import * as Permissions from 'expo-permissions'


// export default function App() {
  
// />
//  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'purple',
//   },
// });


// state={
//   latitude: null,
//   longitude: null
// }
// async  
// return (
//   <MapView
//   style = {{flex: 1}}
//   initialRegion={{
//     latitude,
//     longitude,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421


import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

export default class App extends React.Component {
  render() {
    const gradientHeight = 800;
    const gradientBackground = 'purple';
    const data = Array .from({ length: gradientHeight});
    return (
      <View style={styles.container}>

        {
          // Gradient Color Background 
        }
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradientBackground,
              height: 1,
              bottom: (gradientHeight - i),
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradientHeight) * (i + 1)
            }}
          />
        ))}

        
        
        
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});