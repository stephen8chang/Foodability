/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";

export default class App extends React.Component {
  state = {
    latitude: null,
    longitude: null
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status != 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => this.setState({ latitude, longitude}, () => console.long('State:' , this.state)),
      (error) == console.log('Error: ', error)
    )
  }

  render() {
    const { latitude, longitude } = this.state

    if (latitude) {
      return (
        <MapView
          style = {{ flex : 1}}
          initialRegion = {{
            latitude,
            longitude,
            latitudeDelta: 0.0992,
            longitudeDelta: 0.0421
          }}
          >
        </MapView>
      );
    }
    return (
      <View style= {{ flex : 1, justifyContent: 'center', alignItems: 'center' }}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
          colors={['#9232db', '#9c4fd6', '#c99aed', '#c7a3e3']}
          style={{flex: 1}}
          >
            <Text style={styles.text}>Hello World</Text>
        </LinearGradient>
    );
  }
}

    
const styles = StyleSheet.create({
  text: {
      fontSize: 56,
      position: 'absolute',
      left: '15%',
      top: '40%',
      color: 'white',
  }
}
)

