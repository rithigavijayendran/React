import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
  };

  return !isAuthenticated && (
    <div className="login-container flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('https://media.istockphoto.com/id/857838962/photo/fitness-background-sport-equipment-copy-space.jpg?s=612x612&w=0&k=20&c=A9Kuj9GCaqhzIumDbB-j6TW32mFIIahsxvYORGiG1pw=')` }}>
      <form onSubmit={onSubmitData} className="login-form flex flex-col gap-4">
        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button type="submit" className="login-button bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700" onClick={loginWithRedirect}>
          Sign In
        </button>
      </form>

    </div>
  );
}

export default LoginButton;
