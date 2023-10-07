import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import './Comp.css'
import {Button, Container, PasswordInput, TextInput} from '@mantine/core'
import { sha512 } from "js-sha512";
import { useNavigate } from "react-router-dom";
import image from './static/pool.jpg'

function Forgotpassword(){
    const navigate=useNavigate()
    const[Comp,setComp]=useState(true)
    const[email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const[CPass,setCpass]=useState('')
    var id=useParams()
    useEffect(()=>{
        axios.post('http://localhost:8000/forgotpassword',{id})
        .then((res)=>{
            setComp(res.data.verified)
            setEmail(res.data.Email)
            })
        .catch((e)=>{setComp(true)})
    },[])

    const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    function check(){
        var s=''
        if(!validPassword.test(Password))
        {
            s+='Invalid Password , must have upper case , lower case ,number and special character of atleast 8 characters \n'
        }
        if(Password!=CPass)
        {
            s+='Password and Confirm passwords do not match'
        }
        return s
    }
    if(!Comp){
    return(
        <div id='forgot' style={{backgroundImage:{image}}}>
            <Container style={{display:'flex',width:'60%',height:'80%',position:'absolute',top:'10%',left:'20%',right:'20%',bottom:'10%'}}>
            <h3 style={{position:'absolute',left:'40%'}}>Change Password</h3>
            <div style={{display:'flex',flexDirection:'column',position:'absolute',bottom:'10%',top:'10%',left:'30%',width:'40%'}}>
            <PasswordInput label='New Password' placeholder="Enter new Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <PasswordInput label='Confirm New Password' placeholder="Enter confirm password" onChange={(e)=>{setCpass(e.target.value)}}/>
            <br/>
            <Button
            onClick={()=>{
                var st=check()
                if(st=='')
                {
                    var pas=sha512(Password)
                    axios.post('http://localhost:8000/newpassword',{Email:email,Password:pas})
                    .then((res)=>{window.alert('Changed Successfully')
                })
                    .catch((e)=>{window.alert('Already changed the password using this link')})
                window.alert('Password Changed Successfully.Redirecting to the login page')
                navigate('../')
                }
                else
                {window.alert(st)}
            }}
            >Change</Button></div>
       </Container>
        </div>)
}
else{return(<div><h1>Invalid link or Link Expired</h1></div>)}
}
export default Forgotpassword;