import React, { useState } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Button, TextInput} from 'react-native-paper'
import {useDispatch} from 'react-redux'
import * as packageActions from '../../store/action/testPackage'

const TestForm = ({navigation}) => {

    const dispatch = useDispatch()

    const createHandler = async() => {
        await dispatch(packageActions.createPAckage(packageName, description, instruction, price))
        navigation.navigate('Test')
    }

    const [packageName, setPackage] = useState('')
    const [description, setDescription] = useState('')
    const [instruction, setInstruction] = useState('')
    const [price, setPrice] = useState('')
    

    return(
        <SafeAreaView>
        <ScrollView>
        <Text style={{fontFamily:'regular', fontSize:23, alignSelf:'center'}}>Package Form</Text>
        <View style={{marginTop:10, alignItems:'center'}}>
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Package Name'
                    value = {packageName}
                    onChangeText = {(text) => {setPackage(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
                />
                <TextInput
                    multiline
                    mode = 'outlined'
                    placeholder = 'Description'
                    value = {description}
                    onChangeText = {(text) => {setDescription(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
                />
                <TextInput
                    multiline
                    mode = 'outlined'
                    placeholder = 'Instruction'
                    value = {instruction}
                    onChangeText = {(text) => {setInstruction(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
                />
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Price'
                    value = {price}
                    onChangeText = {(text) => {setPrice(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
                />
                <Button onPress={createHandler}>Add Package</Button>             
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

TestForm.navigationOptions=(navData)=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default TestForm