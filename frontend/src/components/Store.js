import {legacy_createStore as createStore,combineReducers} from 'redux'
import React from 'react'
import Login from './Log'
import Register from './Register'
import Forgot from './Forgot'

const PageReducer = (state=<Login/>,actions)=>{
    switch(actions.type){
        case 'Login':
            return <Login/>
        case 'Register':
            return <Register/>
        case 'Forgot':
            return <Forgot/>
        default:
            return state
    }
}

const LoginReducer=(state={Email:'',Name:'',logged:'false'},action)=>{
    switch(action.type)
    {
        case 'Signin' :
            return({...state,Email:action.email,Name:action.user,logged:true})
        case 'Signout':
            return({...state,Email:'',Name:'',logged:false})
        default:
            return state
    }
}

const Store= createStore(combineReducers({Page:PageReducer,Login:LoginReducer}))
export default Store