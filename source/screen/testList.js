import React,{useCallback, useEffect, useState} from 'react'
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native'
import {ActivityIndicator, Button, Searchbar} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useDispatch, useSelector} from 'react-redux'
import * as testAction from '../../store/action/test'
import SinglePackage from '../component/singlePackage'

const PackageList = ({navigation}) => {

    const packageId = navigation.getParam('id')

    const [isLoad, setLoad] = useState(false)
    const [isRefresh, setRefresh] = useState(false)

    const dispatch = useDispatch()

    const addOnDispatch = useCallback( async() => {
        setRefresh(true)
        await dispatch(testAction.fetchPackage())
        setRefresh(false)
    },[dispatch, setLoad]);

    useEffect(()=>{
        const willFocusListener = navigation.addListener('willFocus',addOnDispatch)
        console.log('Lsittttt:', listPackage1)
        return()=>{
            willFocusListener.remove();
        };
    },[addOnDispatch]);

    useEffect( () => {
        setLoad(true)
       addOnDispatch().then(()=>{setLoad(false)}) 
    },[dispatch, addOnDispatch]);

    const listPackage1 = useSelector(x=>x.test.testList)
    console.log("Package Id" , packageId)
    const listPackage = listPackage1.filter(x=>x.packageId === packageId)    

    if(isLoad){
        return<View style={{height:Dimensions.get('screen').height, width:Dimensions.get('screen').width, alignItems:'center', justifyContent:'center'}}>
            <ActivityIndicator size='large' color='#009efd'/>
        </View>
        }

    return(
        <SafeAreaView>
        <View>
        <Searchbar/>
        <Button color='#009efd'mode='contained' style={{width:Dimensions.get('screen').width}}  onPress={() =>{navigation.navigate('TestForm',{id:packageId})}}>Add Test</Button>
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

PackageList.navigationOptions=(navData)=>{
    return{
        header:()=>{
            return false
        }
    }
}
export default PackageList