import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import HomeScreen from '../source/screen/homeScreen';
import TestList from '../source/screen/packageList';
import TestForm from '../source/screen/packageForm';
import AuthScreen from '../source/screen/authScreen';

import { Entypo } from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons'
import PackageList from '../source/screen/testList';
import PackageForm from '../source/screen/testForm';

const HomeStack = createStackNavigator({
    Home : HomeScreen
})

const ListStack = createStackNavigator({
    Test : TestList,
    Form : TestForm,
    Package : PackageList,
    TestForm : PackageForm
})

const BottomTab = createMaterialBottomTabNavigator({
    Home : {screen : HomeStack,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Foundation name="home" size={25} color={tabInfo.tintColor} />
        },
        tabBarLabel:'Home'
    }},
    Test : {screen : ListStack,navigationOptions:{
        tabBarIcon : (tabInfo)=>{
            return <Entypo name="list" size={25} color={tabInfo.tintColor} />
        },
        tabBarLabel : 'Test'
    }}
},{
    shifting:true,
    activeColor : '#0067ed',
    barStyle:{backgroundColor:'white'}
})

const FlowSwitch = createSwitchNavigator({
    Auth : AuthScreen,
    Main : BottomTab
})

export default createAppContainer(FlowSwitch)