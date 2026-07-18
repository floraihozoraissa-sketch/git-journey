import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './About.jsx'
import { Hero } from './HomePage.jsx'
import { Contact } from './ContactUs.jsx'
import { Navbar } from './Navbar.jsx'
import { Collection } from './collection.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {path:"/",element: <Hero/>},
  {path: "/About", element: <About/>},
  {path: "/ContactUs", element: <Contact/>},
  {path: "/Navbar", element: <Navbar/>},
  {path: "/Collection", element: <Collection/>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
