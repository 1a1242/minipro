import React, { useEffect } from 'react';
import HomeNavbar from "./RNavbar";
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import image from './static/hompage.jpg'
import logo from './static/bvrit-logo.jpg'
import Changepass from './ChangePassword';

function ChangePassword() {
  const login=useSelector(state=>state.Login)
    const navigate = useNavigate();
    useEffect(()=>{
    //console.log('Hello'+login.Name)
    if(localStorage.getItem('status')=='false'){
        navigate("../")
    }
    })
    if(localStorage.getItem('status')=='true'){
  return (
    
    <>
    <HomeNavbar/>
    <div id='login_back'>
            <div id='login_fore_row'>
                <div id='login_fore_col1'> 
                    <img id='homepage_image' src={image}/>
                </div>
                <div id='login_fore_col2' > 
                    <div className='login_fore_top'>
                        <img id='logo_image' src={logo}/>
                    </div>
                    <div className='login_fore_top'>
                        <div id='text'>Research Publications Search Engine</div>
                    </div>
                    <div id='login_fore_bottom' className='Center' >
                       <center><Changepass/></center>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )};
}

export default ChangePassword;