import './App.css';
import React , { Components_hub } from 'react';
import Home from './X_pages/Home/Home.jsx';
import About from './X_pages/About/About.jsx';
import SeatAlloc  from './X_pages/SeatAlloc/SeatAlloc';
import Contact from './X_pages/Contact/Contact';
import Rules from './X_pages/Rules/Rules';
import Fee from './X_pages/Fee/Fee';
import Faq from './X_pages/Faq/Faq';



import Navbar from './Components_hub/Navbar/Navbar.jsx';
import Login from './X_pages/Login/Login.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SeatAlloc",
    element: <SeatAlloc />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Rules",
    element: <Rules />,
  },
  {
    path: "/Fee",
    element: <Fee />,
  },
  {
    path: "/Faq",
    element: <Faq />,
  },
]);

function App() {
  return (
    <>
    <Navbar />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
