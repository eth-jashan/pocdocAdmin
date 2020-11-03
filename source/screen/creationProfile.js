import React, { useState,useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import {useDispatch, useSelector} from 'react-redux'
import * as profileActions from '../../store/action/profile'

const CreationProfile = ({navigation}) => {

    const {height:screenHeight, width:screenWidth} = Dimensions.get('window')
    const [propName, setPropName] = useState('')
    const [adress, setAddress] = useState('')
    const [locality, setLocality] = useState('')
    const [city, setCity] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const dispatch = useDispatch()

    const fetchHandler = () => {

        dispatch(profileActions.fetchProfile())
    }

    useEffect(()=>{
        fetchHandler
    },[fetchHandler])

    const lists = useSelector(x=>x.profile.profiles)
    console.log(lists)

    const profilehandler = async() => {
        await dispatch(profileActions.createProfile(propName, adress, locality, city, coordinates))
        navigation.navigate('Profile')

    }

    const permissionsHandler = async() => {
        const permission = await Permissions.askAsync(Permissions.LOCATION)
        if(permission.status != 'granted'){
            Alert.alert('Location Permission','Required Camera Permission Not Granted !',[{text:'Okay'}])
            return false
        }
        return true
    }

    const locationHandler = async() => {
       const permission = await permissionsHandler()
       if(!permission){
           return
       }
       else{
           const location = await Location.getCurrentPositionAsync({timeout:3000})
           setCoordinates({
               lat : location.coords.latitude,
               lng : location.coords.longitude
           })
           console.log(coordinates)
           setLat(location.coords.latitude)
           setLng(location.coords.longitude)
       }
    }

    if(lists.length > 0){

        return<View style={{width:screenWidth, height:screenHeight, justifyContent:'center'}}>
            <Text style={{alignSelf:'center'}}>Already Created</Text>
        </View>
    }


    return(
    <SafeAreaView>
    <View style={{height:screenHeight, width:screenWidth}}>
        <Text style={{fontFamily:'regular', fontSize:22, alignSelf:'center'}}>Profile Screens</Text>

        <View>
            
            <View style={{width:'100%',alignItems:'center',padding:10}}>
            <TextInput
                value={propName}
                onChangeText={(text)=>setPropName(text)}
                mode = 'outlined'
                label = 'Lab Name'
                theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
            />
            </View>

            <View style={{width:'100%', alignItems:'center',padding:10}}>
            <TextInput
                value={adress}
                onChangeText={(text)=>setAddress(text)}
                multiline
                mode = 'outlined'
                label = 'Lab Address'
                theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
            />
            </View>

            <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between',alignItems:'center',padding:10}}>
            <TextInput
                value={locality}
                onChangeText={(text)=>setLocality(text)}
                multiline
                mode = 'outlined'
                label = 'Locality'
                theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'42.5%'}}
            />
            <TextInput
                value={city}
                onChangeText={(text)=>setCity(text)}
                multiline
                mode = 'outlined'
                label = 'City'
                theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'42.5%'}}
            />    
            </View>
            <View style={{ marginTop: 15, marginBottom: 20, borderRadius:140}}>
                <TouchableOpacity onPress={locationHandler}>
                    <LinearGradient
                        // Button Linear Gradient
                            colors={['#009efd', '#1aa8fd']}
                            style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'regular', color: 'white', fontSize: 20 }}>Press To Record Location</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15, marginBottom: 20, borderRadius:140}}>
                <TouchableOpacity onPress={profilehandler}>
                    <LinearGradient
                        // Button Linear Gradient
                            colors={['#009efd', '#1aa8fd']}
                            style={{ padding: 15, alignItems: 'center', borderRadius: 5, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'regular', color: 'white', fontSize: 20 }}>Create Profile</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        

        </View>

    </View>
    </SafeAreaView>)
}

CreationProfile.navigationOptions = navData => {
    return{
        header:()=>{
            return false
        }
    }
}

export default CreationProfile