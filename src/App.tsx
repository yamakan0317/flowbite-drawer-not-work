import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import { initDrawers } from 'flowbite'
import DashBoard from './pages/DashBoard';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    initDrawers();
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/dashboard',
      element: <DashBoard />,
    }
  ]);

  return (<RouterProvider router={router} />)
}

export default App
