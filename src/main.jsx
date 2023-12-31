import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const myCreatedRoute=createBrowserRouter([
  {
    path:"/",
    element: <h1>Hello World</h1>
  },
  {
    path:"products",
    element: <h2>Product Route</h2>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Step 1 making Route provider by npm i react-router-dom */}
    <RouterProvider router={myCreatedRoute}/> 
  </React.StrictMode>,
)
