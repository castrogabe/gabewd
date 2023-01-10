import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import WebDesign from './pages/WebDesign';
import Portfolio from './pages/Portfolio';

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
            </Routes>
          </Container>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
