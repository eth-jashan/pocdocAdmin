import React,{useState} from 'react';
import FlowSwitch from './navigator/appNav'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import AuthReducer from './store/reducer/auth'
import PackageReducer from './store/reducer/testPackage'
import TestReducer from './store/reducer/test'
import ProfileReducer from './store/reducer/profile'

const fontLoading = () =>{
  return Font.loadAsync({
    'regular':require('./assets/font/Roboto-Regular.ttf'),
    'bold':require('./assets/font/Roboto-Bold.ttf'),
    'extra':require('./assets/font/Roboto-Black.ttf'),
    'light':require('./assets/font/Roboto-Light.ttf'),
    'semi':require('./assets/font/Roboto-Medium.ttf'),
    'logo': require('./assets/font/Cocon-Regular-Font.otf'),
    'headRegular': require('./assets/font/BalsamiqSans-Regular.ttf'),
    'headBold': require('./assets/font/BalsamiqSans-Bold.ttf')
  })
}

const rootReducer = combineReducers({
  auth : AuthReducer,
  package : PackageReducer,
  test : TestReducer,
  profile : ProfileReducer
})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  
  const [fontLoad, setFontLoad] = useState(false)

  if(!fontLoad){
    return <AppLoading
      startAsync ={fontLoading}
      onFinish = {() => setFontLoad(true)}
      />
    }
    
  return<Provider store={store}><FlowSwitch/></Provider>
}

