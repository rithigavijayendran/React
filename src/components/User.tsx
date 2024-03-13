import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



type user = {
  user_id: number;
  username: string;
  password: string;
  Age: number;
};

export default function User() {
  const AUTH_TOKEN = '1234567';
  const [user, setUser] = useState<user>();
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();


  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('data submitted');

    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .finally(() => console.log('user created'));
  };

  return !isAuthenticated &&(
    <div className="bg-white border border-gray-500 h-screen  flex items-center justify-center flex-col gap-3" style={{ backgroundImage: `url('https://media.istockphoto.com/id/857838962/photo/fitness-background-sport-equipment-copy-space.jpg?s=612x612&w=0&k=20&c=A9Kuj9GCaqhzIumDbB-j6TW32mFIIahsxvYORGiG1pw=')` }}>
      <h1 className='font-bold text-2xl text-white'>Let's Go</h1>
      <form onSubmit={onSubmitData}>
      <div className='flex flex-col items-center gap-6'>
  
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          className=' text-black bg-white border border-blue-500 px-9'
          value={user?.username}
          onChange={(data) => {
            setUser({
              ...user!,
              username: data.target.value,
            });
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter your Password"
          className=' text-black bg-white border border-blue-500 px-9'
          value={user?.password}
          onChange={(data) => {
            setUser({
              ...user!,
              password: data.target.value,
            });
          }}
        />
  
   
      <button type="submit" className="login-button bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700" onClick={loginWithRedirect}>
          Login
        </button>
        
        </div>
      </form>
      
    </div>
  );
}
