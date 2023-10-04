import React from "react"

export const Login= ()=>{
    return{
        type:'Login'
    }
}
export const Register= ()=>{
    return{
        type:'Register'
    }
}
export const Forgot= ()=>{
    return{
        type:'Forgot'
    }
}

export const Signin= (Email,Name)=>{
    return{
        type:'Signin',
        email:Email,
        user:Name
    }
}

export const Signout= ()=>{
    return{
        type:'Signout'
    }
}
