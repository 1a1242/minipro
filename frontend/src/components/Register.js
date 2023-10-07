import React from "react";
import './Comp.css'
import { TextInput,PasswordInput,Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Login } from "./Actions";
import axios from 'axios'
import { useState,useEffect } from "react";
import {sha512} from 'js-sha512'
function Register(){
    const dispatch=useDispatch()
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [CPass,setCpass]=useState('')
    const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    function check(){
        var s=''
        if( Name.length==0)
        {s+='Invalid Name \n'}
        if(Email.length!=10)
        {
            s+='Invalid Email id \n'
        }

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

    useEffect(()=>{
        //console.log(Name,Email,Password,CPass)
    },[Name,Email,Password,CPass])

    function send(Name,Email,Password){
        var e=Email+'@bvrithyderabad.edu.in'
        var Pas=sha512(Password)
        axios.post('http://localhost:8000/registerme',{Name,Email:e,Password:Pas})
        .then((res)=>{
            window.alert('Successful Registration .Redirecting to login page')
            window.location.reload(false)})
        .catch((e)=>{
            window.alert('User Already Exists!!!')
            console.log(e)})
    }

    return(
        <div>
        <table >
            <tbody>
            <tr>
                <td colSpan={3}><div className="Heading">
                Sign up for an account
            </div></td>
            </tr>
            <tr>
                <td >
                    <label id='label'>Name</label>
                </td>
            </tr>
            <tr>
                 <td colSpan={3}>
                    <TextInput width={100} onChange={(e)=>{setName(e.target.value)}}/>
                </td>
                </tr>
            <tr>
                <td >
                    <label id='label'>Username</label>
                </td>
            </tr>
            <tr>
                <td>
                    <TextInput onChange={(e)=>{
                        setEmail(e.target.value)}
                        }
                    />
                </td>
                <td>
                    <input placeholder="@bvrithyderabad.edu.in" disabled/>
                </td>
            </tr>
            <tr>
                <td>
                    <label id='label'>Password</label>
                </td>
            </tr>
            <tr>
                <td colSpan={3}> 
                    <PasswordInput width={100} onChange={(e)=>{setPassword(e.target.value)}} />
                </td>
            </tr>
            <tr>
                <td>
                    <label id='label'>Confirm Password</label>
                </td>
            </tr>
            <tr>
                <td colSpan={3}> 
                    <PasswordInput width={100} onChange={(e)=>{setCpass(e.target.value)}}/>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <br/>
                    <Button
                    onClick={()=>{
                        var s=check()
                        if (s=='')
                        {
                            console.log('Ok')
                           send(Name,Email,Password)
                        }
                        else
                        {
                            window.alert(s)
                        }
                    }}
                    >Register</Button>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                <a id="link1" className="link_pages" onClick={()=>dispatch(Login())}>Login</a>
                </td>
                
            </tr>
            </tbody>
        </table>
        </div>


        // <div className="Box">
        //     <div className="Heading">
        //         Sign up for an account
        //     </div>
        //     <div>
        //         <TextInput label='Name' placeholder="Name" />
        //     </div> 
        //     <div id='url'>
        //         <TextInput label='Email' placeholder="Email" />
        //         <span>@gmail.com</span>
        //     </div>
        //     <div>
        //         <PasswordInput label='Password' placeholder="Password"/>
        //     </div>
        //     <div>
        //         <PasswordInput label='Confirm Password' placeholder="Password"/>
        //     </div>
        //     <br/>
        //     <div>
        //         <Button>Register</Button>
        //     </div>
        //     <div id='center_link'>
        //         <a className="link_pages" id="link" onClick={()=>{dispatch(Login())}}>Login</a>
        //     </div>
        // </div>
    )
}
export default Register;