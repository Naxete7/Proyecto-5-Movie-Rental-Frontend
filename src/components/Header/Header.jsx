import React from 'react';
import './Header.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useSelector, useDispatch } from "react-redux";
import { userout, login, userData } from "../../containers/User/userSlice";
import {useState} from 'react';
import { useEffect } from 'react';



function OffcanvasExample() {
  
   let userMailHeader = JSON.parse(localStorage.getItem('SAVEUSERMAIL'));

  const dispatch = useDispatch();
   
  const logOut = () => {
    localStorage.removeItem("SAVEUSERROLE")
    localStorage.removeItem("SAVEUSERMAIL")
    localStorage.removeItem("SAVEJWT")
    dispatch(userout({
      credentials: {
        token: "",
        mail: "",
        role: ""
      }
    }))
  }
  
  if (userMailHeader !== null){
    return (
      <>
        {
        [ 'lg'].map((expand) => (
          <Navbar key={expand} bg="#a18cd1" expand={expand} className=" navbarDesign sticky-top ">
            <Container fluid>
              <Navbar.Brand className='logoDesign' href="/">VR</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menú
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-2 pe-5">
                    <Nav.Link href="/myaccount">{userMailHeader}</Nav.Link>
                    <Nav.Link href="/Films">Películas</Nav.Link>
                    <Nav.Link onClick={logOut} href="/">Log out</Nav.Link>
                  </Nav>
                
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }else{
    return (
      <>
        {[ 'lg'].map((expand) => (
          <Navbar key={expand} bg="#a18cd1" expand={expand} className=" navbarDesign sticky-top ">
            <Container fluid>
              <Navbar.Brand className='logoDesign' href="/">VR</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menú
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-2 pe-5">
                    <Nav.Link href="/Login/">Login</Nav.Link>
                    <Nav.Link href="/Register">Register</Nav.Link>
                    <Nav.Link href="/Films">Películas</Nav.Link>
                    <NavDropdown
                      title="Menú"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    
                      <NavDropdown.Item href="/myaccount">
                        Mi cuenta
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/" onClick={logOut}>
                        Cerrar sesión
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );

  }
}

export default OffcanvasExample;