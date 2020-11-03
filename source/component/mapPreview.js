import React from 'react'
import {Image, View, StyleSheet, Dimensions} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const MapPreview = ({location}) => {

    const {height:screenHeight, width:screenWidth} = Dimensions.get("window")
    console.log("xyz",location)
    const markerLocation = {
        latitude : location.lat,
        longitude : location.lng,
    }

    const regions = {
        latitude : location.lat,
        longitude : location.lng,
        latitudeDelta : 0.00922, 
        longitudeDelta : 0.00421
    }

    
    return (
        <View style={{height:screenHeight*0.2, width:screenWidth*0.75, backgroundColor:'white', alignSelf:'center', margin:10, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
            <MapView
                style={{height:screenHeight*0.2, width:screenWidth*0.75}}
                region = {regions}
            >
            <Marker title='Your Property' coordinate ={markerLocation}></Marker>
            </MapView>
        </View>
    )
}

export default MapPreview