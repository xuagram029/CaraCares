import React from "react";
import { Link } from "react-router-dom";
function Reportpets(){
    return(

        <div className="bg-white p-5 mt-16 mb-16 text-center  shadow-xxl">
               <h1 className=' lg:text-3xl text-xl font-bold xl:text-4xl text-blue-900 text-center '>GET YOUR PET BACK HOME</h1>
               <div className="flex justify-center mx-auto gap-2 mt-2">
                <Link to="/lostreport" className='bg-blue-900 p-2  lg:text-xl text-sm font-bold xl:text-2xl text-white text-center shadow-xxl '>Report Lost Pet</Link>
                <Link  to="/foundreport" className='bg-blue-900 p-2  lg:text-xl text-sm font-bold xl:text-2xl text-white text-center shadow-xxl '>Report Found Pet</Link>
                </div>
            <div>

            </div>
        </div>
    )
}
export default Reportpets