import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Navbar';

const Alogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    axios
      .post("http://localhost:4000/alogin", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          console.log(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/ahome');
          alert("Login successful");
        } else {
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Simulate sending reset link
    setResetSent(true);
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/asignup");
  };

  return (
    <div>
      <Home />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative max-w-md w-full bg-white p-8 rounded-md shadow-md overflow-hidden">

          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
              Login to Admin account
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {/* Password */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => {
                    setShowReset(!showReset);
                    setResetSent(false);
                    setResetEmail('');
                  }}
                  className="text-sm text-indigo-500 hover:underline focus:outline-none"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit/Login */}
              <div>
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-700 text-black font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                >
                  Log in
                </button>

                <p className="mt-3 text-sm text-gray-600 text-center">
                  Don't have an account?{' '}
                  <button
                    onClick={formHandle1}
                    className="text-indigo-500 hover:underline focus:outline-none"
                  >
                    Signup
                  </button>
                </p>
              </div>
            </form>

            {/* Reset Password Form */}
            {showReset && (
              <div className="mt-6 border-t pt-4">
                <h3 className="text-md font-semibold text-gray-700 mb-2 text-center">Reset Password</h3>
                {resetSent ? (
                  <p className="text-sm text-green-600 text-center">
                    Reset link sent to <strong>{resetEmail}</strong>
                  </p>
                ) : (
                  <form onSubmit={handleResetPassword} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                      className="p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-sm text-sm"
                    >
                      Send Reset Link
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Background Decoration */}
          <div className="absolute h-full w-full bg-indigo-500 transform -skew-y-6 origin-bottom-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Alogin;