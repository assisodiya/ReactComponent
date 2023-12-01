import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ChangeDateFormat from './Component/ChangeDateFormat.jsx';
import Home from './Home.jsx';
import Crudinmongo from './Component/Crudinmongo.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/ChangeDateFormat",
    element: <ChangeDateFormat/>,
  },
  {
    path: "/Crudinmongo",
    element: <Crudinmongo/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
