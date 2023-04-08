import './App.css';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import AdoptAPet from './pages/AdoptAPet';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Foster from './pages/Foster';
import Register from './pages/Register';

function App() {

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: '/about',
      element:<Layout />,
      children: [
        {
          path: '/about',
          element: <About />
        }
      ]
    },
    {
      path: "/adopt-a-pet",
      element: <Layout />,
      children: [
        {
          path: '/adopt-a-pet',
          element: <AdoptAPet/>
        }
      ]
    },
    {
      path: "/contact-us",
      element: <Layout />,
      children: [
        {
          path: '/contact-us',
          element: <Contact/>
        }
      ]
    },
    {
      path: "/donate",
      element: <Layout />,
      children: [
        {
          path: '/donate',
          element: <Donate/>
        }
      ]
    },
    {
      path: "/foster-a-pet",
      element: <Layout />,
      children: [
        {
          path: '/foster-a-pet',
          element: <Foster />
        }
      ]
    },
  ]);

  return (
    <div className="font-body scroll-smooth m-0 p-0 box-border relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
