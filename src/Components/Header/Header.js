import React from 'react';

import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import "./Header.css";




const Header = () => {
const {user, logOut} = useFirebase();
    return (
        
            <Navbar sticky='top' bg='myBg'  expand="lg">
        <Container className=''>
          <Navbar.Brand>
              <img src="/logo.png"  alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            
            <Nav
              className="ms-auto my-2 my-lg-0 text-white"
              
              navbarScroll
            >
              <Nav.Link><Link to="/home">Home</Link></Nav.Link>
              <Nav.Link><Link to="/doctors">Doctors</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link>
                {/* <img src={user.photoURL} alt="" /> */}
                <Link className='fw-bold custom-color' to="">{user.displayName}</Link>
                
                
                </Nav.Link>
              
              
              
            </Nav>
            
            <div className='ms-3'>
            
            {
             !user?.displayName && <Link to="/login">
              <button  className="custom-btn">Login</button>
            </Link>
            }
            {
             user?.displayName && <Link to="/login">
              <button onClick={logOut} className="custom-btn">Logout</button>
            </Link>
            }
            </div>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
};

export default Header;