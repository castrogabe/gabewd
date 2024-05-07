import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const MernAWS = () => {
  return (
    <>
      <Helmet>
        <title>MERN AWS</title>
      </Helmet>
      <Container className='content'>
        <br />
        <div className='box'>
          <h1>MERN Stack on AWS Ubuntu Free Tier</h1>
        </div>
        <Row md={12} className='box'>
          <h1>Select EC2:</h1>
          <img src='/images/1 select EC2.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Launch Instance:</h1>
          <img src='/images/2 select zone and launch.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Launch Instance Tag:</h1>
          <img src='/images/3 launch instance.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Select Ubuntu:</h1>
          <img src='/images/4 ubuntu 22.04 LTS.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Free Tier:</h1>
          <img src='/images/5 instance type.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Create Key Pair:</h1>
          <img src='/images/6 create key-pair.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Name Key Pair:</h1>
          <img src='/images/7 key-pair name.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Security Group Rules {'>'} Add Rules by clicking "Edit":</h1>
          <img src='/images/8 click edit to add rules.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Instance Rules:</h1>
          <img src='/images/9 rules.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Instance Success:</h1>
          <img src='/images/11 instance success.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Name Instance:</h1>
          <img src='/images/12 name instance.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>Instance Running:</h1>
          <img src='/images/13 running select conect.png' alt='' />
        </Row>
        <Row md={12} className='box'>
          <h1>SSH client:</h1>
          <img src='/images/14 select SSH client.png' alt='' />
        </Row>
        <div className='box'>
          <h1>MERN Stack on AWS</h1>
          <h4>
            Open an SSH client. Locate your private key file. The key used to
            launch this instance is key pair.pem Run this command, if necessary,
            to ensure your key is not publicly viewable.
          </h4>
        </div>
        <div className='box'>
          <p>
            <strong>
              <span style={{ color: 'blue' }}>i-0d256787548890ea3 </span>
              <span style={{ color: 'green' }}>(your instance id)</span>
            </strong>
          </p>
          <p>
            <strong>
              ec2-<span style={{ color: 'red' }}>12-345-678-910</span>
              .us-west-1.compute.amazonaws.com
            </strong>
          </p>
          <p>
            <strong>
              ssh -i "keyPair.pem" ubuntu@ec2-
              <span style={{ color: 'red' }}>12-345-678-910</span>
              .us-west-1.compute.amazonaws.com
            </strong>
          </p>
          <p>
            <strong>
              <span style={{ color: 'green' }}>Public IPv4 address </span>
              <span style={{ color: 'red' }}>12-345-678-910 </span>
              the Public IPv4 is the same number as the Public DNS
            </strong>
          </p>
          <h4>
            In the Terminal or Command cd into desktop or folder where the
            keyPair.pem cert is located.
          </h4>
          <ol>
            <li>
              chmod 400 keyPair.pem Connect to your instance using its Public
              DNS:
            </li>
            <li>
              ssh -i "keyPair.pem"
              ubuntu@ec2-ec2-12-345-678-910.us-west-1.compute.amazonaws.com Add
              fingerprint {'>'} yes
            </li>
            <li>sudo apt update</li>
            <li>
              curl -o-
              https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh |
              bash <br />
              . ~/.nvm/nvm.sh nvm <br />
              install 17 <br />
              nvm use 17
            </li>
            <li>
              node -v <br />
              npm -v <br />
              git --version
            </li>
            <span style={{ color: 'green' }}>
              v17.9.1 <br />
              8.11.0 <br />
              git version 2.34.1
            </span>
            <br />
            <br />
            <h4>Add your git repo</h4>
            <li>sudo git clone https://github.com/yourname/yourRepo.git</li>
            <li>ls (frontend backend)</li>
            <br />
            <h4>Backend</h4>
            <li>
              cd yourRepo/backend (cd ../..) or cd .. &gt; ls &gt; yourRepo &gt;
              cd ..
            </li>
            <li>cd yourRepo/backend </li>
            <li>touch .env</li>
            <span style={{ color: 'green' }}> Backend </span>
            <li>vim .env</li>
            <span style={{ color: 'green' }}>
              i to insert {'>'} esc {'>'} : wq {'>'} enter to save
            </span>
            <li>Add your .env</li>
            <li>npm install</li>
            <span style={{ color: 'green' }}>
              backend **** (MAKE SURE MONGODB IS WHITELIST 0.0.0.0/0) ****
            </span>
            <br />
            <span style={{ color: 'red' }}>(permissions error)</span>{' '}
            <span style={{ color: 'green' }}>
              cd instance root before ewpShop
            </span>
            <br /> sudo chmod -R 777 ewpShop{' '}
            <span style={{ color: 'green' }}> node_modules is installed</span>
            <li>npm start</li>
            <span style={{ color: 'red' }}>
              ** Test in a new google tab **
              http://ec2-12-345-678-910.us-west-1.compute.amazonaws.com:8000/api/products
            </span>
            <li>control + c to stop backend</li>
            <br />
            <h4>Frontend</h4>
            <li>cd</li>
            <li>cd yourRepo/frontend</li>
            <li>npm install</li>
            <span style={{ color: 'green' }}>frontend</span>
            <li>npm run build</li>
            <span style={{ color: 'green' }}>optimizes</span>
            <br />
            <br />
            <h4>Steps to configure NGINX in root</h4>
            <li>cd</li>
            <li>sudo apt install nginx-core -y</li>
            <li> sudo service nginx start</li>
            <li>sudo service nginx status</li>
            <span style={{ color: 'green' }}>
              (active running) ← shows active running
            </span>
            <br />
            <span style={{ color: 'green' }}>
              (public IPv4 address/DNS, paste in browser new tab)
            </span>
            12.345.678.910{' '}
            <span style={{ fontWeight: 'bold' }}>Welcome to nginx!</span>
            <br />
            <br />
            <h4>Edit nginx default file</h4>
            <li>
              cd /etc/nginx <span style={{ color: 'green' }}>(root)</span>
            </li>
            <li>ls</li>
            <li>cd sites-enabled</li>
            <li>ls</li>
            <span style={{ color: 'blue' }}>(default)</span>
            <span style={{ color: 'green' }}>
              ← we need to update this file
            </span>
            <li>sudo vim default</li>
            <span style={{ color: 'green' }}> (i to insert : wq to save)</span>
            <br />
            Comment out with #
            <pre>
              {`
                #location / {
                  #try_files
                #}
              `}
            </pre>
            replace with <br />
            <pre>
              {`
              location / {
                  proxy_pass http://127.0.0.1:3000;
                  proxy_http_version 1.1;
                  proxy_set_header Upgrade $http_upgrade;
                  proxy_set_header Connection 'upgrade';
                  proxy_set_header Host $host;
                  proxy_cache_bypass $http_upgrade;
              }
        
              location /api {
                  proxy_pass http://127.0.0.1:8000;
                  proxy_http_version 1.1;
                  proxy_set_header Upgrade $http_upgrade;
                  proxy_set_header Connection 'upgrade';
                  proxy_set_header Host $host;
                  proxy_cache_bypass $http_upgrade;
              }
            `}
            </pre>
            <li>sudo service nginx restart</li>
            <li>sudo service nginx status</li>
            <span style={{ color: 'green' }}>
              (active running) ← shows active running
            </span>
            <li>sudo nginx -t</li>
            <span style={{ color: 'green' }}> (test is successful)</span>
            <br />
            <span style={{ color: 'green' }}> (esc : wq)</span>
            <li>exit</li>
            <li>clear</li>
            <li>cd frontend</li>
            <li>pm2 start npm -- start</li>
            <span style={{ color: 'green' }}>(starts frontend)</span>
            <li>start server.js</li>
            <span style={{ color: 'green' }}> (starts backend)</span>
            <br />
            <br />
            <h4>Kill pm2 / restart pm2</h4>
            <li>pm2 kill</li>
            <li>cd frontend</li>
            <li>pm2 start npm -- start</li>
            <li>pm2 start server.js</li>
            <br />
            <br />
            <h4>Reconnect to instance</h4>
            <li>chmod 400 keyPair.pem</li>
            <li>
              ssh -i "keyPair.pem"
              ubuntu@ec2-12-345-678-910.us-west-1.compute.amazonaws.com
            </li>
            <li>
              <span style={{ color: 'green' }}>Public IPv4 address </span>
              <strong>12-345-678-910</strong>
            </li>
          </ol>
        </div>
        <br />
      </Container>
    </>
  );
};

export default MernAWS;
