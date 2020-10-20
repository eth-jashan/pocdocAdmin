import React,{useState} from 'react';
import {StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import ElevatedView from 'react-native-elevated-view';
import { Button } from 'react-native-paper';
import {withNavigation} from 'react-navigation'
import {useDispatch} from 'react-redux'
import * as authActions from '../../store/action/auth'

const AuthForm = ({mode, navigation}) => {
    
    const dispatch = useDispatch();

    const signupHandler = async () =>{
        setLoad(true)
        await dispatch(authActions.signup(mail, password))
        setLoad(false)
    }

    const loginHandler = async () => {
        setLoad(true)
        await dispatch(authActions.login(mail, password))
        setLoad(false)
        navigation.navigate('Main')
    }

    
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    

return <ElevatedView elevation={5} style={styles.containerForm}>
    
    {mode?<TextInput
        value = {first}
        label = 'First Name'
        selectionColor = '#0067ed'
        onChangeText ={(text)=>{setFirst(text)}}
        style={{marginTop:3}}
        mode='outlined'
    />:null}

    {mode?<TextInput
        value = {last}
        label = 'Last Name'
        selectionColor = '#0067ed'
        onChangeText ={(text)=>{setLast(text)}}
        style={{marginTop:3}}
        mode='outlined'
    />:null}
    
    <TextInput
        value = {mail}
        label = 'Email ID'
        autoCapitalize='none'
        selectionColor = 'black'
        onChangeText ={(text)=>{setMail(text)}}
        style={{marginTop:3}}
        mode='outlined'
    />
    <TextInput
        value = {password}
        label = 'Password'
        secureTextEntry
        underlineColor = '#0067ed'
        onChangeText ={(text)=>{setPassword(text)}}
        style={{marginTop:3}}
        mode='outlined'
    />
    <Button
        loading = {load}
        mode='contained'
        style={{height:35, width:'80%',margin:10,alignSelf:'center'}}
        color='#0067ed'
        onPress={mode?signupHandler:loginHandler}>{mode?'Sign Up':'Login'}</Button>

</ElevatedView> 
}

const styles = StyleSheet.create({
    containerForm:{
    
        alignSelf:'center',
        padding: 15,
        width : '80%',
        borderRadius:10,

    },
    inputStyle:{
        flexDirection:'column'
    }
})

export default withNavigation(AuthForm)