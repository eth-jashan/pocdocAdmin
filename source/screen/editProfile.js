import React, { useEffect } from 'react';
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux'
import * as profileActions from '../../store/action/profile'
import SignupProfile from '../component/profileSignup';

const EditProfile = ({navigation}) => {

    const dispatch = useDispatch()

    const fetchHandler = () => {

        dispatch(profileActions.fetchProfile())
        navigation.navigate('Profile')
    }

    useEffect(()=>{
        fetchHandler
    },[fetchHandler])

    const lists = useSelector(x=>x.profile.profiles)
    console.log(lists)
    console.log(lists)
    return<SafeAreaView>
        <View>
            <FlatList
                data = {lists}
                keyExtractor = {x=>x.id}
                renderItem = {({item}) => {
                    return<SignupProfile
                        list = {item}
                    />
                }}
            />
        </View>
    </SafeAreaView>
}

EditProfile.navigationOptions = navData => {
    return{
        header:()=>{
            return false
        }
    }
}

export default EditProfile