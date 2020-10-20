import React from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

const SinglePackage = ({result,navigation}) => {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Package',{id:result.id})}>
        <View style={styles.card}>
            
                <Text style={{fontFamily:'bold', fontSize:22}}>{result.name}</Text>
                <Text style={{fontFamily:'light', fontSize:16}}>{result.description}</Text>
                <Text style={{fontFamily:'semi', fontSize:15}}>₹ {result.price}</Text>
            
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        //flexDirection:'row',
        padding:10,
        opacity:5,
        //borderRadius : 15,
        borderWidth:0.5,
        borderColor:'gray',
        width : Dimensions.get('screen').width
    }
})

export default withNavigation(SinglePackage)