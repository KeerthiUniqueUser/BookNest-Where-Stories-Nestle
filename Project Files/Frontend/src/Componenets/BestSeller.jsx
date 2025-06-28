// src/Componenets/BestSeller.jsx
import React from 'react';

// You would need to add a "books" array here or fetch it from an API
const bestSellerBooks = [
  {
    id: 1,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "https://cdn.kobo.com/book-images/c81ea4de-cfb7-415d-8634-314aad041fdb/1200/1200/False/rich-dad-poor-dad-9.jpg"
  },
  {
    id: 2,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "https://cdn.penguin.com.au/covers/original/9781585428960.jpg"
  },
  {
    id: 3,
    title: "Don't Let Her Stay",
    author: "Nicola Sanders",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg"
  },
  {
    id: 4,
    title: "Killing the Witches",
    author: "Bill O'Reilly",
    image: "https://m.media-amazon.com/images/I/81fOUtK-uOL.jpg"

  },
  {
  id: 5,
    title: "Harry Potter and the Deatly Hallows",
    author: "J.K.Rowling",
    image: "https://i.thenile.io/r1000/9780545139700.jpg?r=5e8d433943d7d"
  },
  {
  id: 6,
    title: "Journey on the James",
    author: "Bill O'Reilly",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210._UY630_SR1200,630_.jpg"
  }
];

const BestSeller = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Best Seller</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellerBooks.map(book => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={book.image} alt={book.title} className="w-full h-80 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-600 text-sm">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;