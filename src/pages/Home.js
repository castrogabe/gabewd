import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Jumbotron from '../components/Jumbotron';

function Home() {
  return (
    <>
      <Helmet>
        <title>GabeWD Home</title>
      </Helmet>
      <Jumbotron />
      <Container className='content'>
        <div className='box'>
          <h4>The Website Development Process and Basic Languages Used.</h4>
          <p>
            With half the world population online and using the internet, my
            goal is to help bring the world to your <strong>Website</strong>{' '}
            thru interaction with your favorite <strong>Social Media</strong>{' '}
            platforms and
            <strong> SEO</strong> Search Engine Optimization to help your market
            your internet business.
          </p>
          <br />

          <h4>Web Design and Hosting</h4>
          <p>
            A striking and well organized web page layout will greatly enhance
            your appeal to your target audience. At first glance you need to
            capture your potential customer and communicate your products and
            services in seconds.
            <br />I can add links to Social Media, favorite images, video,
            slider components to your website, also make if fully responsive
            using Bootstrap.
            <br />
            This website is hosted on AWS Amplify with the code pushed from
            Github where you can find the repo with all the code. If you were to
            hire me as a developer for your website your code would also be
            pushed to Github so you would also have access to the code.
          </p>
          <br />

          <h4>Need help building a website or updating your site?</h4>
          <p>
            Make note of what you feel works well and what falls short, and then
            identify your goals for what you would like to include in your site.
            You can worry about how to achieve those goals later.
            <br />
            Building a site isn't easy, and neither is conceptualizing one.
            Professional web developers often have help from clients who can
            share their visions of what the site should be, but even then, a lot
            of employers tend to rely on developer insight. This back and forth
            between client and developer is often referred to as agile
            development. You'll need to be able to figure out the functions,
            necessary features, overall appearance and theme, site navigation
            options, interface layout, and amount of content you'll need— to
            name a few.
          </p>
        </div>
        <br />
      </Container>
    </>
  );
}

export default Home;
