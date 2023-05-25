import React, { useState, useEffect } from 'react'
import Max from '../assets/ui/CARA_PICTURES/dogs/MAX.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../modal.css";
import { IoMdAddCircle } from 'react-icons/io';
import moment from 'moment';

const AdminVisitationReport = () => {
  const {id} = useParams()
  const [pet, setPet] = useState(null)
  const [modalAv, setModalAv] = useState(false);
  const [modalEv, setModalEv] = useState(false);
  const [modalPet, setModalPet] = useState(false);
  // const [visitation, setVisitation] = useState({
  //   number: '',
  //   name: '',
  //   confirmation: '',
  //   date: ''
  // })

  const [number, setNumber] = useState('')
  const [visitor, setVisitor] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [date, setDate] = useState('')
  const [visits, setVisits] = useState([])
  
  //PET INFORMATION
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [color, setColor] = useState('')
  const [type, setType] = useState('')
  const [age, setAge] = useState('')
  const [shelternumber, setShelterNumber] = useState('')
  const [sheltername, setShelterName] = useState('')
  const [shelteremail, setShelterEmail] = useState('')
  const [shelteraddress, setShelterAddress] = useState('')



  const handleChange = (e) => {
    setVisitation(prev => ({...prev, [e.target.visitor]: e.target.value}))
  }

  // console.log(visitation)value={} 

  //EDIT PET INFO
  const togglePetModalClose = () => {
    setModalPet(!modalPet);
  };

  const togglePetModal = () => {
    setModalPet(true);
  };

  if(modalPet) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  const EditPet = (e) => {
    console.log({ name, gender, color, type, age, shelternumber, sheltername, shelteremail, shelteraddress }
      );
    axios.put(`http://localhost:8000/admin-encode/${id}`, { name, gender, color, type, age, shelternumber, sheltername, shelteremail, shelteraddress });
    window.location.reload()
    setModalPet(!modalPet);

  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:8000/admin-encode/${id}`);

      const editpet = res.data[0];
      setName(editpet.name);
      setGender(editpet.gender);
      setColor(editpet.color);
      setType(editpet.type);
      setAge(editpet.age);
      setShelterNumber(editpet.shelternumber);
      setShelterName(editpet.sheltername);
      setShelterEmail(editpet.shelteremail);
      setShelterAddress(editpet.shelteraddress);
      console.log(res.data)
    };
    getData();
  }, [id]);


  //ADD VISITATION REPORT//
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

  //EDIT VISITATION REPORT//
  const toggleEvModalClose = () => {
    setModalEv(!modalEv);
  };

  const toggleEvModalOpen = () => {
    setModalEv(true);
  };

  if(modalEv) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const toggleEvModal = async (id) => {
    setModalEv(!modalEv);
    const res = await axios.get(`http://localhost:8000/typeofpet/${id}`)
    // console.log(res)
    console.log(res.data[0])
    const visitEdit = res.data[0]
    setNumber(visitEdit.number)
    setConfirmation(visitEdit.confirmation)
    setDate(visitEdit.date)
    setId(visitEdit.id)
  };

  useEffect(() => {
    const getPet = async () => {
      const res = await axios.get(`http://localhost:8000/typeofpet/${id}`)
      const resV = await axios.get(`http://localhost:8000/typeofpet/visits/${id}`)
      setPet(res.data)
      setVisits(resV.data)
      // setVisitNumber(res.data[0].visitnumber)
      // setVisitorName(res.data[0].visitor)
      // setVisitorConfirmation(res.data[0].confirmation)
      // setVisitDate(res.data[0].visitdate)
      console.log(res.data[0])
      console.log(resV.data[0].visitdate)
    }
    getPet()
  }, [])

  const addVisit = async (id) => {
    try {
      await axios.post(`http://localhost:8000/typeofpet/${id}`, { visitnumber:number, visitor, confirmation, visitdate:date });
      window.location.reload()
      console.log(number, visitor, confirmation, date)
      // Handle the response data or perform any necessary actions
    } catch (error) {
      console.error('Error:', error);
      // Handle the error case
    }
  };


  const EditVisit = (e) => {
    console.log({ visitnumber:number, visitor, confirmation, visitdate:date }
      );
    axios.put(`http://localhost:8000/typeofpet/${id}`, { visitnumber:number, visitor, confirmation, visitdate:date });
    window.location.reload()
    setModalEv(!modalEv);

  };
  


  // console.log(id)
  return (
    <div className='m-10 p-5 h-max sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>

      <div className="space-x-6 font-bold font-pop text-base cursor-pointer flex justify-between items-center">
        <h1 className="text-4xl">PET VISITATION</h1>
        <div className="space-x-6 ">
        <button className=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg" onClick={togglePetModal}>Edit</button>
        <button className=" bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg mx-auto shadow-gray-400 shadow-lg">Delete</button>
        </div>
      </div> 
      
      {
        pet && pet.map(p => (
        <div className=' p-6 flex items-center mt-12' key={p.id}>
          <div className="w-[55%]">
              <img src={Max} alt="Dogs" className='rounded-lg' />
          </div>
          <div className=' w-1/2 leading-10 mx-auto pl-12'>
              <h1 className='font-bold text-3xl text-center pb-12'>Pet Name: {p.name}</h1>
              <p className='font-semibold pb-2 text-left'>Gender: {p.gender}</p>
              <p className='font-semibold pb-2 text-left'>Color: {p.color}</p>
              <p className='font-semibold pb-2 text-left'>Type: {p.type}</p>
              <p className='font-semibold pb-2 text-left'>Age: {p.age}</p>
              <p className='font-semibold pb-2 text-left'>Shelter Number: {p.shelternumber}</p>
              <p className='font-semibold pb-2 text-left'>Shelter Name: {p.sheltername}</p>
              <p className='font-semibold pb-2 text-left'>Shelter Email: {p.shelteremail}</p>
              <p className='font-semibold pb-2 text-left'>Shelter Address: {p.shelteraddress}</p>
          </div>
        </div>
        ))
      }
            {/* EDIT PET INFO */}
            {modalPet &&  (
                <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
                  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                      <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-2 gap-4">
                        <div className='mb-4'>
                        <label>PET NAME:</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={name} name='name' onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Gender:</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={gender} name='gender' onChange={(e) => {setGender(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Color</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={color} name='color' onChange={(e) => {setColor(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Type</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={type} name='type' onChange={(e) => {setType(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Age</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={age} name='age' onChange={(e) => {setAge(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Shelter Number</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={shelternumber} name='shelternumber' onChange={(e) => {setShelterNumber(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Shelter Name</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={sheltername} name='sheltername' onChange={(e) => {setShelterName(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Shelter Email</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={shelteremail} name='shelteremail' onChange={(e) => {setShelterEmail(e.target.value)}}/>
                        </div>
                        <div className='mb-4'>
                        <label>Shelter Address</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={shelteraddress} name='shelteraddress' onChange={(e) => {setShelterAddress(e.target.value)}}/>
                        </div>
                      
                      </div>
                      <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={togglePetModalClose}>
                          <i className="fas fa-times" /> Cancel
                        </button>
                        <button type="button" onClick={EditPet} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2">
                          <i className="fas fa-plus" /> Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
                        <button onClick={() => toggleEvModalOpen(visits.id)} className='bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 mt-2 rounded-lg shadow-gray-400 shadow-lg'>EDIT</button>
                    </tr>
                  ))}

                </tbody>
              </table>
              

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
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={visitor} name='name' onChange={(e) => {setVisitor(e.target.value)}}/>
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
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={number} name='number' onChange={(e) => {setNumber(e.target.value)}}/>
                        <label>Visitor Name</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={visitor} name='name' onChange={(e) => {setVisitor(e.target.value)}}/>
                        <label>Visitation Confirmation</label>
                        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={confirmation} name='confirmation' onChange={(e) => {setConfirmation(e.target.value)}}/>
                        <label>Visitation Date</label>
                        <input type="date" className="w-full bg-gray-100 p-2 mt-2 mb-3" value={date} name='date' onChange={(e) => {setDate(e.target.value)}}/>
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
  )
}

export default AdminVisitationReport