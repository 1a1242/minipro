import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Signout } from './Actions';
//import { GoogleLogin, GoogleLogout } from 'react-google-login';

function HomeNavbar() {
    const clientId = 'client-ID';
    const logOut = () => {
        let tokens = localStorage.getItem("token")
        if(tokens){
            localStorage.clear()
            dispatch(Signout())
          }
      
};
  const dispatch=useDispatch()
  return (
    <>
      <Navbar className='NavBar'>
        <Container>
          <Navbar.Brand href="/home"><img
              src={require("./static/bvrit-logo.jpg")}
              width="80"
              height="40"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
            <Nav.Link href="/insert">New Publication</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/changepassword">Change Password</Nav.Link>
          <Nav.Link href="/"onClick={logOut}>Logout</Nav.Link>
         
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default HomeNavbar;
