import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About GabeWD</title>
      </Helmet>
      <Container className='content'>
        <br />
        <Row>
          <Col md={6} className='box'>
            <h4>About Me</h4>
            <p>
              As a graduate from Bethel School of Technology I Learned how to
              build web applications using JavaScript AngularJS, ReactJS
              library's. Acquired skills to build database-driven web
              applications using SQL, NoSQL, MongoDB, AWS, and create richly
              interactive client - side apps using JavaScript React library.
            </p>
            <br />

            <p>
              Programing Knowledge of Python, Html5, CSS3, JavaScript, PHP,
              MySQL, and (SEO) Search Engine Optimization to help your clients
              find you on the web.
            </p>
            <br />

            <p>
              Gabe Castro Web Development is a small home based web design
              company based in Southern Ca. I can create unique eye catching
              websites for your online presence, if your company looking to
              upgrade your business website by adding more pages or dynamic
              features or a Wordpress websites or just want to link your Social
              Media to your web page. No job is too big or too small.
            </p>
            <br />

            <p>
              I service the Inland Empire Area of Southern California, or
              anywhere else there is an Internet connection.
            </p>
            <br />

            <p>
              To contact Gabe for a consultation, quote, or any questions you
              may have, you can email me from link on top. I code, design and
              host the website to your satisfaction and most importantly
              communicate with you every step of the way.
            </p>
          </Col>

          <br />
          <Col md={6} className='box'>
            <img
              src='/images/certificate.png'
              alt=''
              className='img-portfolio'
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
