import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, } from 'react-bootstrap';

function App() {
  return (
    <>
    
    <Navbar bg='primary' variant="dark">
      <Container>
        <Navbar.Brand className='d-flex align-items-center'>
          <img src='logo.png' width={50} className="pe-2" alt='Logo'></img>  
            BuildBlok
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Build</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Home</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    <main className='p-3'>
      Main Content
    </main>
    <footer>

    </footer>
    </>
  );
}

export default App;
