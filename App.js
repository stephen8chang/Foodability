/* Displays current latitude and longitude */
/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      where: { lat: null, lng: null },
      error: null
    }
  }
  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(this.geoSuccess,
      this.geoFailure,
      geoOptions);
  }
  geoSuccess = (position) => {
    console.log(position.coords.latitude);

    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lng: position.coords.longitude }
    })
  }
  geoFailure = (err) => {
    this.setState({ error: err.message });
  }
  render() {
    return (
      <View style={styles.container}>
        {!this.state.ready && (
          <Text style={styles.big}>Using Geolocation in React Native.</Text>
        )}
        {this.state.error && (
          <Text style={styles.big}>{this.state.error}</Text>
        )}
        {this.state.ready && (
          <Text style={styles.big}>{
            `Latitude: ${this.state.where.lat}
                    Longitude: ${this.state.where.lng}`
          }</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  big: {
    fontSize: 48
  }
});
*/

/*ZEROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*/
/* Supposedly draws route between Bursa and Instanbul */
/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';

export default class RnDirectionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: []
    }
  }

  componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
    this.getDirections("40.1884979, 29.061018", "41.0082,28.9784")
  }

  async getDirections(startLoc, destinationLoc) {
    try {
      let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`)
      let respJson = await resp.json();
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords: coords })
      return coords
    } catch (error) {
      alert(error)
      return error
    }
  }

  render() {
    return (
      <View>
        <MapView style={styles.map} initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>

          <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red" />

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

AppRegistry.registerComponent('RnDirectionsApp', () => RnDirectionsApp);
*/



/* ONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
/* (Berlin) Map displays but it doesn't draw the path  */
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { decode } from "@mapbox/polyline";

const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = "AIzaSyBKRbbUK2NxWb3XMqlMz69d9IYHReB9ELU";
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};

const App = () => {
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
      .then(coords => setCoords(coords))
      .catch(err => console.log("Something went wrong"));
  }, []);

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        {coords.length > 0 && <Polyline coordinates={coords} />}
        <Marker coordinate={{ latitude: 52.5200066, longitude: 13.404954 }} />
        <Marker coordinate={{ latitude: 50.1109221, longitude: 8.6821267 }} />
      </MapView>
    </>
  );
};

export default App;




/* TWOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */
/* Draws a straight line from Berlin to Frankfurt */
/*import React, { useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { decode } from "@mapbox/polyline";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9"
      }
    ]
  },
  // ...
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#3e73fd"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70"
      }
    ]
  }
];

const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = "AIzaSyAsuesRQJwqZ87KcgBk2izYxW67QGi_mbU";
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    console.log(points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};

const CustomMarker = () => (
  <View
    style={{
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10
    }}
  >
    <Text style={{ color: "#ffa" }}>Berlin</Text>
  </View>
);

const App = () => {
  const Berlin = {
    latitude: 52.5200066,
    longitude: 13.404954
  };

  const Frankfurt = {
    latitude: 50.1109221,
    longitude: 8.6821267
  };

  const [region, setRegion] = useState({
    latitude: 52.5200066,
    longitude: 13.404954,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
      customMapStyle={mapStyle}
    >
      <Marker coordinate={{ latitude: 52.5200066, longitude: 13.404954 }} />
      <Marker coordinate={{ latitude: 50.1109221, longitude: 8.6821267 }} />
      <Polyline coordinates={[Berlin, Frankfurt]} />

    </MapView>
  );
};

export default App;
*/
/*</MapView><CustomMarker />
      </Marker> */
// <Polyline coordinates={[Berlin, Frankfurt]} />



/* THREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
/* Draws tons of markers in New York Area           */
/*
import React from "react";
//import App from './components/app.jsx';
import { StyleSheet, Text, View } from "react-native";
//import { MapView } from "expo";
import MapView from "react-native-maps";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
    };
  }
  fetchMarkerData() {
    fetch('https://feeds.citibikenyc.com/stations/stations.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          markers: responseJson.stationBeanList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchMarkerData();
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 40.76727216,
          longitude: -73.99392888,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude,
          };

          const metadata = `Status: ${marker.statusValue}`;

          return (
            <MapView.Marker
              key={index}
              coordinate={coords}
              title={marker.stationName}
              description={metadata}
            />
          );
        })}
      </MapView>
    );
  }
}

*/