import React, { useState } from 'react'
import {View, StyleSheet,Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AuthForm from '../component/authForm'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native-paper';
import ElevatedView from 'react-native-elevated-view';

const AuthScreen = () => {
    const[user,setUser] = useState(false)
        return(
        <SafeAreaView>    
        <View style={styles.containerStyle}>
            <LinearGradient
                colors = {["#02cfd3","#0067ed"]}
                style={{position:'absolute' , height:1500,width:'100%'}}
            />
            <Text style={{fontFamily:'logo', alignSelf:'center', color:'white', fontSize:80, paddingTop:10,marginBottom:20}}>PocDoc</Text>
            
            <AuthForm mode={user}/>

            <ElevatedView elevation={5} style={{flexDirection:'row', width:"80%", justifyContent:'space-evenly', padding:5 ,alignContent:'center', alignSelf:'center', margin:10, borderRadius:10}}>
                <Text style={{fontFamily:'headBold',fontSize:22}}>User</Text>
                <Switch value={user} onValueChange={() =>{setUser(!user)}}/>
                <Text style={{fontFamily:'headBold',fontSize:22}}>New User</Text>
            </ElevatedView>

        </View>       
        </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    containerStyle:{
    
        justifyContent:'center',
        alignContent:'center'
    
    }
})

export default AuthScreen