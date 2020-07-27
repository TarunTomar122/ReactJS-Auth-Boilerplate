import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Header({ loggedIn }) {
  return (
    <Container className="header pt-4 pb-4" fluid>
      <Row>
        <Col>
          <h2>FrontEnd-Auth-BoilerPlate</h2>
        </Col>
        {loggedIn ? <Col className="links pl-3 pr-3">
          <ul>
            <Link style={{ color: "black" }}>
              <li>Profile</li>
            </Link>
          </ul>
        </Col> : <Col className="links pl-3 pr-3">
            <ul>
              <Link to='/login' style={{ color: "black" }}>
                <li>Login</li>
              </Link>
              <Link to='/register' style={{ color: "black" }}>
                <li>Register</li>
              </Link>
            </ul>
          </Col>
        }
      </Row>
    </Container>
  );
}

export default Header;
