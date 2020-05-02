import React from "react";
import { StyleSheet, View, Text, Button, Image, FlatList } from "react-native";
import {Card} from 'react-native-paper'

export default function ReviewPage({ route, navigation }) {
    const {data} = route.params;
    const {uri} = route.params;
    const {path} = route.params;
    const {address} = route.params;
    const {ada} = route.params;
    const {adaRating} = route.params;
    const {wheel} = route.params;
    const {wheelRating} = route.params;
    const {door} = route.params;
    const {doorRating} = route.params;
    const renderList = ((item) =>{
        return(
            <Card style = {styles.mycard} key = {item.review}>
            <View style = {styles.cardView}>
                <Image
                style = {{width: 60, height: 60,  borderRadius: 30}}
                source = {{uri:uri}}
                
                />
                <View style = {{marginLeft:10}}>
                    <Text style = {styles.text}>{item.name}</Text>
                    <Text style = {styles.text}>{item.reviewInfo}</Text>
                </View>
            </View>
            </Card>
        )
    })

    return (
        <View style = {{flex:1}}>
            <Card style = {{margin:10}}>
                <Image
                style = {{width: 395, height: 200}}
                source = {path}
                />
            </Card>
            <Card style = {{margin:10}}>
                <Text>{address}</Text>
                <View style={{flexDirection: 'row'}}>
                <View style= {styles.redSquare}/>                    
                    <Text>  ADA Compliant Restrooms                                    </Text>
                    <View style={styles.container}>
                    <Image source={require('../star.png')} style={{width: 25, height: 25}} tintColor = 'red'>
                    </Image>
                    <View style={styles.overlay} />
                    </View>
                    <Text>{adaRating}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.greenSquare}/> 
                    <Text>  Wheelchair Accessibility                                        </Text>
                    <View style={styles.container}>
                    <Image source={require('../star.png')} style={{width: 25, height: 25}} tintColor = 'red'>
                    </Image>
                    <View style={styles.overlay} />
                    </View>
                    <Text>{wheelRating}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.greenSquare}/>   
                    <Text>  Automatic Doors                                                      </Text>
                    <View style={styles.container}>
                    <Image source={require('../star.png')} style={{width: 25, height: 25}} tintColor = 'red'>
                    </Image>
                    <View style={styles.overlay} />
                    </View>
                    <Text>{doorRating}</Text>
                </View>              
            </Card>
            <FlatList
                data = {data}
                renderItem = {({item}) => {
                    return renderList(item)
                }} 
                keyExtractor = {item => `${item.review}`}
            />
        </View>
    );
    }
    

    const styles = StyleSheet.create({
        mycard:{
            margin:5,
        },
        cardView:{
            flexDirection:"row",
            padding:6
        },
        text:{
            fontSize:18
        },
        redSquare: {
            width: 10,
            height: 10,
            backgroundColor: 'red'
        },
        greenSquare: {
            width: 10,
            height: 10,
            backgroundColor: 'green'
        }
    })


//<Button title="back to home screen" onPress={navigation.goBack()} />