import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserAppointment = () => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [type, setType] = useState("")
  const [number, setNumber] = useState("")
  const [photo, setPhoto] = useState('')
  const [pdf, setPdf] = useState(null)
  const [time, setTime] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(name, date, time, type, number, photo, pdf);
    try {
      const formData = new FormData()
      formData.append('fullName', name)
      formData.append('date', date)
      formData.append('time', time)
      formData.append('type', type)
      formData.append('number', number)
      formData.append('image', photo)
      formData.append('pdf', pdf)

      const res = await axios.post('http://localhost:8000/appointment', formData)
      console.log(res.data.message)
      navigate('/')
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  const handleFile = (e) => {
    setPhoto(e.target.files[0])
  }

  const handlePdfUpload = (e) => {
    setPdf(e.target.files[0])
  }

  return (
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Set Appointment
      </h1>
  
      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        dolores deleniti inventore quaerat mollitia?
      </p>
  
      <form
        action=""
        class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <p class="text-center text-lg font-medium">Set your appointment now </p>
  
        <div>
          <label for="name">Full Name: </label>
  
          <div class="relative">
            <input
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              type="text"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Full Name"
            />
  
          </div>
        </div>

        <div>
          <label for="name">Valid ID: </label>
  
          <div class="relative">
            <input
              onChange={handleFile}
              type="file"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Valid ID"
            />
  
          </div>
        </div>

        <div>
            <label htmlFor="pdf">PDF File: </label>
            <div className="relative">
              <input
                onChange={handlePdfUpload}
                type="file"
                accept=".pdf"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />
            </div>
        </div>

        <div>
          <label for="password">Appointment Date</label>
  
          <div class="relative">
            <input
              value={date}
              onChange={(e) => {setDate(e.target.value)}}
              type="date"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
  
          </div>
        </div>

        <div>
          <label for="password">Time</label>
          <div class="relative">
            <select name="" id="" 
            onChange={(e) => {setTime(e.target.value)}}
            className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'>
              <option value=""> --SELECT-- </option>
              <option value="8am">8am</option>
              <option value="9am">9am</option>
              <option value="10am">10am</option>
              <option value="11am">11am</option>
              <option value="1pm">1pm</option>
              <option value="2pm">2pm</option>
              <option value="3pm">3pm</option>
              <option value="4pm">4pm</option>
            </select>
          </div>
        </div>

        <div>
          <label for="password">Phone Number</label>
  
          <div class="relative">
            <input
              value={number}
              onChange={(e) => {setNumber(e.target.value)}}
              type="text"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder='Number (eg.639*********)'
            />
  
          </div>
        </div>

        <div>
          <label for="password">Agenda</label>
  
          <div class="relative">
            <select name="" id="" className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' value={type} onChange={(e) => {setType(e.target.value)}}>
              <option hidden>SELECT</option>
              <option value="adoption">Adopt</option>
              <option value="foster">Foster</option>
            </select>  
          </div>
        </div>
  
        <button
          onClick={handleSubmit}
          class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Send Appointment
        </button>
      </form>
    </div>
  </div>
  )
}

export default UserAppointment