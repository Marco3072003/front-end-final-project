import Home from './pages/Home';
import Detail from './pages/Detail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react'
import { createBrowserRouter} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function App(){
    const navigate = useNavigate()
    const [isLogOutModal, setIsLogOutModal] = useState(false);

    function handleLogOutModal(){
      isLogOutModal ? setIsLogOutModal(false) : setIsLogOutModal(true)
    }

    function handleLogOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setIsLogOutModal(false); 
      navigate('/')
    }

    return createBrowserRouter([
      {
        path:'/',
        element: <Home handleLogOut={handleLogOut} isLogOutModal={isLogOutModal} handleLogOutModal={handleLogOutModal}/>,
      }, 
      {
        path:'detail/:id',
        element: <Detail handleLogOut={handleLogOut} isLogOutModal={isLogOutModal} handleLogOutModal={handleLogOutModal}/>,
      }
    ])
}


