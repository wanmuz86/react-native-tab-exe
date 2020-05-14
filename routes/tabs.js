import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import AboutStack from './aboutStack';
import KindergartenStack from './kindergartenStack'
import React from 'react';

const TabNavigator = createBottomTabNavigator({
    Kindergarten: {
        screen:KindergartenStack,
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="home" size={28} />

            )
        }
    },
    About: {
        screen:AboutStack,
        navigationOptions: {
            tabBarLabel: 'About', 
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="info" size={28} />

            )
        }
    },
  });
  
  export default createAppContainer(TabNavigator);