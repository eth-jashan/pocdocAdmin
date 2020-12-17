import React from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView>
        <View style={{alignContent:'center', alignItems:'center'}}>
            
            <View style={{marginTop:10,height:Dimensions.get('screen').height/8, width:Dimensions.get('window').width*0.95, backgroundColor:'#009efd',borderRadius:10}}>
                <Text style={{fontFamily:'semi', fontSize:25, alignSelf:'center',  color:'white'}}>Prescription Order</Text>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View style={{marginVertical:10,height:Dimensions.get('screen').height/8, width:Dimensions.get('window').width*0.95, backgroundColor:'#009efd',borderRadius:10}}>
                <Text style={{fontFamily:'semi', fontSize:25, alignSelf:'center',  color:'white'}}>Home Test Order</Text>
            </View>
            </TouchableOpacity>

            <View style={{height:Dimensions.get('screen').height/8, width:Dimensions.get('window').width*0.95, backgroundColor:'#009efd',borderRadius:10}}>
                <Text style={{fontFamily:'semi', fontSize:25, alignSelf:'center',  color:'white'}}>Lab Booking Order</Text>
            </View>


        </View>
        </SafeAreaView>
    )
}

HomeScreen.navigationOptions = (navData) => {
    return{
        header : () => {
            return false
        }
    }
}

export default HomeScreen