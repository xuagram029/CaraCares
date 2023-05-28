import {useState, useEffect, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from '../api/axios'
import "../modal.css";
import Sidebar from '../components/Sidebar';
import { SidebarContext } from '../context/SbContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import  DataTable  from 'react-data-table-component'
import { RiUserSearchLine } from 'react-icons/ri';

const AdminPetBoarding = () => {
  const [modal, setModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('')
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/admin-login');
    }
  }, [user, navigate]);

  const [users, setUsers] = useState([])
  const [filteredUser, setFilteredUser] = useState([])
  const [id, setId] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [verified, setVerified] = useState('')
  const { open } = useContext(SidebarContext)

  useEffect(()=>{
    const getUsers = async() =>{
      const res = await axios.get('http://localhost:8000/user')
      setUsers(res.data)
      setFilteredUser(res.data)
    }
    getUsers()
  },[])

  const columns = [
    {
        name: 'First Name',
        selector: row => row.firstname,
        sortable: true
    },
    {
        name: "Last Name",
        selector: row => row.lastname,
        sortable: true
    },
    {
        name: "Email",
        selector: row => row.email,
        sortable: true
    },
    {
        name: "Address",
        selector: row => row.address,
        sortable: true
    },
    {
        name: "Birthday",
        selector: row => row.birthdate,
        sortable: true
    },
    {
        name: "Verified",
        selector: row => row.verified,
        sortable: true
    },
    {
      name: "Edit",
      cell: row => (
        <button onClick={() => toggleModal(row.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
      ),
      button: true
    },
    {
      name: "Delete",
      cell: row => (
        <button onClick={() => handleDelete(row.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      ),
      button: true
    }
]

  const toggleModal = async (id) => {
    setModal(!modal);
    const res = await axios.get(`http://localhost:8000/user/${id}`)
    const userSpec = res.data[0]
    setFirstname(userSpec.firstname)
    setLastname(userSpec.lastname)
    setEmail(userSpec.email)
    setAddress(userSpec.address)
    setBirthdate(userSpec.birthdate)
    setVerified(userSpec.verified)
    setSelectedOption(userSpec.verified)
    setId(userSpec.id)
  };
  
  const toggleModalClose = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleOptionChange = async (e) => {
    setSelectedOption(e.target.value);
  }

  const handleSubmit = async (id) =>{
    await axios.put(`http://localhost:8000/user/${id}`,{
        firstname, lastname, email, address, birthdate, verified: selectedOption
    })
    window.location.reload()
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/user/${id}`)
    window.location.reload()
  }

  const handleFilter = (e) => {
    const newData = filteredUser.filter(row =>
      row.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
      row.lastname.toLowerCase().includes(e.target.value.toLowerCase())
    );    
    setUsers(newData)
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full md:w-3/4 lg:w-screen">
        <div className="flex ml-8 mt-5 justify-between items-center space-x-6 font-bold font-pop text-base">
          <h1 className="text-4xl">USERS DASHBOARD</h1>
        </div>
          <div className={`mt-8 ml-8 max-w-full border border-black ${open ? "w-[75vw] transition-width duration-500" : "w-[85vw] transition-width duration-500 ease-linear"}`}>
            <div className='p-[50px 10%] mt-2 ml-5 flex'>
              <RiUserSearchLine className='text-2xl mt-1'/>
              <input type="text" onChange={handleFilter} placeholder='search user' className='text-center border border-black rounded-md'/>
            </div>
            <DataTable
              columns={columns}
              data={users}
              pagination
            />
          </div>
        </div>
        
        {/* <form className=' mt-12 w-1/3 flex '>
          <input name="SearchBar" className="block p-4 text-gray-700 bg-gray-100 rounded-l-lg border-gray-300 focus:outline-none focus:bg-white focus:border-gray-500 shadow-md shadow-slate-900" placeholder='Search...'></input>
          <button type="submit" className="p-2 w-12 text-black bg-gray-100 rounded-r-lg  hover:text-white hover:bg-neutral-900 focus:outline-none shadow-md shadow-slate-900"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
        </form>
        <div className={`overflow-x-auto flex flex-col mt-8 border border-black ${open ? "w-[75vw] transition-width duration-500" : "w-[90vw] transition-width duration-500 ease-linear"}`}>
          <div className='overflow-x-auto'>
            <div className='p-1.5 w-full inline-block align-middle'>
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className='bg-grey-500'>
                    <tr>
                      <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Full Name</th>
                      <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Email</th>
                      <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Address</th>
                      <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Birthday</th>
                      <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>VERIFIED</th>
                      <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase' >EDIT / DELETE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users && users.map(user => (
                      <tr key={user.id}>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{user.firstname} {user.lastname}</td>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{user.email}</td>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{user.address}</td>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{user.birthdate}</td>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{user.verified}</td>
                        <div className='flex gap-5'>
                          <button onClick={() => toggleModal(user.id)} className='bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 mt-2 rounded-lg shadow-gray-400 shadow-lg'>EDIT</button>
                          <button onClick={() => handleDelete(user.id)} className='bg-[#E06469] hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 mt-2 rounded-lg shadow-gray-400 shadow-lg'>DELETE</button>
                        </div>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
                {modal && (
          <div className="modal fixed inset-0 z-10 flex items-center justify-center">
            <div
              onClick={toggleModal}
              className="overlay fixed inset-0 bg-black opacity-50"
            ></div>
            <div className="modal-content bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Update Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="firstname">
                    First Name:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    id="firstname"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="lastname">
                    Last Name:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    id="lastname"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="address">
                    Address:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    id="address"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="birthdate">
                    Birthday:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="date"
                    value={birthdate}
                    onChange={(e) => {
                      setBirthdate(e.target.value);
                    }}
                    id="birthdate"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="color">
                    Verified: {verified}
                  </label>
                  <select
                    value={selectedOption || verified}
                    onChange={handleOptionChange}
                    className="m-6 px-12 py-4 leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none"
                  >
                    {verified === "verified" ? (
                      <>
                        <option value="verified">verified</option>
                        <option value="not verified">not verified</option>
                      </>
                    ) : (
                      <>
                        <option value="not verified">not verified</option>
                        <option value="verified">verified</option>
                      </>
                    )}
                  </select>

                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
                onClick={() => {handleSubmit(id)}}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={toggleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  )
}

export default AdminPetBoarding