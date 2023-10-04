import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardTitle,

}

from 'mdb-react-ui-kit';
import HomeNavbar from "./RNavbar";
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import image from './static/hompage.jpg'
import logo from './static/bvrit-logo.jpg'
import Reset from './Reset';

function Home() {
  const login=useSelector(state=>state.Login)
    const navigate = useNavigate();
    useEffect(()=>{
    var a=localStorage.getItem('status')
    if(a=='false'){
        navigate("../")}
    })
  
  if(localStorage.getItem('status')=='true'){
  return (
    <>
    <HomeNavbar/>
    
    {/* <div class="col d-flex justify-content-center" style={{height: "90vh",
        width: "100vw",
      "backgroundColor":"#c5d299", paddingTop:"90px"}}>

      <MDBCard style={{ maxHeight: '390px', maxWidth: '900px'}}>
        <MDBRow className='g-0'>

          <MDBCol md='8'>
          <MDBCardImage src={require('./static/hompage.jpg')} fluid />
          </MDBCol>

          <MDBCol md='4'>
          <MDBCardBody>
          <MDBCardImage src={require('./static/bvrit-logo.jpg')} fluid />
            <MDBCardTitle style={{"fontSize":"px100"}}>Research Publications Search Engine</MDBCardTitle>
            <Main/>
          </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </div> */}
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
                    <div id='login_fore_bottom' className='welcome' >
                        Hello Miss
                        <br/>
                        {localStorage.getItem('Name')}
                    </div>
                </div>
            </div>
        </div>
    </>
  
  )};}


export default Home;