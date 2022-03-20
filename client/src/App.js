import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, } from 'react-bootstrap';

import Block from './Block';
import Canvas from './Canvas';
import Home from './Home';
import Build from './Build';
import * as Icon from 'react-bootstrap-icons';

function App() {
  return (
    <Router>
      <Navbar bg='primary' variant="dark" className='px-2'>
        <Navbar.Brand className='d-flex align-items-center'>
          <img src='logo.png' width={50} className='pe-2' alt='Logo'></img>
          <span className='logo-text'>
            Build Blok
          </span>
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/build'>Build</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/login' className='d-flex align-items-center'>
            <Icon.BoxArrowInRight fontSize={"1.5rem"} className="me-2" /><span>Login</span>
          </Nav.Link>
        </Nav>
      </Navbar>
      <main className='p-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/build' element={<Build />} />
          <Route></Route>
        </Routes>
      </main>
      <footer>

      </footer>
    </Router>
  );
}

export default App;
