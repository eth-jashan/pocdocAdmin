import React from 'react'
import {View, Text, Dimensions, Button} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import * as orderAction from '../../store/action/order'

const OrderCoupon = ({list}) => {

    const dispatch = useDispatch()

    const acceptOrder = async(id, status) => {

       await dispatch(orderAction.changeStatus(id, status))
       await dispatch(orderAction.fetchOrder())

    }

    return (

        <View style={{width:Dimensions.get('window').width*0.9, borderRadius:15, backgroundColor:list.status === 'Not Confirmed'?'red':'#009efd', padding:15, marginVertical:10}}>
        
        <View style={{width:'100%',  flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', padding:10, borderRadius:15}}>
            <Text style={{fontFamily:'semi', fontSize:15}}>Name : {list.name}</Text>
            <Text style={{fontFamily:'semi', fontSize:15}}>Number : {list.phoneNumber}</Text>
        </View>

        <View style={{width:'100%',  backgroundColor:'white', padding:10, borderRadius:15, marginVertical:10}}>
            <Text style={{fontFamily:'bold', fontSize:15, alignSelf:'center'}}>Lab Test List</Text>
            <FlatList
                data = {list.carItem}
                keyExtractor = {x=>x.id}
                renderItem = {({item}) => {

                    return<View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', padding:5}}>
                        <Text>{item.testName}</Text>
                        <Text>₹ {item.testPrice}</Text>
                    </View>

                }}
            />
        </View>

        <View style={{width:'100%',  flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', padding:10, borderRadius:15}}>
            <Text style={{fontFamily:'semi', fontSize:15}}>Order Total</Text>
            <Text style={{fontFamily:'semi', fontSize:15}}>₹ {list.carTotal}/-</Text>
        </View>

        <TouchableOpacity onPress={() =>acceptOrder(list.id, 'Confirmed')}>
        <View style={{width:'100%',  flexDirection:'row', justifyContent:'space-between',  padding:10, borderRadius:15, borderWidth:0.5, borderColor:'white',marginVertical:10, alignSelf:'center'}}>
            <Text style={{fontFamily:'semi', fontSize:25, color:'white', alignSelf:'center'}}>Accept</Text>
        </View>
        </TouchableOpacity>

        </View>

    )

}
export default OrderCoupon