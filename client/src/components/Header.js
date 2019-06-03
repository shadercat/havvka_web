import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
              <style type="text/css">
    {`
    .navbar-flat {
      background-color: purple;
      color: white;
    }

  
    `}
  </style>

            <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src=""
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {'HAVVKA'}
    </Navbar.Brand>
    <Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">
        <Button>Главная</Button>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">
        <Button>Еще_Что-то</Button>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">
        <Button variant="outline-primary">Войдите</Button>
        </Nav.Link>
  </Nav.Item>
</Nav>
  </Navbar>

        </div>
    );
}

export default Header;