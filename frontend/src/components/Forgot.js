import React, { useState } from "react";
import './Comp.css'
import { TextInput,Button, AppShellAside } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Login } from "./Actions";
import axios from 'axios'

function Forgot(){
    const [Email,setEmail]=useState('')
    const dispatch=useDispatch()
    return(

        <div>
        <table >
            <tbody>
            <tr>
                <td colSpan={3}><div className="Heading">
                Forgot Password
            </div></td>
            </tr>
            <br/>
            <tr>
                <td id='label'>
                    Registered Email Id
                </td>
            </tr>
            <tr>
                <td>
                    <input onChange={(e)=>{setEmail(e.target.value)}}/>
                </td>
                <td>
                    <input placeholder="@bvrithyderabad.edu.in" disabled/>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <br/>
                    <button
                    className="Button" 
                    onClick={()=>{
                        var e=Email+'@bvrithyderabad.edu.in'
                        axios.post('http://localhost:8000/forgot',{Email:e})
                        .then((res)=>{
                            console.log(res.data._id)
                            window.alert('Sent the change password link to the respective mail . Please check the mail')})
                        .catch((e)=>{
                            window.alert('Not Found')})
                    }}
                    >Verify</button>
                </td>
            </tr>
            <br/>
            <tr>
                <td colSpan={3}>
                <a id="link1" className="link_pages" onClick={()=>dispatch(Login())}>Back</a>
                </td>
            </tr>
            </tbody>
        </table>
        </div>


        // <div className="Box">
        //     <div className="Heading">
        //         Forgot Password
        //     </div>
        //     <br/>
        //     <div>
        //         <TextInput label='Registered Email ID' placeholder="Email" />
        //     </div>
        //     <br/>
        //     <div>
        //         <Button>Verify</Button>
        //     </div>
        //     <br/>
        //     <div>
        //         <a className="link_pages" onClick={()=>{dispatch(Login())}}>Back</a>
        //     </div>
        // </div>
    )
}
export default Forgot;