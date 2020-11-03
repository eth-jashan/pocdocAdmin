import React, { useState,useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {LinearGradient} from 'expo-linear-gradient'
import {useDispatch, useSelector} from 'react-redux'
import * as profileActions from '../../store/action/profile'


const ProfileScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const {height:screenHeight, width:screenWidth} = Dimensions.get('window')

    const fetchHandler = () => {

        dispatch(profileActions.fetchProfile())
    }

    useEffect(()=>{
        fetchHandler
    },[fetchHandler])

 return(
    <SafeAreaView>
    <View style={{height:screenHeight, width:screenWidth}}>                       
    <View style={{ marginTop: 15, marginBottom: 20, borderRadius:140}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                    <LinearGradient
                        // Button Linear Gradient
                            colors={['#009efd', '#1aa8fd']}
                            style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'regular', color: 'white', fontSize: 20 }}>Create Profile</Text>
                    </LinearGradient>
                </TouchableOpacity>
    </View>

    <View style={{ marginTop: 15, marginBottom: 20, borderRadius:140}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Edit')}>
                    <LinearGradient
                        // Button Linear Gradient
                            colors={['#009efd', '#1aa8fd']}
                            style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'regular', color: 'white', fontSize: 20 }}>Edit Profile</Text>
                    </LinearGradient>
                </TouchableOpacity>
    </View>

    </View>
    </SafeAreaView>)
}

ProfileScreen.navigationOptions =navdata=> {

    return{
        header:()=>{
            return false
        }
    }
}

export default ProfileScreen