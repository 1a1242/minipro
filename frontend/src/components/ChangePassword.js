import React, { useState } from "react";
import './Comp.css'
import {Button,PasswordInput } from "@mantine/core";
import axios from "axios";
import { sha512 } from "js-sha512";
import { useNavigate } from "react-router-dom";
function Changepass(){
    const [old,setOld]=useState('')
    const[newp,setNewp]=useState('')
    const [confirm,setConfirm]=useState('')
    const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    const navigate=useNavigate()
    function check(pass,cpass)
    {
        var s=''
        if(!validPassword.test(pass))
        {
            s+='Invalid New Password , must have upper case , lower case ,number and special character of atleast 8 characters \n'
        }
        if(pass!=cpass)
        {
            s+='New Password and Confirm New passwords do not match'
        }
        return s
    }
    return(
        <div>
        <table style={{width:'100%',height:'100%'}} >
            <tbody>
            <tr>
                <td >
                    <div className="Heading">Change Password</div>
                </td>
            </tr>
            <tr>
                <td >
                    <div id='label'>Old Password</div>
                </td>
            </tr>
            <tr>
                <td > 
                    <PasswordInput width={100} onChange={(e)=>{setOld(e.target.value)}}/>
                </td>
            </tr>
            <tr>
                <td >
                    <div id='label'>New Password</div>
                </td>
            </tr>
            <tr>
                <td> 
                    <PasswordInput width={100} onChange={(e)=>{setNewp(e.target.value)}}/>
                </td>
            </tr>
            <tr>
                <td>
                    <label id='label'>Confirm Password</label>
                </td>
            </tr>
            <tr>
                <td> 
                    <PasswordInput width={100} onChange={(e)=>{setConfirm(e.target.value)}}/>
                </td>
            </tr>
            <tr>
                <td>
                    <br/>
                   <center><Button
                   onClick={
                    async ()=>{
                        var pass=sha512(old)
                        var email=localStorage.getItem('Email')
                        axios.post('http://localhost:8000/userlogin',{Email:email,Password:pass})
                        .then((res)=>{
                            console.log(res)
                           var s=check(newp,confirm)
                           if(s=='')
                           {
                                var a=sha512(newp)
                                axios.post('http://localhost:8000/changePassword',{Email:email,Password:a})
                                window.alert('Password Changed Successfully')
                                navigate('../home')
                            }
                                
                           else
                           {window.alert(s)}
                        })
                        .catch((e)=>{window.alert('Wrong Current Password')})
                    }
                   }>Change</Button></center> 
                </td>
            </tr>
            </tbody>
        </table>
        </div>

    )
}
export default Changepass;