import React, { useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Adminblogs(){
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [datecreated, setDate] = useState('')
    const [photo, setPhoto] = useState('')

    const handleFile = (e) => {
        setPhoto(e.target.files[0])
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const formData  = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('datecreated', datecreated)
            formData.append('image', photo)

            await axios.post('http://localhost:8000/blogs', formData)
            navigate('/admin-dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    return(  
  <div className="flex">
    <Sidebar />
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-rose-600">Add a new Blog</h2>
          <form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                      <label for="name" className="block mb-2 text-sm font-medium text-rose-600 dark:text-rose-600">Blog Title</label>
                      <input onChange={(e) => setTitle(e.target.value)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type blog tittle" required=""/>
                  </div>
      
                  <div className="sm:col-span-2">
                      <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-rose-600">Content</label>
                      <textarea onChange={(e) => setDescription(e.target.value)} id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  " placeholder="Your Content here"></textarea>
                  </div>
      
                  <div className="sm:col-span-2">
                      <label for="name" className="block mb-2 text-sm font-medium text-rose-600 dark:text-rose-600">Date Created</label>
                      <input onChange={(e) => setDate(e.target.value)} type="date" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type blog tittle" required=""/>
                  </div>
              </div>
              <input className="mt-5" type="file" onChange={handleFile} />
              <br />
              <button onClick={handleSubmit} className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-rose-600 rounded-lg">
                  Add Blog
              </button>
          </form>
      </div>
  </div>

    )
}
export default Adminblogs
