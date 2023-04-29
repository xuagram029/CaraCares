import React from "react";
import Navbar from '../components/Navbar'
import lostpet1 from '../assets/ui/CARA_PICTURES/lost1.png'
import lostpet2 from '../assets/ui/CARA_PICTURES/lost2.png'
import lostpet3 from '../assets/ui/CARA_PICTURES/lost3.png'
import lostpet4 from '../assets/ui/CARA_PICTURES/lost4.png'
import { Link } from "react-router-dom";
import ReportPets from '../pages/Reportpets';
import Footer from "../components/Footer";

function Lostpetsall(){
return(

        <div className="mb-[30px]">
            <Navbar/>
            <div className="px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] xl:mt-[80px] mt-[40px]">
 
        
            <select className="text-sm p-[1px] text-neutral-700 md:text-lg border-2 border-solid shadow-xl">
                <option value="Category" hidden >Category</option>
            </select>
           
            
       
                <div class="relative flex py-2 items-center">
                    <span class="text-lg md:text-2xl flex-shrink mx-4 text-gray-400">Lost Pets</span>
                    <div class="flex-grow border-t border-gray-400"></div>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 pb-0 ">
                <div className="border-2 border-solid grid-rows-2 p-3 shadow-xxl ">
                    <div className="h-1/2 lg:mb-4">
                        <img className="h-[100%] w-full" src={lostpet1} alt="" />
                    </div>
                    <div className="">
                     <h1 className="text-center font-bold text-lg lg:text-xl xl:text-2xl lg:mb-4">Uknown #01</h1>
                        <div className=" flex grid-cols-2 text-sm lg:text-md 2xl:mb-6 xl:mb-2 lg:mb-10 md:mb-10 mb-10">
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                               <p>Breed: </p>
                               <p>Sex: </p>
                               <p>Colors: </p>
                               <p>Date Found: </p>
                            </div>
    
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                                <p>Uknown </p>
                               <p>Male </p>
                               <p>Brown/White</p>
                               <p>07/04/23 </p>
                            </div>
    
    
                        </div>
                            <div className="m-auto text-center">
                            <Link to="/lostpetsmore "> <button className="bg-blue-900 text-white p-2 w-full ">View Info</button></Link>
                            </div>
                        
                    </div>
                </div>
    
    
                <div className="border-2 border-solid grid-rows-2 p-3 shadow-xxl ">
                    <div className="h-1/2 lg:mb-4">
                        <img className="h-[100%] w-full" src={lostpet2} alt="" />
                    </div>
                    <div className="">
                     <h1 className="text-center font-bold text-lg lg:text-xl xl:text-2xl lg:mb-4">Uknown #01</h1>
                        <div className=" flex grid-cols-2 text-sm lg:text-md 2xl:mb-6 xl:mb-2 lg:mb-10 md:mb-10 mb-10">
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                               <p>Breed: </p>
                               <p>Sex: </p>
                               <p>Colors: </p>
                               <p>Date Found: </p>
                            </div>
    
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                                <p>Uknown </p>
                               <p>Male </p>
                               <p>Brown/White</p>
                               <p>07/04/23 </p>
                            </div>
    
    
                        </div>
                            <div className="m-auto text-center">
                            <button className="bg-blue-900 text-white p-2 w-full ">View Info</button>
                            </div>
                        
                    </div>
                </div>
    
    
    
    
                <div className="border-2 border-solid grid-rows-2 p-3 shadow-xxl ">
                    <div className="h-1/2 lg:mb-4">
                        <img className="h-[100%] w-full" src={lostpet3} alt="" />
                    </div>
                    <div className="">
                     <h1 className="text-center font-bold text-lg lg:text-xl xl:text-2xl lg:mb-4">Uknown #01</h1>
                        <div className=" flex grid-cols-2 text-sm lg:text-md 2xl:mb-6 xl:mb-2 lg:mb-10 md:mb-10 mb-10">
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                               <p>Breed: </p>
                               <p>Sex: </p>
                               <p>Colors: </p>
                               <p>Date Found: </p>
                            </div>
    
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                                <p>Uknown </p>
                               <p>Male </p>
                               <p>Brown/White</p>
                               <p>07/04/23 </p>
                            </div>
    
    
                        </div>
                            <div className="m-auto text-center">
                            <button className="bg-blue-900 text-white p-2 w-full ">View Info</button>
                            </div>
                        
                    </div>
                </div>
    
    
    
                <div className="border-2 border-solid grid-rows-2 p-3 shadow-xxl ">
                    <div className="h-1/2 lg:mb-4">
                        <img className="h-[100%] w-full" src={lostpet4} alt="" />
                    </div>
                    <div className="">
                     <h1 className="text-center font-bold text-lg lg:text-xl xl:text-2xl lg:mb-4">Uknown #01</h1>
                        <div className=" flex grid-cols-2 text-sm lg:text-md 2xl:mb-6 xl:mb-2 lg:mb-10 md:mb-10 mb-10">
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                               <p>Breed: </p>
                               <p>Sex: </p>
                               <p>Colors: </p>
                               <p>Date Found: </p>
                            </div>
    
                            <div className="border-2 border-solid w-1/2 leading-7 text-lg xl:text-sm font-bold">
                                <p>Uknown </p>
                               <p>Male </p>
                               <p>Brown/White</p>
                               <p>07/04/23 </p>
                            </div>
    
    
                        </div>
                            <div className="m-auto text-center">
                            <button className="bg-blue-900 text-white p-2 w-full ">View Info</button>
                            </div>
                        
                    </div>
                </div>
    
    
                
            </div>
    
            </div>
            <ReportPets/>
            <Footer/>
        </div>
    )
}
export default Lostpetsall