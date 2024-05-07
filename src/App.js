import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// components
import Footer from './components/Footer';
import Header from './components/Header';

// pages
import About from './pages/About';
import Home from './pages/Home';
import MernAWS from './pages/MernAWS';
import MernRender from './pages/MernRender';
import Portfolio from './pages/Portfolio';
import WebDesign from './pages/WebDesign';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main mt-1'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/webdesign' element={<WebDesign />} />
              <Route path='/mernAws' element={<MernAWS />} />
              <Route path='/mernRender' element={<MernRender />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
