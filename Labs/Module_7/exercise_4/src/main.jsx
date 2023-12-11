import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./components/error-page";
import Root from "./routes/root"
import BitcoinRates from './components/bitcoin-rates';
import Login from './components/login';
import Home from './components/home';
import Emoji from './components/Emoji';
import EmojiProvider from './components/EmojiContext';
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "bitcoin",
          element: <BitcoinRates />
        },
        {
          path: "login",
          element: <Login />
        },        
        {
          path: "home",
          element: <Home />
        },
        {
          path: "emoji",
          element: <Emoji />
        },
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmojiProvider>
      <RouterProvider router={router} />
    </EmojiProvider>
  </React.StrictMode>,
)
