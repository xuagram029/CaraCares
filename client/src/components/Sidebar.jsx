import {useState, useContext, useEffect} from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiFileFind } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

import { AiOutlineSetting } from "react-icons/ai";

import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { SidebarContext } from '../context/SbContext';

const Sidebar = () => {
    const {open, setOpen} = useContext(SidebarContext)
    const [openMenu, setOpenMenu] = useState(false)
    const [openLf, setOpenLf] = useState(false)
    const [openPe, setOpenPe] = useState(false)
    const { user, dispatch } = useContext(AuthContext);
    const firstname = user?.resp && user.resp[0]?.firstname;
    const lastname = user?.resp && user.resp[0]?.lastname;
    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGOUT" })
        try {
            await axios.post("http://localhost:8000/admin/logout")
            // console.log(res.data.message)
            navigate('/admin-login')
        } catch (err) {
            console.log(err)
        }
    }


  return (
    // overflow-y-scroll overflow-x-hidden
    <div className={`flex flex-col text-[#f4f4f4] justify-between bg-rose-500 h-[1000px] p-6  relative  ${open ? "w-64": "w-20" } duration-500`}>
        <div>
            <BsArrowLeft
                className={`bg-[#060047] rounded-full text-white text-3xl p-1 absolute -right-3 cursor-pointer ${ !open ? "rotate-180 duration-500" : "-rotate-0 duration-500" }`} onClick={() => setOpen(!open)}/>
            
            <div className={`pt-2 flex items-center z-10 ${!open ? "border-none" : "border-b border-[#060047]"}`}>
            <BiUserCircle
                    className={`text-2xl cursor-pointer min-w-fit`} />
                    <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "scale-0 duration-300" : "duration-500"}`}>{`${firstname} ${lastname}`}</h1>
            </div>

            <Link to='/admin-dashboard'>
                <div className={`pt-10 flex items-center ${!open ? "border-none" : "border-b border-[#060047]"}`}>
                    <RxDashboard
                        className={`text-lg cursor-pointer min-w-fit`} />
                        <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "scale-0 duration-300" : "duration-500"}`}>Dashboard</h1>
                </div>
            </Link>

            <Link to='/admin-pet-boarding'>
                <div className={`pt-6 flex items-center ${!open ? "border-none" : "border-b border-[#060047]"}`}>
                        <HiOutlineUsers
                            className={`text-lg cursor-pointer min-w-fit`} />
                        <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "scale-0 duration-300" : "duration-500"}`}>Users</h1>
                </div>
            </Link>

            <Link to='/available-pets'>
                <div className={`pt-6 flex items-center ${!open ? "border-none" : "border-b border-[#060047]"}`}>
                        <MdPets
                            className={`text-lg cursor-pointer min-w-fit`} />
                        <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "scale-0 duration-300" : "duration-500"}`}>Available Pets</h1>
                </div>
            </Link>

            <div className='pt-6 flex flex-col items-center'>
                <div className={`flex self-start border-b border-[#060047] w-full ${!open ? "border-none" : "border-b border-[#060047]"}`}>
                    <MdPets
                        className={`text-lg cursor-pointer min-w-fit`}/>
                        <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "hidden duration-300" : "block duration-500"}`} onClick={() => {setOpenMenu(!openMenu)}}>Foster / Adoption</h1>
                        <AiOutlineArrowDown
                        className={`text-lg cursor-pointer absolute right-1 ${!openMenu ? "rotate-180 duration-300" : "duration-500"} ${!open ? "hidden": "visible"}`} onClick={() => {setOpenMenu(!openMenu)}}/>
                </div>
                { openMenu && <div className={`pt-4 w-full self-start ${!open && "hidden"}`}>
                    <div className='text-sm border-b border-[#060047] cursor-pointer'>Adoption</div>
                    <div className='text-sm mt-2  border-b border-[#060047] cursor-pointer'>Foster</div>
                </div> }
            </div>

            <div className='pt-6 flex flex-col items-center'>
                <div className={`flex self-start border-b border-[#060047] w-full ${!open ? "border-none" : "border-b border-[#060047]"}`}>
                    <BiFileFind
                        className={`text-lg cursor-pointer min-w-fit`}/>
                        <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "hidden duration-300" : "block duration-500"}`} onClick={() => {setOpenLf(!openLf)}}>Lost & Found</h1>
                        <AiOutlineArrowDown
                        className={`text-lg cursor-pointer absolute right-1 ${!openLf ? "rotate-180 duration-300" : "duration-500"} ${!open ? "hidden": "visible"}`} onClick={() => {setOpenLf(!openLf)}}/>
                </div>
                { openLf && <div className={`pt-4 w-full self-start ${!open && "hidden"}`}>
                    <div className='text-sm border-b border-[#060047] cursor-pointer'><Link to='/pending-losts'>Lost Pets</Link></div>
                    <div className='text-sm mt-2  border-b border-[#060047] cursor-pointer'><Link to='/pending-founds'>Found Pets</Link></div>
                </div> }
            </div>

            <div className='pt-6 flex flex-col items-center'>
                <div className={`flex self-start border-b border-[#060047] w-full ${!open ? "border-none" : "border-b border-[#060047]"}`}>
                    <BsPencilSquare
                        className={`text-lg cursor-pointer min-w-fit`}/>
                        <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "hidden duration-300" : "block duration-500"}`} onClick={() => {setOpenPe(!openPe)}}>Panel Encode</h1>
                        <AiOutlineArrowDown
                        className={`text-lg cursor-pointer absolute right-1 ${!openPe ? "rotate-180 duration-300" : "duration-500"} ${!open ? "hidden": "visible"}`} onClick={() => {setOpenPe(!openPe)}}/>
                </div>
                { openPe && <div className={`pt-4 w-full self-start ${!open && "hidden"}`}>
                    <div className='text-sm border-b border-[#060047] cursor-pointer'><Link to='/admin-visitation-dogs'>Dog Visitation Report</Link></div>
                    <div className='text-sm mt-2  border-b border-[#060047] cursor-pointer'><Link to='/admin-visitation-cats'>Cat Visitation Report</Link></div>
                    <div className='text-sm mt-2  border-b border-[#060047] cursor-pointer'><Link to='/admin-panel-encode'>Add Pet</Link></div>
                </div> }
            </div>
            <Link to='/admin-profile'>
                <div className={`pt-6 flex items-center ${!open ? "border-none" : "border-b border-[#060047]"}`}>
                    <AiOutlineSetting
                        className={`text-lg cursor-pointer min-w-fit`}/>
                        <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "scale-0 duration-300" : "duration-500"}`}>Settings</h1>
                </div>
            </Link>
        </div>
            <div className='flex items-center mt-3'>
                <BiLogOut
                className={`text-lg cursor-pointer min-w-fit`} onClick={handleLogout}/>
                <h1 className={`origin-left ml-5 text-base cursor-pointer ${!open ? "scale-0 duration-300" : "duration-500"}`} onClick={handleLogout}>Logout</h1>
            </div>
    </div>
  )
}

export default Sidebar