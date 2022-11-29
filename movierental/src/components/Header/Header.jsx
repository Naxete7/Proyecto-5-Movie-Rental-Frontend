import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useDispatch } from "react-redux";
import { userout } from "../../containers/User/userSlice";


function OffcanvasExample() {
  const inputHandler = (e) => {
    console.log(e.target.value);
  }

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

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="warning" expand={expand} className="mb-3 sticky-top">
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Login/">Login</Nav.Link>
                  <Nav.Link href="/Register">Register</Nav.Link>
                  <NavDropdown
                    title="Menú"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/Films/">Películas</NavDropdown.Item>

                    <NavDropdown.Item href="/myaccount">
                      Mi cuenta
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/" onClick={logOut}>
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => inputHandler(e)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>




              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;