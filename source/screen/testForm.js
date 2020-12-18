import React, { useState } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Button, TextInput} from 'react-native-paper'
import {useDispatch} from 'react-redux'
import * as testActions from '../../store/action/test'

const PackageForm = ({navigation}) => {

    const dispatch = useDispatch()

    const createHandler = async() => {
        await dispatch(testActions.createPAckage(packageName, description, packageId, price))
        navigation.navigate('Package')
    }

    const [packageName, setPackage] = useState('')
    const [description, setDescription] = useState('')
    const packageId = navigation.getParam('id')
    console.log(packageId)
    const [price, setPrice] = useState('')
    

    return(
        <SafeAreaView>
        <ScrollView>
        <Text style={{fontFamily:'regular', fontSize:23, alignSelf:'center'}}>Test Form</Text>
        <View style={{marginTop:10, alignItems:'center'}}>
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Test Name'
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
                    mode = 'outlined'
                    placeholder = 'Price'
                    value = {price}
                    onChangeText = {(text) => {setPrice(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'95%'}}
                />
                <Button onPress={createHandler}>Add Test</Button>             
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

PackageForm.navigationOptions=(navData)=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default PackageForm