import React, { useState } from 'react';
import Unavbar from './Unavbar';
import './uhome.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer';

const Uhome = () => {
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const books = [
    { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg' },
    { title: 'Think and Grow Rich', author: 'Napoleon Hill', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg' },
    { title: "Don't Let Her Stay", author: 'Nicola Sanders', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg' },
    { title: 'Killing the Witches', author: 'Bill O’Reilly', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg' },
    { title: 'Harry Potter', author: 'J.K. Rowling', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg' },
    { title: 'Elon Musk', author: 'Walter Isaacson', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg' },
    { title: 'The Mosquito', author: 'Timothy C. Winegard', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg' },
    { title: 'Journey on the James', author: 'John Bryan', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg' }
  ];

  const handleSearch = () => {
    const query = search.trim().toLowerCase();
    if (query === '') {
      setFilteredBooks([]);
      return;
    }

    const results = books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );

    setFilteredBooks(results);
  };

  const renderBookCard = (book, index) => (
    <Card key={index} style={{ width: '18rem', margin: '10px' }}>
      <Link to='/uproducts'>
        <Card.Img variant="top" src={book.image} />
      </Link>
      <Card.Body>
        <Card.Title className="text-center">{book.title.toUpperCase()}</Card.Title>
        <p className="text-center text-muted" style={{ fontSize: '14px' }}>by {book.author}</p>
      </Card.Body>
    </Card>
  );

  return (
    <div>
      <Unavbar />

      <div className="text-center mt-4">
        <h2 style={{ fontSize: '30px' }}>Search for a Book</h2>
        <input
          type="text"
          placeholder="Enter book title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 16px' }}>Search</button>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="d-flex justify-content-center flex-wrap mt-4">
          {filteredBooks.map(renderBookCard)}
        </div>
      ) : search.trim() !== '' ? (
        <div className="text-center mt-4">
          <p style={{ fontSize: '18px', color: 'gray' }}>No books found with that title or author.</p>
        </div>
      ) : (
        <>
          <h1 className='text-center mt-5' style={{ fontSize: '50px' }}>Best Seller</h1>
          <div className="d-flex justify-content-center flex-wrap">
            {books.slice(0, 4).map(renderBookCard)}
          </div>

          <h1 className='text-center mt-5' style={{ fontSize: '50px' }}>Top Recommendation</h1>
          <div className="d-flex justify-content-center flex-wrap">
            {books.slice(4).map(renderBookCard)}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Uhome;