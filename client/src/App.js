import './App.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, } from 'react-bootstrap';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Block from './Block';
import Canvas from './Canvas';
import Home from './Home';

function App() {
  return (
    <>
      <Navbar bg='primary' variant="dark" className='px-2'>
        <Navbar.Brand className='d-flex align-items-center'>
          <img src='logo.png' width={50} className='pe-2' alt='Logo'></img>
          <span className='logo-text'>
            Build Blok
          </span>
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
      </Navbar>
      <main className='p-3'>
        <Home/>
        <DndProvider backend={HTML5Backend}>
          Main Content
          <div className='w-25'>
            <Block draggable id="test" name="test" />
          </div>
          <Canvas />
        </DndProvider>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
