//This is an example code to understand Switch// 
import React from 'react';
//import react in our code. 
import { Switch, Text, View, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import { useState } from "react";

export default function ReviewPage() {

    // constructor used for the textbox where users can leave a review
    /*constructor(props) {
      super(props);
      this.state = {
        review: ''
      };
    } */

    //For generating alert on button click
    const onPressLearnMore = () => {
        alert('You have successfully submitted a review! We appreciate your support for the Foodability community!');
    }

    //Initial state false for all five switches. You can change it to true just to see.
    /* state = {
      switchValue1:false,
      switchValue2:false,
      switchValue3:false,
      switchValue4:false,
      switchValue5:false
    };
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
    
     } */


    const [review, setReview] = useState('');
    const [switchValue1, setSwitchValue1] = useState(false);
    const [switchValue2, setSwitchValue2] = useState(false);
    const [switchValue3, setSwitchValue3] = useState(false);
    const [switchValue4, setSwitchValue4] = useState(false);
    const [switchValue5, setSwitchValue5] = useState(false);

    const toggleSwitch1 = () => setSwitchValue1(previousState => !previousState);
    const toggleSwitch2 = () => setSwitchValue2(previousState => !previousState);
    const toggleSwitch3 = () => setSwitchValue3(previousState => !previousState);
    const toggleSwitch4 = () => setSwitchValue4(previousState => !previousState);
    const toggleSwitch5 = () => setSwitchValue5(previousState => !previousState);


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>                         </Text>
                <Text>                         </Text>
                <Text>                         </Text>
                <Text>                         </Text>
                {/* // title of restaurant */}
                <Text style={styles.Title}> Chipotle's Wheelchair Accomodations</Text>
                <Text>                         </Text>
                <Text>                         </Text>
                <Text>                         </Text>

                {/* // TextInput used for when customers want to leave a personalized review */}
                <TextInput
                    value={review}
                    onChangeText={(value) => setReview({ value })}
                    placeholder={'Leave a Review Here!'}
                    style={styles.input}
                />

                {/*Switch with value set in constructor*/}
                {/*onValueChange will be triggered after switch condition changes*/}
                {/* Switch for door size */}
                <Switch
                    style={{ marginTop: 30 }}
                    // changes state of switch for this switch only
                    onValueChange={toggleSwitch1}
                    value={switchValue1}
                />
                {/* Extra spaces to prevent words from being too close to the switch */}
                <Text>                      </Text>
                {/*Text to show the text according to switch condition*/}
                <Text>{switchValue1 ? 'Door Is Sufficient' : 'Door Too Narrow'}</Text>

                {/* Switch for proper table height */}
                <Switch
                    style={{ marginTop: 30 }}
                    // changes state of switch for this switch only
                    onValueChange={toggleSwitch2}
                    value={switchValue2} />
                {/* Extra spaces to prevent words from being too close to the switch */}
                <Text>                      </Text>
                {/*Text to show the text according to switch condition*/}
                <Text>{switchValue2 ? 'Proper Table Height' : 'Poor Table Height'}</Text>

                {/* Switch for accessible restrooms */}
                <Switch
                    style={{ marginTop: 30 }}
                    // changes state of switch for this switch only
                    onValueChange={toggleSwitch3}
                    value={switchValue3} />
                {/* Extra spaces to prevent words from being too close to the switch */}
                <Text>                      </Text>
                {/*Text to show the text according to switch condition*/}
                <Text>{switchValue3 ? 'Accessible Restroom' : 'Unaccessible Restroom'}</Text>

                {/* Switch for automatic doors */}
                <Switch
                    style={{ marginTop: 30 }}
                    // changes state of switch for this switch only
                    onValueChange={toggleSwitch4}
                    value={switchValue4} />
                {/* Extra spaces to prevent words from being too close to the switch */}
                <Text>                      </Text>
                {/*Text to show the text according to switch condition*/}
                <Text>{switchValue4 ? 'Automatic Doors' : 'Manual Doors'}</Text>

                {/* Switch for wheelchair ramp */}
                <Switch
                    style={{ marginTop: 30 }}
                    // changes state of switch for this switch only
                    onValueChange={toggleSwitch5}
                    value={switchValue5} />
                {/* Extra spaces to prevent words from being too close to the switch */}
                <Text>                      </Text>
                {/*Text to show the text according to switch condition*/}
                <Text>{switchValue5 ? 'Wheelchair Ramp' : 'No Wheelchair Ramp'}</Text>

                <Text>                         </Text>
                <Text>                         </Text>
                <Text>                          </Text>
                {/* // button used to "submit" review */}
                <Button
                    onPress={onPressLearnMore}
                    title="Submit Review"
                    color="#841584"
                />
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // seperate styles option just for the title of the screen
    Title: {
        fontSize: 20,
    },
    // separate styles option for the review box
    input: {
        width: 250,
        height: 100,
        padding: 30,
        marginBottom: 10,
        backgroundColor: '#ecf0f1'
    },
});
