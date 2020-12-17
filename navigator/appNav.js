import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import HomeScreen from '../source/screen/homeScreen';
import TestList from '../source/screen/packageList';
import TestForm from '../source/screen/packageForm';
import AuthScreen from '../source/screen/authScreen';

import { Entypo } from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import PackageList from '../source/screen/testList';
import PackageForm from '../source/screen/testForm';
import ProfileScreen from '../source/screen/profileScreen';
import CreationProfile from '../source/screen/creationProfile';
import EditProfile from '../source/screen/editProfile';
import OrderScreen from '../source/screen/homeOrder';

const HomeStack = createStackNavigator({
    Home : HomeScreen,
    Order : OrderScreen
})

const ListStack = createStackNavigator({
    Test : TestList,
    Form : TestForm,
    Package : PackageList,
    TestForm : PackageForm
})

const ProfileStack = createStackNavigator({
    Profile : ProfileScreen,
    Create : CreationProfile,
    Edit : EditProfile
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
    }},
    Profile:{screen:ProfileStack, navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <MaterialIcons name="account-circle" size={24} color={tabInfo.tintColor} />
        },
        tabBarLabel: 'Profile'
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