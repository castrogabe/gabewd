import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>GabeWD Portfolio</title>
      </Helmet>
      <Container>
        <br />
        <Row>
          <Col md={6} className='box'>
            <img src='/images/ewp.jpg' alt='' className='img-portfolio' />
          </Col>
          <Col md={6} className='box'>
            <h2>exoticwoodpen</h2>
            <p>
              <i class='fas fa-layer-group'></i> MERN STACK / Bootstrap
            </p>
            <p>
              An internationally recognized pen turner, and a growing following
              on YouTube. I have been turning pens for over 18 years, and my Pen
              Segmenting, Bespoke Pen Videos have been viewed all over the world
              by thousands of pen enthusiasts.
            </p>

            <br />
            <div className='details'>
              <a className='my-button' href='https://www.exoticwoodpen.com'>
                Website
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
