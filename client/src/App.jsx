import './App.css';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Home from './pages/Home';
// import Blogs from './pages/Blogs';
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
import Modal from './pages/Modal';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import AdminSignup from './pages/AdminSignup';
import AdminProfile  from './pages/AdminProfile';
import Appointment from './pages/Appointment';
import Calendar from './pages/Calendar';
import UserAppointment from './pages/UserAppointment';
import UserAppointments from './pages/UserAppointments';
import AppointmentPending from './pages/AdoptionHistory';
import AdoptionHistory from './pages/AdoptionHistory';
import PetsForAdoption from './pages/PetsForAdoption';
import AvailablePets from './pages/AvailablePets';
import UserProfile from './pages/UserProfile';
import AdminVisitationDogs from './pages/AdminVisitationDogs';
import AdminVisitationCats from './pages/AdminVisitationCats';
import LostReport from './pages/LostReport';
import Lostpetsall from './pages/Lostpetsall'
import Lostpetsmore from './pages/Lostpetsmore'
import Foundpets from './pages/FoundPets'
import Foundpetsall from './pages/Foundpetsall'
import Foundpetsmore from './pages/Foundpetsmore'
import Foundreport from './pages/Foundreport'
import PendingFounds from './pages/PendingFounds';
import PendingLost from './pages/PendingLost';
import Lostpets from './pages/Lostpets';
import AnimalWelfareLaws from './pages/AnimalWelfareLaws';
import AdoptionPDF from './pages/AdoptionPDF';
import SignupShelter from './pages/SignupShelter';
import ShelterLogin from './pages/ShelterLogin';
import AcceptedLost from './pages/AcceptedLost';
import AcceptedFound from './pages/AcceptedFound';
import ShetlerList from './pages/ShetlerList';
import BlogAllpost from './pages/BlogsAllpost';
import BlogSeemore from './pages/BlogSeemore';
import Adminblogs from './pages/Adminblogs';
import ShelterProfile from './pages/ShelterProfile';
import SwitchLogin from './pages/SwitchLogin';

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
      path: "/admin-dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
    {
      path: "/admin-signup",
      element: <AdminSignup/>,
    },
    {
      path: "/admin-profile",
      element: <AdminProfile/>,
    },
    {
      path: "/admin-visitation-dogs",
      element: <AdminVisitationDogs />,
    },
    {
      path: "/admin-visitation-cats",
      element: <AdminVisitationCats />,
    },
    {
      path: "/shelter-signup",
      element: <SignupShelter/>,
    },
    {
      path: "/shelter-login",
      element: <ShelterLogin/>,
    },
    {
      path: "/shelter-profile",
      element: <ShelterProfile/>,
    },
    {
      path: "/registered-shelter",
      element: <ShetlerList/>,
    },
    {
      path: "/user-profile",
      element: <Layout />,
      children: [
        {
          path: "/user-profile",
          element: <UserProfile/>,
        }
      ]
    },
    {
      path: "/scheduled-appointments",
      element: <Calendar/>,
    },
    {
      path: "/appointment",
      element: <Appointment/>,
    },
    {
      path: "/set-appointment",
      element: <UserAppointment/>,
    },
    {
      path: "/user-appointments",
      element: <UserAppointments/>,
    },
    {
      path: "/adoption-history",
      element: <AdoptionHistory/>,
    },
    {
      path: '/admin-panel-encode',
      element: <AdminPanelEncode />
    },
    {
      path: '/admin-blogs',
      element: <Adminblogs />
    },
    {
      path: '/pending-founds',
      element: <PendingFounds />
    },
    {
      path: '/pending-losts',
      element: <PendingLost />
    },
    {
      path: '/accepted-losts',
      element: <AcceptedLost />
    },
    {
      path: '/accepted-founds',
      element: <AcceptedFound />
    },
    {
      path: '/available-pets',
      element: <AvailablePets />
    },
    {
      path: '/login-as',
      element: <SwitchLogin />
    },
    {
      path: "/pets-for-adoption",
      element: <Layout />,
      children: [
        {
          path: '/pets-for-adoption',
          element: <PetsForAdoption/>
        }
      ]
    },
    // {
    //   path: "/modal/:id",
    //   element: <Modal />,
    // },
    // {
    //   path: "/nav2",
    //   element: <Nav2 />,
    // },
    // {
    //   path: "/blogs",
    //   element: <Blogs />,
    // },
    {
      path: "/admin",
      element: <Admin />,
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin-pet-boarding",
      element: <AdminPetBoarding />,
    },
    {
      path: "/user-signup",
      element: <UserSignup />,
    },
    {
      path: "/user-login",
      element: <UserLogin />,
    },
    // {
    //   path: '/admin-pet-boarding',
    //   element:<Layout />,
    //   children: [
    //     {
    //       path: '/admin-pet-boarding',
    //       element: <AdminPetBoarding />
    //     }
    //   ]
    // },
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
      path: '/blogs',
      element:<Layout />,
      children: [
        {
          path: '/blogs',
          element: <BlogAllpost />
        }
      ]
    },
    {
      path: '/blog-seemore',
      element:<Layout />,
      children: [
        {
          path: '/blog-seemore/:id',
          element: <BlogSeemore />
        }
      ]
    },
    {
      path: "/admin-visitation-report/:id",
      element: <AdminVisitationReport />,
    },
    {
      path: '/lostpets',
      element:<Layout />,
      children: [
        {
          path: '/lostpets',
          element: <Lostpets />
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
      path: '/lostpetsall',
      element:<Layout />,
      children: [
        {
          path: '/lostpetsall',
          element: <Lostpetsall />
        }
      ]
    },
    {
      path: '/lostpetsmore/:id',
      element:<Layout />,
      children: [
        {
          path: '/lostpetsmore/:id',
          element: <Lostpetsmore />
        }
      ]
    },
    {
      path: '/foundpets',
      element:<Layout />,
      children: [
        {
          path: '/foundpets',
          element: <Foundpets />
        }
      ]
    },
    {
      path: '/foundpetsall',
      element:<Layout />,
      children: [
        {
          path: '/foundpetsall',
          element: <Foundpetsall />
        }
      ]
    },
    {
      path: '/foundpetsmore/:id',
      element:<Layout />,
      children: [
        {
          path: '/foundpetsmore/:id',
          element: <Foundpetsmore />
        }
      ]
    },
    {
      path: '/foundreport',
      element:<Layout />,
      children: [
        {
          path: '/foundreport/',
          element: <Foundreport />
        }
      ]
    },

    // {
    //   path: '/admin-panel-encode',
    //   element:<Layout />,
    //   children: [
    //     {
    //       path: '/admin-panel-encode',
    //       element: <AdminPanelEncode />
    //     }
    //   ]
    // },
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
      path: "/adoption-pdf",
      element: <Layout />,
      children: [
        {
          path: '/adoption-pdf',
          element: <AdoptionPDF/>
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
      path: "/animal-welfare-laws",
      element: <Layout />,
      children: [
        {
          path: '/animal-welfare-laws',
          element: <AnimalWelfareLaws />
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