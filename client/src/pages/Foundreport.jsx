import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function FoundReport(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [typeofpet, setTypeOfPet] = useState('')
    const [petgender, setPetGender] = useState('Male')
    const [color, setColor] = useState('')
    const [breed, setBreed] = useState('')
    const [dateoflost, setDateOfLost] = useState('')
    const [description,setDescription] = useState('')

    const handleSubmit = async(e) =>{
        await axios.post('http://localhost:8000/foundpet', {name, phone:phonenumber, email, typeofpet, gender:petgender, color, breed, found:dateoflost , description})
        navigate('/')
      }
    return(
        <div>
        <div className="px-2 md:px-12 lg:px-20 xl:px-32 2xl:px-[500px] ">
            <h1 className='sm:text-3xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900 mt-8 md:mt-12 '>Report Found Pets</h1>
            <p className='text-sm md:text-l lg:text-xl xl:text-2xl mt-3 '>If you locate a missing pet, kindly fill out the form below and we'll do our best to return it to its owner </p>
        
            <div className="border-2 border-solid p-4 md:p-6 lg:p-18 ">
                 <h1 className='text-lg md:text-4xl font-bold xl:text-6xl md:mt-10 '>Owner Contact Information</h1>
                 <div className="flex-grow border-t border-gray-400 mb-3"></div>
                 
                <div className="gap-2">
                    
                        <div className="">
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">Full Name</label>
                            <input type="text" className="w-full text-sm shadow-l p-4" placeholder="LAST NAME, FIRST NAME, MIDDLE INITIAL" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                        </div>

                 </div>
                 <div className="grid grid-cols-2 gap-2 mt-6">
                         <div>
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">PHONE NUMBER</label>
                            <input type="text" className="w-full text-sm shadow-l p-4" 
                            value={phonenumber} onChange={(e) => {setPhoneNumber(e.target.value)}}></input>
                        </div>
                        <div>
                        <label htmlFor="" className="text-sm text-neutral-500  mt-6">EMAIL</label>
                            <input type="text" className="w-full text-sm shadow-l p-4"
                            value={email} onChange={(e) => {setEmail(e.target.value)}}></input>    
                        </div>
                 </div>

                 <h1 className='text-lg md:text-4xl font-bold xl:text-6xl mt-6 md:mt-10 '>Found Pet Details</h1>
                 <div className="flex-grow border-t border-gray-400 mb-3"></div>

                
                 <div className="grid grid-cols-3 gap-2">
                    
                        <div>
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">TYPE OF PET</label>
                            <input type="text" className="w-full text-sm shadow-l p-4"  
                                value={typeofpet} onChange={(e) => {setTypeOfPet(e.target.value)}}></input>
                        </div>
                        <div>
                             <label htmlFor="" className="text-sm text-neutral-500  mt-6">PET GENDER</label>
                             <select onChange={(e) => {setPetGender(e.target.value)}} className="w-full text-sm shadow-l p-4" >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                             </select>
                        </div>
                    
                 </div>
                 <div className="grid grid-cols-3 gap-2 mt-2 mb-6">
                    
                    <div className="">
                        <label htmlFor="" className="text-sm text-neutral-500  mt-6">COLOR/S</label>
                        <input type="text" className="w-full text-sm shadow-l p-4"  
                        value={color} onChange={(e) => {setColor(e.target.value)}}></input>
                        
                       
                    </div>
                    <div>
                        
                        <label htmlFor="" className="text-sm text-neutral-500  mt-6">BREED</label>
                        <input type="text" className="w-full text-sm shadow-l p-4"  
                        value={breed} onChange={(e) => {setBreed(e.target.value)}}></input>
                    </div>
                    <div>
                         <label htmlFor="" className="text-sm text-neutral-500  mt-6">DATE OF LOST</label>
                         <input type="text" className="w-full text-sm shadow-l p-4"  
                         value={dateoflost} onChange={(e) => {setDateOfLost(e.target.value)}}></input>
                    </div>
                
                </div>
                    
                    {/* <label htmlFor="" className="text-sm text-neutral-500">PHOTO OF PET</label>   
                    <div className="border-2 border-solid w-full  p-1">
                    <input type="file" />
                    </div> */}
                    
                    <div >
                        <label  htmlFor="" className="text-sm text-neutral-500 block">Additional Description/Message</label>  
                        <textarea className="border-2 border-solid w-full" cols="30" rows="5"
                        value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
                        <div className="text-center">
                        <button className="bg-blue-900 text-white p-2 w-1/2" onClick={handleSubmit}>Submit</button>
                        </div>
                        
                    </div>
            </div>

            
        </div>
        </div>
    )
}
export default FoundReport