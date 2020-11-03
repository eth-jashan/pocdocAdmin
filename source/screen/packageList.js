import React,{useCallback, useEffect, useState} from 'react'
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {ActivityIndicator, Button, Searchbar, TextInput} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useDispatch, useSelector} from 'react-redux'
import * as packageAction from '../../store/action/testPackage'
import SinglePackage from '../component/singlePackage'

const TestList = ({navigation}) => {

    const [isLoad, setLoad] = useState(false)
    const [isRefresh, setRefresh] = useState(false)

    const dispatch = useDispatch()

    const addOnDispatch = useCallback( async() => {
        setRefresh(true)
        await dispatch(packageAction.fetchPackage())
        setRefresh(false)
    },[dispatch, setLoad]);

    useEffect(()=>{
        const willFocusListener = navigation.addListener('willFocus',addOnDispatch)
        console.log('Lsittttt:',listPackage)
        return()=>{
            willFocusListener.remove();
        };
    },[addOnDispatch]);

    useEffect( () => {
        setLoad(true)
       addOnDispatch().then(()=>{setLoad(false)}) 
    },[dispatch, addOnDispatch]);

    const listPackage = useSelector(x=>x.package.packageList)
    

    if(isLoad){
        return<View style={{height:Dimensions.get('screen').height, width:Dimensions.get('screen').width, alignItems:'center', justifyContent:'center'}}>
            <ActivityIndicator size='large' color='#009efd'/>
        </View>
        }

    return(
        <SafeAreaView>
        <View>
        <Searchbar/>
        <Button color='#009efd'mode='contained' style={{width:Dimensions.get('screen').width}}  onPress={() =>{navigation.navigate('Form')}}>Add Package</Button>
        <View style={{alignContent :'center',height:Dimensions.get('screen').height}}>
        <FlatList
            style={{alignSelf:'center'}}
            data = {listPackage}
            keyExtractor = {x=>x.id}
            renderItem={({item}) => {
                return<SinglePackage
                    result = {item}
                />
            }}
        />
        </View>
        </View>
        </SafeAreaView>
    )
}

TestList.navigationOptions=(navData)=>{
    return{
        header:()=>{
            return false
        }
    }
}
export default TestList