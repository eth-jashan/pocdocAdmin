import React, { useState } from 'react'
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'







const LocationPicker = ({props}) => {

    const {height:screenHeight, width:screenWidth} = Dimensions.get("window")
    const [coordinates, setCoords] = useState()
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

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
           const location = await Location.getCurrentPositionAsync()
           setCoords({
               lat : location.coords.latitude,
               lng : location.coords.longitude
           })

           setLat(location.coords.latitude)
           setLng(location.coords.longitude)
       }
    }

    return(
    <View style={{alignItems:'center', marginVertical:10}}>
        
    <View style={{width:screenWidth*0.75, alignItems:'center'}}>
        <Button onPress={locationHandler} title='Location recorder'  />
    </View>
        <Text>latitude : {lat}</Text>
        <Text>longitude : {lng}</Text>
    </View>
   )
}

export default LocationPicker