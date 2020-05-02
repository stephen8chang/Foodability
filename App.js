import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import SearchHeader from 'react-native-search-header';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#b19cd9'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        marginBottom: 6,
        backgroundColor: '#b19cd9'
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        textAlign: `left`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});

export default class Demo extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <View style = { styles.container }>
                <StatusBar barStyle = 'light-content' />
                <View style = { styles.status }/>
                <View style = { styles.header }>
                    
                    <Button
                        title = 'Search'
                        color = '#f5fcff'
                        onPress = {() => this.searchHeader.show()}
                    />
                </View>
                <SearchHeader
                    ref = {(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}
                    onClear = {() => {
                        console.log(`Clearing input!`);
                    }}
                    onGetAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else {
                            return [];
                        }
                    }}
                />
                
            </View>
        );
    }
}


import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import { Container, Content, Text, Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left } from 'native-base'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      review: null,
      rating: null,
      isSubmited: false,
    };
  }
  postContact = (name, review, rating, nameClear, reviewClear, ratingClear) => {
    if (this.state.review != null) {
      fetch('https://fir-bc547.firebaseio.com/reviews.json', {
        method: 'POST',
        headers: {
          Accept: 'reviews/json',
          'Content-Type': 'reviews/json',
        },
        body: JSON.stringify({
          "name": name,
          "review": review,
          "rating": rating,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.name != null) {
            this.refs[nameClear].setNativeProps({ text: '' });
            this.refs[reviewClear].setNativeProps({ text: '' });
            this.refs[ratingClear].setNativeProps({ text: '' });
            this.setState({
              name: null,
              review: null,
              rating: null,
              isSubmited: true,
            })
          }
          else {
            Alert.alert(
              'Oops !',
              'Something went wrong', [
              { text: 'OK', onPress: () => console.log('Unsuccessful'), style: 'cancel' },],
              { cancelable: false })
          }
        })
        .done();
    }
    else {
      Alert.alert(
        'Oops !',
        'Fill out all required text input', [
        { text: 'OK', onPress: () => console.log('Insufficient Data'), style: 'cancel' },],
        { cancelable: false })
    }
  };
  _togglePostCard() {
    this.setState({
      isSubmited: false
    })
  }
  render() {
    return (
      <Container>
        <Content>
          {this.state.isSubmited ? (
            <View style={styles.successMessage}>
              <Text>Thanks!</Text>

              <Body>
                <TouchableOpacity
                  success
                  onPress={() => this._togglePostCard()}
                ></TouchableOpacity>
              </Body>
              <Right></Right>
            </View>
          ) : (
            <View>
              <CardItem>
                <Item>
                  <Input
                    placeholder="Restaurant Name"
                    onChangeText={(name) => this.setState({ name })}
                    numberOfLines={5}
                    ref={"nameClear"}
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Item>
                  <Input
                    style={styles.reviewBox}
                    value={this.props.value}
                    placeholder="Enter your review"
                    onChangeText={(review) => this.setState({ review })}
                    editable={!this.props.confirm}
                    multiline={true}
                    ref={"reviewClear"}
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Item>
                  <Input
                    placeholder="Restaurant rating"
                    onChangeText={(rating) => this.setState({ rating })}
                    ref={"ratingClear"}
                    keyboardType={"numeric"}
                    maxLength = {3}
                  />
                </Item>
              </CardItem>
              <CardItem>
                <Left></Left>
                <Body>
                  <Button
                    success
                    onPress={() =>
                      this.postContact(
                        this.state.name,
                        this.state.review,
                        this.state.rating,
                        "nameClear",
                        "reviewClear",
                        "ratingClear"
                      )
                    }
                  >
                    <Text>SUBMIT</Text>
                  </Button>
                </Body>
                <Right></Right>
              </CardItem>
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  successMessage: {
    flex: 1,
    height: 200,
    margin: 25,
    alignItems: 'center',
    justifyContent: "center",
  },
  reviewBox: {
    height: 200,
  },
});