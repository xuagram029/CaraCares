import React from "react";
import Navbar from '../components/Navbar'
import lostpet1 from '../assets/ui/CARA_PICTURES/lost1.png'
import lostpet2 from '../assets/ui/CARA_PICTURES/lost2.png'
import lostpet3 from '../assets/ui/CARA_PICTURES/lost3.png'
import lostpet4 from '../assets/ui/CARA_PICTURES/lost4.png'
import ReportPets from '../pages/Reportpets';
import Footer from "../components/Footer";
function Lostpetsmore(){
    return(

            <div>
                <Navbar/>
                <div className="grid-rows-2 mt-[50px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
                    <div className="flex ">
                        <div className="w-1/2  h-[100%] my-auto ">
                            <div className='h-full'>
                                <img className="   h-[100%]" src={lostpet1} alt="" />
                            </div>
                        </div>
                        <div className="w-1/2 h-[100%] my-auto md:ml-4 ml-4 md:p-5">
                        <h1 className="font-bold text-sm lg:text-xl xl:text-2xl lg:mb-4">Animal ID #1333333</h1>
                        <div className=" flex grid-cols-2 text-sm lg:text-md 2xl:mb-6 xl:mb-2 lg:mb-10 md:mb-10 mb-10">
                            <div className="w-1/2 leading-4 md:leading-[50px] text-sm xl:text-xl md:font-bold">
                               <p>Name: </p>
                               <p>Breed: </p>
                               <p>Sex: </p>
                               <p>Colors: </p>
                               <p>Date Found: </p>
                               <p>Found By: </p>
                            </div>
    
                            <div className="w-1/2  leading-4 text-sm xl:text-xl  md:font-bold md:leading-[50px]">
                                <p>Uknown </p>
                                <p>Uknown </p>
                               <p>Male </p>
                               <p>Brown/White</p>
                               <p>07/04/23 </p>
                               <p>Randy Boy </p>
                            </div>
    
                        </div>
                        </div>  
                    </div>
                    
                </div>
                <h1 className='sm:text-2xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900  px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] mt-5'>Location Details</h1>
                <div className="grid-rows-2 mt-[10px] md:mt-[20px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
                <div className="flex ">
                    <div className="w-1/2 text-sm leading-4">
                        <p className="font-bold">Shelter Name: <span className="font-normal">paws animal rehabilitation center (parc)</span></p>
                        <br />
                        <br />
                        <p className="font-bold">Email: <span className="font-normal">dogrescuelv@hotmail.com</span></p>
                    </div>
                    <div className="w-1/2 text-sm leading-4">
                        <p className="font-bold">Address: <span className="font-normal">Aurora Blvd. Katipunan Valley,Loyola Heights,Quezon City,Philippines</span></p>
                        <br />
                        <p className="font-bold">Phone: <span className="font-normal">#(702)591-6469</span></p>
                    </div>
                </div>
                </div>
                <ReportPets/>
                <Footer/>
                </div>  
    )

}
export default Lostpetsmore