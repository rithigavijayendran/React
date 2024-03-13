
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UserDetails from './components/UserDetails';
import User from './components/User';
import Suggestions from './components/Suggestions';
import Category from './components/Categoty';
import Choose from './components/Choose';
import './App.css'
import LoginButton from './components/LoginButton'

import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import { withAuthenticationRequired } from '@auth0/auth0-react';


const ProtectedRoute = ({ component, ...args } : any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export default function App() {
  return (
    <div className='bg-white  border-gray-500  flex items-center justify-center flex-col gap-3 p-7'>
    <Router>
      <div >
        <nav className=''>
          
      
          <ul className='flex flex-row gap-6 px-40  text-blue-500 underline'>
            
            <li className=' items-end px-42 underline'>
              <Link to='/'>Home</Link>
            </li>
          
            <li >
              <Link to='/user'>Login</Link>
            </li>
            <li>
              <Link to='/post-bmi'>User Details</Link>
            </li>
            <li>
              <Link to='/choose'>Choose</Link>
            </li>
            <li>
              <Link to='/category/post'> Category</Link>
            </li>
            <li>
              <Link to='/suggestion/get/:id'> Suggestions</Link>
            </li>
  
          
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          </ul>
        </nav>

        <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/login" element={<LoginButton />} />
        <Route path="/logout" element={<LogoutButton />} />
        <Route path="/contact" element={<h1>Contact us</h1>} />
          <Route path='/user' element={<User/>} />
          
          <Route path='/post-bmi' element={<UserDetails />} />
          <Route path='/choose' element={<Choose />} />
          <Route path='/category/post' element={<Category />} />
          <Route path='/suggestion/get/:id' element={<Suggestions />} />
    
        </Routes>
      </div>
    </Router>
    </div>
  );
}
