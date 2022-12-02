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
  let logged
  const inputHandler = (e) => {
    console.log(e.target.value);
  }
 
  let userMailHeader = JSON.parse(localStorage.getItem('SAVEUSERMAIL'));
  console.log(userMailHeader)

  console.log(logged)

  const dispatch = useDispatch();
  const credentials = useSelector(userData)

  

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
  console.log(credentials.credentials)
  if (userMailHeader != ""){
    return (
      
      <>
        {
        [ 'lg'].map((expand) => (
          <Navbar key={expand} bg="#a18cd1" expand={expand} className=" navbarDesign sticky-top ">
            <Container fluid>
              <Navbar.Brand href="/">Home  </Navbar.Brand>
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
                    <NavDropdown
                      title="Géneros"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    
                      <NavDropdown.Item >
                        Genero 1
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                        Genero 2
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
  }else{
    return (
      <>
        {[ 'lg'].map((expand) => (
          <Navbar key={expand} bg="#a18cd1" expand={expand} className=" navbarDesign sticky-top ">
            <Container fluid>
              <Navbar.Brand href="/">Home  </Navbar.Brand>
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