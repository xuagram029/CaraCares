import React from "react";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
function LostReport(){
    return(
        <div>
            <Navbar/>
        <div className="px-2 md:px-12 lg:px-20 xl:px-32 2xl:px-[500px] ">
            <h1 className='sm:text-3xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900 mt-8 md:mt-12 '>Report Lost Pets</h1>
            <p className='text-sm md:text-l lg:text-xl xl:text-2xl mt-3 '>If you locate a missing pet, kindly fill out the form below and we'll do our best to return it to its owner </p>
        
            <div className="border-2 border-solid p-4 md:p-6 lg:p-18 ">
                 <h1 className='text-lg md:text-4xl font-bold xl:text-6xl md:mt-10 '>Owner Contact Information</h1>
                 <div class="flex-grow border-t border-gray-400 mb-3"></div>
                 
                <div className="grid grid-cols-3 gap-2">
                    
                        <div className="">
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">FN</label>
                            <input type="text" className="w-full text-sm shadow-l" ></input>
                           
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">LN</label>
                            <input type="text" className="w-full text-sm shadow-l"  ></input>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">MN</label>
                            <input type="text" className="w-full text-sm shadow-l"  ></input>    
                        </div>
                    
                 </div>
                 <div className="grid grid-cols-2 gap-2 mt-6">
                         <div>
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">PHONE NUMBER</label>
                            <input type="text" className="w-full text-sm shadow-l" ></input>
                        </div>
                        <div>
                        <label htmlFor="" className="text-sm text-neutral-500  mt-6">EMAIL</label>
                            <input type="text" className="w-full text-sm shadow-l"></input>    
                        </div>
                 </div>

                 <h1 className='text-lg md:text-4xl font-bold xl:text-6xl mt-6 md:mt-10 '>Lost Pet Details</h1>
                 <div class="flex-grow border-t border-gray-400 mb-3"></div>

                
                 <div className="grid grid-cols-3 gap-2">
                    
                        <div className="">
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">PET NAME</label>
                            <input type="text" className="w-full text-sm shadow-l"  ></input>
                            
                           
                        </div>
                        <div>
                            
                            <label htmlFor="" className="text-sm text-neutral-500  mt-6">TYPE OF PET</label>
                            <select className="w-full text-sm shadow-l p-2 rounded-[6px]"   name="" id=""></select>
                        </div>
                        <div>
                             <label htmlFor="" className="text-sm text-neutral-500  mt-6">PET GENDER</label>
                            <select className="w-full text-sm shadow-l p-2 rounded-[6px]"   name="" id=""></select>
                        </div>
                    
                 </div>
                 <div className="grid grid-cols-3 gap-2 mt-2 mb-6">
                    
                    <div className="">
                        <label htmlFor="" className="text-sm text-neutral-500  mt-6">COLOR/S</label>
                        <input type="text" className="w-full text-sm shadow-l"  ></input>
                        
                       
                    </div>
                    <div>
                        
                        <label htmlFor="" className="text-sm text-neutral-500  mt-6">BREED</label>
                        <input type="text" className="w-full text-sm shadow-l"  ></input>
                    </div>
                    <div>
                         <label htmlFor="" className="text-sm text-neutral-500  mt-6">DATE OF LOST</label>
                         <input type="text" className="w-full text-sm shadow-l"  ></input>
                    </div>
                
                </div>
                    
                    <label htmlFor="" className="text-sm text-neutral-500">PHOTO OF PET</label>   
                    <div className="border-2 border-solid w-full  p-1">
                    <input type="file" />
                    </div>
                    
                    <div >
                        <label  htmlFor="" className="text-sm text-neutral-500 block">Additional Description/Message</label>  
                        <textarea className="border-2 border-solid w-full" cols="30" rows="5"></textarea>
                        <div className="text-center">
                        <button className="bg-blue-900 text-white p-2 w-1/2">Submit</button>
                        </div>
                        
                    </div>
                    

            

            </div>

            
        </div>
        <Footer/>
        </div>
    )
}
export default LostReport