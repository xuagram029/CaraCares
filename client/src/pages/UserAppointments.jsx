import {useEffect, useState} from 'react'
import  DataTable  from 'react-data-table-component'
import Sidebar from '../components/Sidebar'
import { RiUserSearchLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import axios from '../api/axios';
import { Document, Page } from 'react-pdf';
import { useNavigate } from 'react-router';


const UserAppointments = () => {
    
    const [ appointments, setAppointments] = useState([])
    const [ filteredAppointments, setFilteredAppointments] = useState([])
    const [ imgModal, setImgModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState('');
    const [selectedPdf, setSelectedPdf] = useState('');
    const [pdfModal, setPdfModal] = useState(false);
    const navigate = useNavigate()

    useEffect(()=>{
        const getAppointments = async() =>{
          const res = await axios.get('http://localhost:8000/appointment/pendings')
            setAppointments(res.data)
            setFilteredAppointments(res.data)
            console.log(res.data);
        }
        getAppointments()
      },[])

    useEffect(() => {
      if(imgModal){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'visible'
      }
    },[imgModal])
    const acceptAppointment = async (id) => {
        window.location.reload()
        const res = await axios.put(`http://localhost:8000/appointment/${id}`)
        console.log(res.data.message)
    }
    const rejectAppointment = async (id) => {
        window.location.reload()
        const res = await axios.delete(`http://localhost:8000/appointment/${id}`)
        console.log(res.data.message)
    }

    const redirectToPdf = (pdf) => {
      window.open(`http://localhost:8000/uploads/${pdf}`, '_blank');
    }

    const columns = [
        {
            name: 'Full Name',
            selector: row => row.fullname,
            sortable: true
        },
        {
            name: 'Phone Number',
            selector: row => row.number,
            sortable: true
        },
        {
          name: "Date",
          selector: row => {
              const date = new Date(row.date_s);
              const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
              return date.toLocaleDateString('en-US', options);
          },
          sortable: true
        },
        {
            name: "Agenda",
            selector: row => row.type,
            sortable: true
        },
        {
          name: 'ID',
          cell: (row) => (
            <button 
            className="bg-[#00DFA2] hover:bg-[#36AE7C] text-white font-bold py-2 px-4 rounded"
            onClick={() => {
                setSelectedPhoto(row.photo);
                setImgModal(true);
              }}>
              View Photo
            </button>
          ),
        },
        {
          name: 'PDF',
          cell: (row) => (
            <button
              className="bg-[#00DFA2] hover:bg-[#36AE7C] text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                redirectToPdf(row.pdf)
              }}
            >
              View PDF
            </button>
          ),
        },
        {
          name: "Accept",
          cell: row => (
            <button onClick={() => acceptAppointment(row.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ✓
            </button>
          ),
          button: true
        },
        {
          name: "Decline",
          cell: row => (
            <button onClick={() => rejectAppointment(row.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              X
            </button>
          ),
          button: true
        }
    ]
    
    const handleFilter = (e) => {
        const newData = filteredAppointments.filter(row =>
          row.fullname.toLowerCase().includes(e.target.value.toLowerCase()) 
        );    
        setAppointments(newData)
      }
      
  return (
    <div>
        <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex flex-col w-full md:w-3/4 lg:w-screen">
            <div className="flex ml-8 mt-5 justify-between items-center space-x-6 font-bold font-pop text-base">
                <h1 className="text-4xl">Pending Appointments</h1>
            </div>
            <div className={`mt-8 ml-8 max-w-full border border-black ${open ? "w-[75vw] transition-width duration-500" : "w-[85vw] transition-width duration-500 ease-linear"}`}>
                <div className='p-[50px 10%] mt-2 ml-5 flex'>
                <RiUserSearchLine className='text-2xl mt-1'/>
                <input type="text" onChange={handleFilter} placeholder='search user' className='text-center border border-black rounded-md'/>
                </div>
                <DataTable
                data={appointments}
                columns={columns}
                pagination
                />
            </div>
        </div>
        </div>
        {imgModal &&   
        <div className='inset-0 w-full h-screen bg-[rgba(49,49,49,0.8)] z-50 fixed flex justify-center items-center'>
          <img 
            className='w-[30rem] h-[30rem] absolute'
            src={`http://localhost:8000/uploads/${selectedPhoto}`} alt="Full Photo" />   
            <button className='bg-rose-400 text-2xl text-white rounded-sm absolute top-0 right-0 mt-8 mr-8' onClick={() => {setImgModal(!imgModal)}}>
              <AiOutlineClose />
            </button>
          </div>
        }
        {pdfModal && (
          <div className="inset-0 w-full h-screen bg-[rgba(49,49,49,0.8)] z-50 fixed flex justify-center items-center">
            <div className="absolute bg-white p-4 rounded shadow-lg">
              <button
                className="bg-rose-400 text-2xl text-white rounded-sm absolute top-0 right-0 mt-2 mr-2"
                onClick={() => {
                  setPdfModal(false);
                }}
              >
                <AiOutlineClose />
              </button>
              <Document file={`http://localhost:8000/uploads/${selectedPdf}`}>
                <Page pageNumber={1} />
              </Document>
            </div>
          </div>
        )}

    </div>
  )
}

export default UserAppointments