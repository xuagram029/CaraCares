import React from "react";
import blog1img from '../assets/ui/CARA_PICTURES/blog4img.png'
import blog2img from '../assets/ui/CARA_PICTURES/blog2img.png'
import blog3img from '../assets/ui/CARA_PICTURES/blog3img.png'
import blog4img from '../assets/ui/CARA_PICTURES/blog1img.png'
import { Link } from "react-router-dom";

function Bloghome3(){
return(
 <div className="bg-white mt-[120px] pb-[50px] ">
      
    <div className=" flex justify-between text-right mt-2 px-12 xl:px-[200px] 2xl:px-[300px] ">
        <p className="text-md md:text-l lg:text-lg  font-bold" ><span className="text-blue-900">Blogs</span> for you</p>
         <Link to="/blogallpost" className="text-md md:text-l lg:text-lg text-blue-900 font-bold" >See All</Link>
    </div>
    
    <div className='grid-cols-1  px-12 xl:px-[200px]  2xl:px-[300px] m-auto  w-full h-[400px] '>
             <div className="flex border-2 border-solid h-2/3  ">
                    <div className="w-1/2 ">
                        <img src={blog1img} alt="" className="h-full  object-fill w-full" />

                    </div>
                    <div className='w-1/2 h-full bg-donatecover text-white  p-5 m-auto'>
                        <div className="h-1/2 flex justify-center items-center">
                        <Link to="/blogseemore" className="hover:text-blue-900" href="">  <h1 className="sm:text-2xl   font-bold">Paws For A Moment - Art for a good cause</h1></Link>
                        </div>
                        <div className="h-1/2 text-xs md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum id a voluptatem eius corrupti iusto soluta sapiente harum debitis?
                        </div>
                    </div>   
             </div>
             <div className="flex grid-cols-3 h-1/3 gap-1 ">
                    <div className="w-1/3 h-full ">
                        <div className="h-2/3">
                            <img src={blog2img} className="h-full  object-fill w-full" alt="" />
                        </div>
                        <div className="h-1/3 flex justify-center items-center">
                        <Link to="/blogseemore" className="hover:text-blue-900" href=""><h1 className="text-xs sm:text-base  font-bold">Paws For A Moment - Art for a good cause</h1></Link>
                        </div>
                       
                    </div>
                    <div className="w-1/3  h-full ">
                        <div className="h-2/3">
                            <img src={blog3img} className="h-full  object-fill w-full" alt="" />
                        </div>
                        <div className="h-1/3 flex justify-center items-center">
                        <Link to="/blogseemore" className="hover:text-blue-900" href=""><h1 className="text-xs sm:text-base  font-bold">Paws For A Moment - Art for a good cause</h1></Link>
                        </div>  
                       
                    </div>
                    <div className="w-1/3  h-full ">
                        <div className="h-2/3">
                            <img src={blog4img} className="h-full  object-fill w-full" alt="" />
                        </div>
                        <div className="h-1/3 flex justify-center items-center">
                        <Link to="/blogseemore" className="hover:text-blue-900" href=""><h1 className="text-xs sm:text-base  font-bold">Paws For A Moment - Art for a good cause</h1></Link>
                        </div>  
                       
                    </div>
            </div>
          



     </div>
     

</div> 
    )
}
export default Bloghome3