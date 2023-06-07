import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/greater-than-symbol.png";
import img6 from "../assets/images/down.png";
import usericon from "../assets/images/user.png";
import logouticon from "../assets/images/logout.png";
import settingicon from "../assets/images/gear.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router';


function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const username = user?.resp && user.resp[0]?.firstname;
  const navigate = useNavigate()

  const [openSv, setOpenSv] = useState(false)
  const [openAb, setOpenAb] = useState(false)
  const [openPt, setOpenPt] = useState(false)
  const [openCnct, setOpenCnct] = useState(false)
  const [openAccount, setOpenAccount] = useState(false)
  // flag if true or false
  const [menuOpen, setMenuOpen] = useState(false);
  // taga set ng boolean to true or false depende sa value
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    let list = document.querySelector("ul");
    if (!menuOpen) {
      list.classList.add("opacity-100"),
        list.classList.add("top-[168px]"),
        list.classList.add("shadow-l");
    } else {
      list.classList.remove("opacity-100"),
        list.classList.remove("top-[168px]"),
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
  const [openAcc, setAcc] = useState(false);
  const handleClickAcc = () => {
    setAcc(!openAcc);
  };

  const handleLogout = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGOUT" })
    try {
        await axios.post("http://localhost:8000/user/logout")
        // console.log(res.data.message)
        navigate('/user-login')
    } catch (err) {
        console.log(err)
    }
}

  // console.log(user.resp[0].username)
  return (
    <div>
       <div className=" items-center cursor-pointer pt-5">
        <img src={img4} className="w-[60px] m-auto" alt="" />
        <p className="pl-2 text-lg  text-center font-[Lato] font-bold cursor-pointer "> CARA Welfare Philippines</p>
        </div>
    <nav className="px-5 bg-white  flex items-center justify-between ">
      
       
      <div className="">
       
      
        
        <span
          className="text-3xl cursor-pointer md:hidden block"
          onClick={toggleMenu}
        >
          {/* lalabas yung icon depende sa condition */}
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </span>
  

       
      </div>
 
      <ul className="md:flex md:items-center mx-auto gap-6 text-sm z-1  md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0  md:pl-0  md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
        <div className="md:border-none md:mx-4 mx-0 border-2 border-solid border-neutral-200   md:my-4 my-0  duration-500   p-3 uppercase font-bold  text-black  ">
          <li>
            <Link to="/" className="">
              Home{" "}
            </Link>
          </li>
        </div>

        <div className="flex flex-col">
          <div className="">
            <button className="peer md:py-10 w-full   p-3 uppercase text-black  items-center flex gap-1 font-bold text-left" onClick={() => setOpenPt(!openPt)}>Pets <img className="" src={img6} alt="" /></button>
              
            {openPt && <div className={`hidden peer-hover:flex hover:flex
                w-full md:w-[250px] md:absolute
                flex-col bg-white drop-shadow-lg z-50`}>
                <Link  to="/adopt-a-pet" className=" border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Adopt a Pet</Link>
                {/* <Link to="/foster-a-pet" className="border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Foster a Pet</Link> */}
                <Link  to="/sponsor-a-pet" className=" border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Sponsor a Pet</Link>
                <Link to="/pets-for-adoption" className="border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Pets for Adoption</Link>
                <Link  to="/foundpets" className=" border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Found Pet</Link>
                <Link to="/lostpets" className="border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Lost Pet</Link>
                
            </div>}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="">
            <button className="peer md:py-10 w-full   p-3 uppercase text-black  items-center flex gap-1 font-bold text-left" onClick={() => setOpenCnct(!openCnct)}>Contact <img className="" src={img6} alt="" /></button>
              
            {openCnct && <div className={`hidden peer-hover:flex hover:flex
                w-full md:w-[250px] md:absolute
                flex-col bg-white drop-shadow-lg z-50`}> 
                <Link  to="/contact-us" className=" border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Contact us</Link>
                <Link to="/join-team" className="border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Join Our Team</Link>
                <Link  to="/foundreport" className=" border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Report Found Pets</Link>
                <Link to="/lostreport" className="border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Report Lost Pets</Link>
            </div>}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="">
            <button className="peer md:py-10 w-full   p-3 uppercase text-black  items-center flex gap-1 font-bold text-left" onClick={() => setOpenSv(!openSv)}>Services <img className="" src={img6} alt="" /></button>
              
            {openSv && <div className={`hidden peer-hover:flex hover:flex
                w-full md:w-[250px] md:absolute
                flex-col bg-white drop-shadow-lg z-50`}>
                <Link  to="/donate" className=" border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Donate</Link>
                <Link to="/blogs" className="border border-neutral-300 flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Blogs</Link>
            </div>}
          </div>
        </div>
     
        <div className="">
        <button className="peer md:py-10 w-full flex gap-1 font-bold  items-center p-3 uppercase text-black md:border-none border-2 text-left " onClick={() => setOpenAb(!openAb)}>About <img className="" src={img6} alt="" /></button>
        
       
        {openAb && <div className="hidden peer-hover:flex hover:flex
         w-full md:w-[250px] md:absolute 
         flex-col bg-white drop-shadow-lg  mr-2 z-50">
            <Link to="/animal-welfare-laws" className="flex px-5 py-3 hover:bg-gray-200 border border-neutral-300 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Animal Welfare Laws</Link>
            <Link to="/about" className="flex px-5 py-3 hover:bg-gray-200 border border-neutral-300 z-40" href="#"><img className="md:hidden" src={img5} alt="" />About CARA</Link>
            <Link to="/humane-education" className="flex px-5 py-3 hover:bg-gray-200 border border-neutral-300 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Humane Education</Link>
            <Link  to="/laguna-pitbulls" className="flex px-5 py-3 hover:bg-gray-200 border border-neutral-300 z-40" href="#"><img className="md:hidden" src={img5} alt="" />Laguna Pitbulls</Link>
            <Link  to="/tnvr" className="flex px-5 py-3 hover:bg-gray-200 z-40" href="#"><img className="md:hidden" src={img5} alt="" /> TNVR</Link>
        </div>}
    </div>
    {/* {user ? <div className="gap-2 md:hidden cursor-pointer px-[12px] py-2 ">
              <div className="flex peer ">
          <img src={usericon} alt="" />
          <span onClick={() => setOpenAccount(!openAccount)} className=" text-md text-black font-bold ">{username}</span>
          
         {openAccount && <div className="peer-hover:flex hover:flex
         w-[200px] md:w-[250px] md:absolute top-16 
         flex-col bg-white drop-shadow-lg  mr-2 ">
          <Link to="/about" className="flex px-5 py-3 hover:bg-gray-200 border border-neutral-300" href="#"><img className="md:hidden" src={img5} alt="" />About CARA</Link>
          </div>
          
          }
          </div>
          </div> : ""}       */}
         {user ?   <div className="">
        <button className="peer md:py-10 w-full flex gap-1 font-bold  items-center p-3 uppercase text-black md:border-none border-2 text-left " onClick={() => setOpenAb(!openAb)}><img src={usericon} alt="" />
          <span onClick={() => setOpenAccount(!openAccount)} className=" text-md text-black font-bold ">{username}</span></button>
        
       
     <div className="hidden peer-hover:flex hover:flex
         w-full md:w-[250px] md:absolute 
         flex-col bg-white drop-shadow-lg  mr-2 z-50">
          
          <Link to="/user-profile" className="flex px-5 py-3 hover:bg-gray-200 border border-neutral-300 z-40" href="#"><img className="" src={settingicon} alt="" /><span className="ml-3 my-auto">Profile Setting</span></Link>
          <div className="flex px-5 py-3 hover:bg-gray-200 border border-neutral-300 z-40" onClick={handleLogout}><img className="" src={logouticon} alt="" /><h1 className="ml-3 my-auto" >Logout</h1></div>
        </div>
    </div>  : ""}   
      </ul>
      {
        !user &&
          <div className="flex">
          
            <Link to="/user-login"><button className="bg-rose-600 rounded-full text-white w-[100px] border-2 border-rose-600 p-2 mr-3">Login</button></Link>
            <Link to="/user-signup"><button className="bg-white rounded-full text-rose-600 w-[100px] border-2 border-rose-600 p-2">Register</button></Link>
            
          </div>     
        }
    </nav>
    </div>
  );
}

export default Navbar;