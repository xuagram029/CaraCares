import './App.css';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import AdoptAPet from './pages/AdoptAPet';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Foster from './pages/Foster';
import Register from './pages/Register';
import Bloghome3 from './pages/bloghome3';
import BlogSeemore from './pages/BlogSeemore';
import BlogAllpost from './pages/BlogAllpost';
import LostPets from './pages/Lostpets';
import FoundPets from './pages/Foundpets';
import LostPetsAll from './pages/Lostpetsall';
import FoundPetsAll from './pages/Foundpetsall';
import LostPetsMore from './pages/Lostpetsmore';
import FoundPetsMore from './pages/Foundpetsmore';
import ReportPets from './pages/Reportpets';
import LostReport from './pages/LostReport';
import FoundReport from './pages/FoundReport';
import PetBoardingTable from './pages/PetBoardingTable';

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
      path: "/blogs3",
      element: <Bloghome3 />,
    },
     {
      path: "/lostreport",
      element: <LostReport />,
    },
    {
      path: "/petboard",
      element: <PetBoardingTable />,
    },
    {
      path: "/foundreport",
      element: <FoundReport />,
    },
    {
      path: "/reportpets",
      element: <ReportPets />,
    },
    {
      path: "/lostpetsall",
      element: <LostPetsAll />,
    },
    {
      path: "/foundpetsmore",
      element: <FoundPetsMore />,
    },
    {
      path: "/lostpetsmore",
      element: <LostPetsMore />,
    },
    {
      path: "/foundpetsall",
      element: <FoundPetsAll />,
    },
    {
      path: "/foundpetmore",
      element: <FoundPetsAll />,
    },
    {
      path: "/lostpets",
      element: <LostPets />,
    },
    {
      path: "/foundpets",
      element: <FoundPets />,
    },
    {
      path: "/blogallpost",
      element: <BlogAllpost />,
    },
    {
      path: "/blogseemore",
      element: <BlogSeemore />,
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
