// src/Components/Home.jsx

import React from 'react';
import MainNavbar from '../Componenets/Navbar';
import Footer from '../Componenets/Footer';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <MainNavbar />

      {/* Best Seller Section */}
      <h1 className='text-center' style={{ fontSize: '50px' }}>Best Seller</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ width: '18rem', marginRight: '80px' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>RICH DAD<br /> POOR DAD</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginRight: '80px' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>THINK AND<br /> GROW RICH</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginRight: '80px' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>DON'T LET HER STAY</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>KILLING THE WITCHES</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br /><br /><br />

      {/* Top Recommendation Section */}
      <h1 className='text-center' style={{ fontSize: '50px' }}>Top Recommendation</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ width: '18rem', marginRight: '80px' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>HARRY POTTER</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginRight: '80px' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>ELON MUSK</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginRight: '80px' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>THE MOSQUITO</Card.Title>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>JOURNEY ON THE JAMES</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br /><br />
      <Footer />
    </div>
  );
}

export default Home;