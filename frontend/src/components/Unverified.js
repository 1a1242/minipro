
import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import Service from "../Service/http"

function Unverified(){
    const navigate=useNavigate()
    const service = new Service()
    useEffect(()=>{
        if(localStorage.getItem('Verify')=='true')
        {navigate('../home')}
        if(localStorage.getItem('Verify')=='false')
        { 
            service.post('unverified',{Email:localStorage.getItem('Email')})
            .then((res)=>{})
            .catch((err)=>{console.log(err)})
        }
    },[])
    if(localStorage.getItem('Verify')==='false'){
    return(<div style={{textAlign:'center'}}>

        <h1>Your Email is not verified yet</h1>
        <br/>
        <h3>Please verify your account</h3><br/>
        <h3>We have sent you an email for the account verification</h3>
        <a className='link_pages' onClick={()=>{navigate('../')}} > Back to Login Page</a>
    </div>)}
}

export default Unverified