import './App.css';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Home from './pages/Home';
import Bloghome3 from './pages/bloghome3';
import BlogAllpost from './pages/BlogsAllpost';
import BlogSeemore from './pages/BlogSeemore';
import Admin from './pages/Admin';
import AdminPetBoarding from './pages/AdminPetBoarding';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import AdoptAPet from './pages/AdoptAPet';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Foster from './pages/Foster';
import Register from './pages/Register';
import Sponsor from './pages/SponsorAPet';
import Tnvr from './pages/Tnvr';
import LagunaPit from './pages/LagunaPit';
import HumaneEduc from './pages/HumaneEduc';
import JoinTeam from './pages/JoinTeam';
import ErrorPage from './pages/ErrorPage';
import Nav2 from './pages/Nav2';
import Nav3 from './pages/Nav3';
import AdminVisitation from './pages/AdminVisitation';
import AdminVisitationReport from './pages/AdminVisitationReport';
import AdminPanelEncode from './pages/AdminPanelEncode';
import FosterPDF from './pages/FosterPDF';
import FoundPets from './pages/FoundPets';
import FoundPetsAll from './pages/Foundpetsall';
import FoundPetsMore from './pages/Foundpetsmore';
import Reportpets from './pages/Reportpets';
import FoundReport from './pages/Foundreport';
import LostReport from './pages/LostReport';
import LostPets from './pages/Lostpets';
import LostPetsAll from './pages/Lostpetsall';
import LostPetsMore from './pages/Lostpetsmore';
import Modal from './pages/Modal';


function App() {

const Layout = () => {
  return(
    <>
      <Nav3 />
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
      path: "/nav2",
      element: <Nav2 />,
    },
    {
      path: "/modal/:id",
      element: <Modal />,
    },
    {
      path: '/blogallpost',
      element:<Layout />,
      children: [
        {
          path: '/blogallpost',
          element: <BlogAllpost />
        }
      ]
    },
    {
      path: '/blogseemore',
      element:<Layout />,
      children: [
        {
          path: '/blogseemore',
          element: <BlogSeemore  />
        }
      ]
    },
    {
      path: "/blogs3",
      element: <Bloghome3 />,
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
      path: '/admin-pet-boarding',
      element:<Layout />,
      children: [
        {
          path: '/admin-pet-boarding',
          element: <AdminPetBoarding />
        }
      ]
    },
    {
      path: '/admin-visitation',
      element:<Layout />,
      children: [
        {
          path: '/admin-visitation',
          element: <AdminVisitation />
        }
      ]
    },
    {
      path: '/admin-visitation-report',
      element:<Layout />,
      children: [
        {
          path: '/admin-visitation-report',
          element: <AdminVisitationReport />
        }
      ]
    },
    {
      path: '/admin-panel-encode',
      element:<Layout />,
      children: [
        {
          path: '/admin-panel-encode',
          element: <AdminPanelEncode />
        }
      ]
    },
    {
      path: "/foundpets",
      element: <FoundPets />,
    },
    {
      path: "/foundpetsall",
      element: <FoundPetsAll />,
    },
    {
      path: "/foundpetsmore",
      element: <FoundPetsMore />,
    },
    {
      path: '/foundpetsmore/:id',
      element:<Layout />,
      children: [
        {
          path: '/foundpetsmore/:id',
          element: <FoundPetsMore />
        }
      ]
    },
    {
      path: "/reportpets",
      element: <Reportpets />,
    },
    {
      path: '/Foundreport',
      element:<Layout />,
      children: [
        {
          path: '/Foundreport',
          element: <FoundReport />
        }
      ]
    },
    {
      path: '/lostreport',
      element:<Layout />,
      children: [
        {
          path: '/lostreport',
          element: <LostReport />
        }
      ]
    },
    {
      path: '/lostpets',
      element:<Layout />,
      children: [
        {
          path: '/lostpets',
          element: <LostPets />
        }
      ]
    },
    {
      path: '/Lostpetsall',
      element:<Layout />,
      children: [
        {
          path: '/Lostpetsall',
          element: <LostPetsAll />
        }
      ]
    },
    {
      path: '/lostpetsmore/:id',
      element:<Layout />,
      children: [
        {
          path: '/lostpetsmore/:id',
          element: <LostPetsMore />
        }
      ]
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
        {
      path: "/foster-pdf",
      element: <Layout />,
      children: [
        {
          path: '/foster-pdf',
          element: <FosterPDF />
        }
      ]
    },
    {
      path: "/sponsor-a-pet",
      element: <Layout />,
      children: [
        {
          path: '/sponsor-a-pet',
          element: <Sponsor />
        }
      ]
    },
    {
      path: "/tnvr",
      element: <Layout />,
      children: [
        {
          path: '/tnvr',
          element: <Tnvr />
        }
      ]
    },
    {
      path: "/laguna-pitbulls",
      element: <Layout />,
      children: [
        {
          path: '/laguna-pitbulls',
          element: <LagunaPit />
        }
      ]
    },
    {
      path: "/join-team",
      element: <Layout />,
      children: [
        {
          path: '/join-team',
          element: <JoinTeam />
        }
      ]
    },
    {
      path: "/humane-education",
      element: <Layout />,
      children: [
        {
          path: '/humane-education',
          element: <HumaneEduc />
        }
      ]
    },


    
    {
      path: '*',
      element: <ErrorPage/>
    }
  ]);

  return (
    <div className="font-body scroll-smooth m-0 p-0 box-border relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
