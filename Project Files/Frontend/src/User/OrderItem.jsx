import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Seller/List.css';
import Unavbar from './Unavbar';

function OrderItem() {
  const [item, setItem] = useState({});
  const [formData, setFormData] = useState({
    flatno: '',
    city: '',
    pincode: '',
    state: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/item/${id}`)
      .then((resp) => {
        setItem(resp.data);
      })
      .catch((error) => {
        console.log("Failed to fetch item data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!item || !item.userName || !item.userId || !item.description || !item.price || !item.title || !item.author || !item.genre || !item.itemImage) {
        throw new Error('Item data is missing required properties');
      }

      const { userName, description, price, title, author, genre, itemImage, userId } = item;
      const totalAmount = parseInt(price, 10); // ✅ Delivery is free, so no addition

      const updatedFormData = {
        ...formData,
        totalamount: totalAmount,
        seller: userName,
        sellerId: userId,
        description,
        booktitel: title,
        bookauthor: author,
        bookgenre: genre,
        itemImage,
      };

      const userid = JSON.parse(localStorage.getItem('user')).id;
      const username = JSON.parse(localStorage.getItem('user')).name;
      updatedFormData.userId = userid;
      updatedFormData.userName = username;

      await axios.post('http://localhost:4000/userorder', updatedFormData);
      alert('Ordered successfully');
      navigate('/myorders');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div>
      <Unavbar />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <div className="max-w-md p-4 border rounded shadow-lg bg-white">
          <h2 className="text-2xl font-semibold">Your order is almost Done!</h2>

          <form onSubmit={handleSubmit}>
            <label className="block text-gray-600 text-center" style={{ paddingTop: "10px" }}>Address:</label>

            <div className="input-container">
              <input
                type="text"
                name="flatno"
                value={formData.flatno}
                onChange={handleChange}
                placeholder="Flat no"
                style={{ width: "340px" }}
                className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <br />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="input-container">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  style={{ width: "140px" }}
                  className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>

              <div className="input-container">
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  style={{ width: "140px" }}
                  className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
            <br />

            <div className="input-container">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                style={{ width: "340px" }}
                className="w-48 p-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <br />

            {item && (
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ height: "100px", width: "50px" }}>
                    <img src={`http://localhost:4000/${item?.itemImage}`} alt="Book Cover" />
                    <p className="text-end">{item.itemtype}-{item._id ? item._id.slice(3, 7) : ''}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Price:</p>
                  <p>{item.price}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Delivery:</p>
                  <p>Free</p>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Total Amount:</p>
                  <p>{parseInt(item.price, 10)}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              style={{ width: "340px" }}
              className="bg-blue-400 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;