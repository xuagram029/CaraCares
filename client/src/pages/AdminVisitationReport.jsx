import React, { useState, useEffect, useContext } from 'react'
import Max from '../assets/ui/CARA_PICTURES/dogs/MAX.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../modal.css";
import { IoMdAddCircle } from 'react-icons/io';
import moment from 'moment';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
// import useRedirectAdmin from '../custom hooks/useRedirectAdmin';

const AdminVisitationReport = () => {
  const {user} = useContext(AuthContext)
  // useRedirectAdmin(user)
  const {id} = useParams()
  const [pet, setPet] = useState([])
  const [petId, setPetId] = useState(null)
  const [petAdoptor, setPetAdoptor] = useState("")
  const navigate = useNavigate()
  const [modalAv, setModalAv] = useState(false);
  const [modalEv, setModalEv] = useState(false);
  const [modalPet, setModalPet] = useState(false);

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [date, setDate] = useState('')

  const [numberEv, setNumberEv] = useState('')
  const [nameEv, setNameEv] = useState('')
  const [confirmationEv, setConfirmationEv] = useState('')
  const [dateEv, setDateEv] = useState('')
  const [idEv, setIdEv] = useState('')
  const [visits, setVisits] = useState([])
  
  const handleChange = (e) => {
    setVisitation(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  //ADD VISITATION REPORT
  const toggleAvModalClose = () => {
    setModalAv(!modalAv);
  };

  const toggleAvModal = () => {
    setModalAv(true);
  };

  if(modalAv) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  //EDIT VISITATION REPORT
  const toggleEvModalClose = () => {
    setModalEv(!modalEv);
  };

  const togglePetModal = async () => {
    setModalPet(true);
    console.log(petAdoptor);
    console.log(pet);
  };

  if(modalEv) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const toggleEvModal = async (vId) => {
    setModalEv(!modalEv);
    try {
      const res = await axios.get(`http://localhost:8000/typeofpet/visit/${vId}`)
      const visitEdit = res.data[0]
      setNameEv(visitEdit.visitor)
      setNumberEv(visitEdit.visitnumber)
      setConfirmationEv(visitEdit.confirmation)
      setDateEv(visitEdit.visitdate)
      setIdEv(visitEdit.id)
    } catch (error) {
      console.log(err)
    }
  };
  
  useEffect(() => {
    const getPet = async () => {
      const res = await axios.get(`http://localhost:8000/typeofpet/${id}`)
      const resV = await axios.get(`http://localhost:8000/typeofpet/visits/${id}`)
      setPetId(res.data[0].id)
      setPetAdoptor(res.data[0].adoptor)
      setPet(res.data)
      setVisits(resV.data)
    }
    getPet()
  }, [])

  const editOwner = async(id) => {
    try {
      const res = await axios.put(`http://localhost:8000/admin-encode/${id}`, { petAdoptor })
      alert(res.data.message);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  const addVisit = async (id) => {
    try {
      await axios.post(`http://localhost:8000/typeofpet/${id}`, { visitnumber:number, visitor:name, confirmation, visitdate:date });
      window.location.reload()
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const EditVisit = async () => {
    try {
      const res = await axios.put(`http://localhost:8000/typeofpet/${idEv}`, { visitnumber:numberEv, visitor:nameEv, confirmation:confirmationEv, visitdate:dateEv });
      setModalEv(!modalEv);
      window.location.reload()
    } catch (error) {
      console.log(error.response.data.message)
    }
    // window.location.reload()
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/typeofpet/${id}`)
      console.log(res.data.message);
      navigate('/admin-dashboard')
    } catch (error) {
      console.log(error)
    }
  }
  // const petId = pet && pet.length > 0 && pet[0].id
  // console.log(pet)
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='flex flex-col w-full h-screen p-6'>

      <div className="space-x-6 font-bold font-pop text-base cursor-pointer flex justify-between items-center">
        <div className=''>
          <h1 className="text-4xl">PET VISITATION</h1>
        </div>
        <div className='space-x-6'>
          <button className=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg" onClick={() => togglePetModal(petId)}>Edit</button>
          <button className=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg" onClick={() => handleDelete(petId)}>Delete</button>
        </div>
        
      </div> 
      
      {
        pet && pet.map(p => (
        <div className=' border border-black bg-[#f2f2f2] px-28 py-6 flex justify-center items-center mt-6' key={p.id}>
          <div className="mx-auto">
              <img 
              src={`http://localhost:8000/uploads/${p.photo}`} 
              alt="Dogs" 
              className='h-[400px] rounded-xl' />
          </div>
          <div className='leading-10 mx-auto'>
              <h1 className='font-bold text-3xl text-center pb-12'>Pet Name: {p.name}</h1>
              <p className='font-semibold pb-2 text-left'>Gender: {p.gender}</p>
              <p className='font-semibold pb-2 text-left'>Color: {p.color}</p>
              <p className='font-semibold pb-2 text-left'>Adoptor: {p.adoptor}</p>
              <p className='font-semibold pb-2 text-left'>From: {p.sheltername}</p>
          </div>
        </div>
        ))
      }


      <div className="flex flex-col mt-12">
        <div className='overflow-x-auto'>
          <div className='flex flex-col p-1.5 w-full  align-middle'>
            <div className='flex self-end mb-4'>
              <IoMdAddCircle className='text-3xl cursor-pointer'/>
              <button onClick={toggleAvModal}>Add Visit</button>
            </div>
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className='bg-grey-500'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-grey-500 uppercase text-center'>No.</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Name of Visitor</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Visitation Confirmation</th>
                    <th scope='col' className='px-6 py-3 text-sm font-bold text-left text-grey-500 uppercase'>Date of Visitation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {visits && visits.map(v => (
                    <tr>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{v.visitnumber}</td>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{v.visitor}</td>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{v.confirmation}</td>
                        <td className='px-6 py-4 text-sm font-medium text-grey-800 whitespace-nowrap'>{moment(v.visitdate).format('YYYY/MM/DD')}</td>
                        <button onClick={() => toggleEvModal (v.id)} className='bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 mt-2 rounded-lg shadow-gray-400 shadow-lg'>EDIT</button>
                    </tr>
                  ))}

                </tbody>
              </table>

              {modalPet && (
                <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                      <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <label>Adoptor Name</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={petAdoptor} name='number' onChange={(e) => setPetAdoptor(e.target.value)}/>
                      </div>
                      <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setModalPet(false)}>
                          <i className="fas fa-times" /> Cancel
                        </button>
                        <button type="button" onClick={() => {editOwner(id)}} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2">
                          <i className="fas fa-plus" /> Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ADD VISITATION REPORT */}
              {modalAv && (
                <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                      <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <label>Visit Number</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={number} name='number' onChange={(e) => {setNumber(e.target.value)}}/>
                        <label>Visitor Name</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={name} name='name' onChange={(e) => {setName(e.target.value)}}/>
                        <label>Visitation Confirmation</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={confirmation} name='confirmation' onChange={(e) => {setConfirmation(e.target.value)}}/>
                        <label>Visitation Date</label>
                        <input type="date" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={date} name='date' onChange={(e) => {setDate(e.target.value)}}/>
                      </div>
                      <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleAvModalClose}>
                          <i className="fas fa-times" /> Cancel
                        </button>
                        <button type="button" onClick={() => {addVisit(id)}} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2">
                          <i className="fas fa-plus" /> Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* EDIT VISITATION REPORT */}
              {modalEv && (
                <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                      <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <label>Visit Number</label>
                      <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={numberEv} name='numberEv' onChange={(e) => {setNumberEv(e.target.value)}}/>
                      <label>Visitor Name</label>
                      <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={nameEv} name='nameEv' onChange={(e) => {setNameEv(e.target.value)}}/>
                      <label>Visitation Confirmation</label>
                      <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={confirmationEv} name='confirmationEv' onChange={(e) => {setConfirmationEv(e.target.value)}}/>
                      <label>Visitation Date: {moment(dateEv).format('MM/DD/YYYY')}</label>
                      <input type="date" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={dateEv} name='dateEv' onChange={(e) => {setDateEv(e.target.value)}}/>
                    </div>
                      <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleEvModalClose}>
                          <i className="fas fa-times" /> Cancel
                        </button>
                        <button type="button" onClick={EditVisit} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2">
                          <i className="fas fa-plus" /> Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
</div>
</div>
  )
}

export default AdminVisitationReport