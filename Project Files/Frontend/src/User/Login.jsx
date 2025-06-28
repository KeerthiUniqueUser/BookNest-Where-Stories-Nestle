import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:4000/login", payload)
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          alert("Login successful");
          navigate('/uhome');
        } else {
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // TODO: Replace this with actual backend call if needed
    setResetSent(true);
  };

  const goToSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div>
      <Home />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-8 border border-gray-300 shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Login to user account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Password"
              />
            </div>

            <div className="text-right text-sm">
              <button
                type="button"
                onClick={() => {
                  setShowReset(!showReset);
                  setResetSent(false);
                }}
                className="text-indigo-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-sm text-sm transition duration-300"
            >
              Log in
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={goToSignup}
                className="text-indigo-600 hover:underline"
              >
                Signup
              </button>
            </p>
          </form>

          {/* Reset Password Section */}
          {showReset && (
            <div className="w-full mt-6 border-t pt-4">
              <h3 className="text-md font-semibold text-gray-700 mb-2 text-center">Reset Password</h3>
              {resetSent ? (
                <p className="text-sm text-green-600 text-center">
                  Reset link has been sent to <strong>{resetEmail}</strong>
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
      </div>
    </div>
  );
};

export default Login;