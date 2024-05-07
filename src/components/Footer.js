import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='footer'>
      <Row>
        <Col md={6}>&copy;{new Date().getFullYear()} gabewd.com</Col>
        <Col md={6}>
          <ul className='list-unstyled'>
            <li>
              <a href='mailto:gabewebdevelopment@gmail.com' className='email'>
                <i className='fa fa-envelope'></i> Email Me
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
