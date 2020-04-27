import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ReviewPage from "../screens/ReviewPage";
import MapsPage from "../screens/MapsPage";


const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='~Foodability~' component={MapsPage} />
                <Stack.Screen name='ReviewPage' component={ReviewPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}