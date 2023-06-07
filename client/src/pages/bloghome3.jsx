import React from "react";
import blog1img from '../assets/ui/CARA_PICTURES/blog4img.png'
import blog2img from '../assets/ui/CARA_PICTURES/blog2img.png'
import blog3img from '../assets/ui/CARA_PICTURES/blog3img.png'
import blog4img from '../assets/ui/CARA_PICTURES/blog1img.png'
import { Link } from "react-router-dom";

function Bloghome3(){
return(
 <div className="bg-white mt-[120px] pb-[50px]  px-12 xl:px-[200px]  2xl:px-[300px]  ">
      
    <div className=" flex justify-between text-right mt-2  ">
        <p className="text-md md:text-l lg:text-lg  font-bold" ><span className="text-rose-600">Blogs</span> for you</p>
         
    </div>
    
    <div className='grid md:grid-cols-2  gap-10 w-full h-[400px] '>
        <div className="w-full relative  shadow-m cursor-pointer">
           <img src={blog1img}className="w-full h-full  " alt="" />
           
           <div className=" h-1/3 flex items-center justify-center absolute opacity-70 text-lg text-white bg-black w-full  bottom-0 left-1/2 -translate-x-1/2 ">
           <span className="text-lg">Paws For A Moment:Art for a good cause</span>
           </div>
          
       
           
        </div>
        <div className="w-full grid grid-rows-3 gap-2 ">
           <div className=" flex gap-4 bg-slate-50 shadow-m pr-3">
            <img className="h-full w-1/4" src={blog1img} alt="" />
            <span className="flex items-center grow justify-center">Paws For A Moment:Art for a good cause</span>
            <button className="bg-white text-rose-600 border-2 w-1/5  h-1/3 border-rose-600 p-2 m-auto rounded-full">Read</button>
           </div>
           <div className=" flex gap-4 bg-slate-50 shadow-m pr-3">
            <img className="h-full w-1/4" src={blog1img} alt="" />
            <span className="flex items-center grow justify-center">Paws For A Moment:Art for a good cause</span>
            <button className="bg-white text-rose-600 border-2 w-1/5  h-1/3 border-rose-600 p-2 m-auto rounded-full">Read</button>
           </div>
           <div className=" flex gap-4 bg-slate-50 shadow-m pr-3">
            <img className="h-full w-1/4" src={blog1img} alt="" />
            <span className="flex items-center grow justify-center">Paws For A Moment:Art for a good cause</span>
            <button className="bg-white text-rose-600 border-2 w-1/5  h-1/3 border-rose-600 p-2 m-auto rounded-full">Read</button>
           </div>
        </div>
       
    </div>
          
    <Link to="/blogs"><button className="absolute md:relative sm:-bottom-[220px] md:left-[10px] sm:left-[230px] md:bottom-0 2xl:-bottom-[100px] 2xl:p-4  flex items-center mt-7 justify-center bg-rose-600 text-white w-[200px] border-2 border-rose-600 p-2 m-auto rounded-full">More Blogs</button></Link>



     

</div> 
    )
}
export default Bloghome3