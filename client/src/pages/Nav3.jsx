import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import img4 from "../assets/images/image4.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const username = user?.resp && user.resp[0]?.firstname;

  // flag if true or false
  const [menuOpen, setMenuOpen] = useState(false);
  // taga set ng boolean to true or false depende sa value
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    let list = document.querySelector("ul");
    if (!menuOpen) {
      list.classList.add("opacity-100"),
        list.classList.add("top-[98px]"),
        list.classList.add("shadow-l");
    } else {
      list.classList.remove("opacity-100"),
        list.classList.remove("top-[98px]"),
        list.classList.remove("shadow-l");
    }
  }

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [openServices, setServices] = useState(false);
  const handleClickServices = () => {
    setServices(!openServices);
  };

  const [openContact, setContact] = useState(false);
  const handleClickContact = () => {
    setContact(!openContact);
  };

  const [openPet, setPet] = useState(false);
  const handleClickPet = () => {
    setPet(!openPet);
  };

  const handleLogout = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGOUT" })
    try {
        const res = await axios.post("http://localhost:8000/user/logout")
        console.log(res.data.message)
        navigate('/')
    } catch (err) {
        console.log(err)
    }
}


  // console.log(user.resp[0].username)
  return (
    <nav className="px-5 bg-white shadow-xl md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="pl-[10px] text-2xl font-[Lato] cursor-pointer w-16">
          <img src={img4} alt="" />
          CARA
        </span>

        <span
          className="text-3xl cursor-pointer md:hidden block"
          onClick={toggleMenu}
        >
          {/* lalabas yung icon depende sa condition */}
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </span>
      </div>
      <ul className="md:flex md:items-center r  z-1  md:z-auto md:static absolute bg-white w-2/5 left-0 md:w-auto md:py-0  md:pl-0  md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 mt-[0px] pl-[0px] py-[0px] ">
        {
          user && 
          <div className="mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900">
            <li>
              <button onClick={handleLogout}>LOGOUT</button>
            </li>
          </div>
        }

        <div className="mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900">
          <li>
            <Link to="/" className="">
              Home{" "}
            </Link>
          </li>
        </div>

        <div className="mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900">
          <li className="">
            <Link onClick={handleClickPet}>Pets</Link>
            {openPet && (
              <div className="z-5 dropdown-content h-40 w-40 border border-white bg-white text-blue-900 flex flex-col absolute right-32 top-20 items-center">
                <Link
                  to="/adopt-a-pet"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Adopt a Pet
                </Link>
                <Link
                  to="/sponsor-a-pet"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Sponsor a Pet
                </Link>
                <Link
                  to="/foster-a-pet"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Foster a Pet
                </Link>
              </div>
            )}
          </li>
        </div>

        <div className="mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900">
          <li className="">
            <Link className="ml-2 uppercase " onClick={handleClickContact}>
              Contact
            </Link>
            {openContact && (
              <div className="z-5 dropdown-content h-40 w-40 border border-white bg-white text-blue-900 flex flex-col absolute lg:top-20 lg:right-0 items-center">
                <Link
                  to="/contact-us"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Contact Us
                </Link>
                <Link
                  to="/join-team"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Join Our Team
                </Link>
              </div>
            )}
          </li>
        </div>

        <div className="mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900">
          <li className="">
            <Link onClick={handleClickServices}>Services</Link>
            {openServices && (
              <div className="z-5 dropdown-content h-40 w-40 border border-white bg-white text-blue-900 flex flex-col absolute right-32 top-20 items-center">
                <Link
                  to="/donate"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Donate
                </Link>
                <Link
                  to="/humane-education"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  asdasd
                </Link>
              </div>
            )}
          </li>
        </div>

        <div className="mx-4 hover:md:mx-4 hover:md:pl-3 hover:mx-0 hover:pl-7 my-4 md:my-0  hover:shadow-s duration-500  hover:bg-blue-900 text-xl p-3 uppercase bg-rose-white text-blue-900 hover:text-white hover:border-blue-900">
          <li className="">
            <Link onClick={handleClick}>About</Link>
            {open && (
              <div className="z-5 dropdown-content h-40 w-40 border border-white bg-white text-blue-900 flex flex-col absolute lg:top-20 lg:right-0 items-center">
                <Link
                  to="/about"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  About CARA
                </Link>
                <Link
                  to="/humane-education"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Humane Education
                </Link>
                <Link
                  to="/laguna-pitbulls"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  Laguna Pitbulls
                </Link>
                <Link
                  to="/tnvr"
                  className="dropdown-item border border-neutral-300 p-3 w-40 text-center hover:bg-blue-900 hover:text-white"
                >
                  TNVR
                </Link>
              </div>
            )}
          </li>
        </div>
        {user ? <div>{username}</div> : ""}
      </ul>
    </nav>
  );
}

export default Navbar;
