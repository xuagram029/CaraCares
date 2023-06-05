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

function Nav2() {
  const { user } = useContext(AuthContext);
  const username = user?.resp && user.resp[0]?.firstname;

  const [openSv, setOpenSv] = useState(false)
  const [openAb, setOpenAb] = useState(false)
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

  // console.log(user.resp[0].username)
  return (
    <div>
        <div className=" items-center cursor-pointer pt-5">
            <img src={img4} className="w-[60px] m-auto" alt="" />
            <p className="pl-2 text-lg  text-center font-[Lato] font-bold cursor-pointer "> CARA Welfare Philippines</p>
        </div>

        <div className="border border-blue-400 py-5 px-4 flex justify-between items-center">
            <div className="border border-red-500 w-[50%] justify-self-center text-center">
                <ul className="flex py-5 px-4 justify-around">
                    <li>HOME</li>
                    <li>PETS</li>
                    <li>CONTACT</li>
                    <li>SERVICES</li>
                    <li>ABOUT</li>
                </ul>
            </div>

            <div className="border border-blue-400 flex justify-around py-5 px-4 w-64">
                <button>LOGIN</button>
                <button>SIGN UP</button>
            </div>
        </div>

    </div>
  );
}

export default Nav2;