import { Navigation } from "react-native-navigation"
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
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

var styles = StyleSheet.create({

    header: {
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    body: {
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 15,
    },

    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});


export default function MapsPage({ navigation }) {
    const [coords, setCoords] = useState([]);

    /*useEffect(() => {
    getDirections("30.286488,-97.736568", "30.286176 ,-97.742169")
        .then(coords => setCoords(coords))
        .catch(err => console.log("Something went wrong"));
    }, []); */

    const [search, setSearch] = useState("");
    return (
        <>
            {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        <Navigator />
      /> */}


            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 30.286488,
                    longitude: -97.736568,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                {coords.length > 0 && <Polyline coordinates={coords} />}
                <MapView.Marker
                    coordinate={{ latitude: 30.286488, longitude: -97.736568 }}
                    title={"GDC"}
                    description={"Convergent team meeting place!"}
                >
                    <MapView.Callout>
                        <View>
                            <Text style={styles.header}>
                                Gates Dell Complex
                            </Text>
                            <Text style={styles.body}>
                                Meeting place for Convergent meetings.
                            </Text>
                            <Button
                                title="Learn More"
                            />
                        </View>
                    </MapView.Callout>

                </MapView.Marker>

                <MapView.Marker
                    coordinate={{ latitude: 30.286176, longitude: -97.742169 }}
                    title={"Chipotle"}
                    description={"Cool place to eat Tex Mex food!"}
                    pinColor={"blue"}
                    onPress={() => { getDirections("30.286488,-97.736568", "30.286176 ,-97.742169").then((coords) => setCoords(coords)); navigation.navigate('Review Page',
                    {data : [
                        {review: 1, name: "Gautham", reviewInfo: "terribly awful"},
                        {review: 2, name: "Gautham", reviewInfo: "awful"},
                        {review: 3, name: "Gautham", reviewInfo: "sucks"},
                        {review: 4, name: "Gautham", reviewInfo: "meh"},
                        {review: 5, name: "Gautham", reviewInfo: "eh"},
                        {review: 6, name: "Gautham", reviewInfo: "alright"},
                        {review: 7, name: "Gautham", reviewInfo: "good"},
                        {review: 8, name: "Gautham", reviewInfo: "great"},
                        {review: 9, name: "Gautham", reviewInfo: "awesome"},
                        {review: 10, name: "Gautham", reviewInfo: "perfect"},
                    ], uri: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=carson-arias-7Z03R1wOdmI-unsplash.jpg',
                    path: require('../chipotle.jpg'), address: "Address: 2230 Guadalupe St # 32, Austin, TX 78705", ada: false, adaRating : 0.0, 
                    wheel: true, wheelRating: 4.0, door: true, doorRating: 4.0})}}>
                    <MapView.Callout>
                        <View>
                            <Text style={styles.header}>
                                Chipotle
                            </Text>
                            <Text style={styles.body}>
                                Cool place to eat Tex Mex food!
                            </Text>
                            <Button
                                title="Learn More"
                            />
                        </View>
                    </MapView.Callout>
                </MapView.Marker>        
                <MapView.Marker
                    coordinate={{ latitude: 30.281785, longitude: -97.743173 }}
                    title={"Chick-fil-A"}
                    description={"Best fast food place ever!"}
                    pinColor={"blue"}
                    onPress={() => { getDirections("30.286488,-97.736568", "30.286176 ,-97.742169").then((coords) => setCoords(coords)); navigation.navigate('Review Page',
                    {data : [
                        {review: 1, name: "Stephen", reviewInfo: "terribly awful"},
                        {review: 2, name: "Stephen", reviewInfo: "awful"},
                        {review: 3, name: "Stephen", reviewInfo: "sucks"},
                        {review: 4, name: "Stephen", reviewInfo: "meh"},
                        {review: 5, name: "Stephen", reviewInfo: "eh"},
                        {review: 6, name: "Stephen", reviewInfo: "alright"},
                        {review: 7, name: "Stephen", reviewInfo: "good"},
                        {review: 8, name: "Stephen", reviewInfo: "great"},
                        {review: 9, name: "Stephen", reviewInfo: "awesome"},
                        {review: 10, name: "Stephen", reviewInfo: "perfect"},
                    ], uri: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=davisco-5E5N49RWtbA-unsplash.jpg',
                    path: require('../cfa.jpg'), address: "Address: 2230 Guadalupe St # 32, Austin, TX 78705", ada: false, adaRating : 0.0, 
                    wheel: true, wheelRating: 4.0, door: true, doorRating: 4.0})}}>
                    <MapView.Callout>
                        <View>
                            <Text style={styles.header}>
                                Chick-fil-A
                            </Text>
                            <Text style={styles.body}>
                                Best fast food place ever!
                            </Text>
                            <Button
                                title="Learn More"
                            />
                        </View>
                    </MapView.Callout>
                </MapView.Marker>

                <MapView.Marker
                    coordinate={{ latitude: 30.293756, longitude: -97.741728 }}
                    title={"Torchy's Tacos"}
                    description={"Best tacos in Austin!"}
                    pinColor={"blue"}
                    onPress={() => getDirections("30.286488,-97.736568", "30.293756 ,-97.741728").then((coords) => setCoords(coords))}
                >
                    <MapView.Callout>
                        <View>
                            <Text style={styles.header}>
                                Torchy's Tacos
                            </Text>
                            <Text style={styles.body}>
                                Best tacos in Austin!
                            </Text>
                            <Button
                                title="Learn More"
                            />
                        </View>
                    </MapView.Callout>
                </MapView.Marker>

                <MapView.Marker
                    coordinate={{ latitude: 30.286289, longitude: -97.744987 }}
                    title={"Plucker's"}
                    description={"3am dinners hit different here"}
                    pinColor={"blue"}
                    onPress={() => getDirections("30.286488,-97.736568", "30.286289 ,-97.744987").then((coords) => setCoords(coords))}
                >
                    <MapView.Callout>
                        <View>
                            <Text style={styles.header}>
                                Plucker's
                            </Text>
                            <Text style={styles.body}>
                                3am dinners hit different here
                            </Text>
                            <Button
                                title="Learn More"
                            />
                        </View>
                    </MapView.Callout>
                </MapView.Marker>

            </MapView>


            {/* <View style={{ alignSelf: 'center', fontSize: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Foodability Maps View </Text>
            </View> */}

        </>
    );
}