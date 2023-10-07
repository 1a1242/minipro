import { useState,useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
function VerifiedEmail(){
    const id=useParams()
    const [Comp,setComp]=useState(<h1></h1>)
    useEffect(()=>{
        console.log(id)
        axios.post('http://localhost:8000/verifyemail',{id})
        .then((res)=>{
            setComp(<h1>Your email is verified</h1>)
            })
        .catch((e)=>{setComp(<h1>Invalid URL</h1>)})
    },[])

    return(Comp)

}

export default VerifiedEmail