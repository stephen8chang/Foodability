import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ReviewPage from "../screens/ReviewPage";
import MapsPage from "../screens/MapsPage";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePage from "../screens/ProfilePage.js";
import WriteAReview from "../screens/WriteAReview.js";

const Tab = createBottomTabNavigator();

const MapsStack = createStackNavigator();

function MapsStackPage() {
    return (
        <MapsStack.Navigator>
            <MapsStack.Screen name="Welcome to Foodability!" component={MapsPage} />
            <MapsStack.Screen name="Review Page" component={ReviewPage} />
        </MapsStack.Navigator>
    );
}

export default function Navigator() {

    createRestaurantStack = () =>
        <Stack.Navigator>
            <Stack.Screen name="Review Page" component={ReviewPage} />
        </Stack.Navigator>

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Write A Review') {
                            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                        } else if (route.name === 'Maps Page') {
                            iconName = focused ? 'ios-map' : 'ios-map';
                        } else if (route.name === 'Profile Page') {
                            iconName = focused ? 'ios-person-add' : 'ios-person-add';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Maps Page" component={MapsStackPage} />
                <Tab.Screen name="Write A Review" component={WriteAReview} />
                <Tab.Screen name="Profile Page" component={ProfilePage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}