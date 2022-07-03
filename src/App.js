import { Container, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar className='color-nav' variant='dark'>
        <Container className='d-flex align-items-center justify-content-md-between'>
          <Navbar.Brand>
            <Link to='/'>
              <img src='./resources/Logo2022.png' alt='Logo for Puff Puff Cream Puffs' width={140} height={90} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
            <Link to={'/'}>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/order'>Order</Link>
          </Navbar.Collapse>
          <Link to='/order' className='btn btn-danger'>
            Order Now
          </Link>
        </Container>
      </Navbar>
      <div className='background'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
