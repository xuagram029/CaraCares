import React from "react";
import blog1img from '../assets/ui/CARA_PICTURES/blog4img.png'
import blog4img from '../assets/ui/CARA_PICTURES/blog1img.png'
import blog2img from '../assets/ui/CARA_PICTURES/blog2img.png'
import blog3img from '../assets/ui/CARA_PICTURES/blog3img.png'
import { Link } from "react-router-dom";

function BlogAllpost(){
return(
   
<div className="mb-[50px]">


<div className="mt-[50px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
    <h1 className='sm:text-3xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900'> CARA BLOGS</h1>
</div>
    <div className=" mt-[30px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
    
    <div>
        <p className="text-sm md:text-md lg:text-lg font-bold  text-neutral-500">All Post</p>
    </div>
   
</div>
<div className="grid grid-cols-1 md:grid-cols-2 mt-[20px] px-16 md:px-[50px] lg:px-[100px] xl:px-[200px]  mx-auto gap-2">
        <div className="flex">
            <div className="w-2/5 border-2 border-solid">
                <img className="h-full" src={blog1img}  alt="" />
            </div>
            <div className="w-3/5 border-2 border-solid p-5 ">
                <h1 className="text-sm 2xl:text-2xl xl:text-lg font-bold">Paws For A Moment:Art for a good cause</h1>
                <p className="text-sm 2xl:text-lg  xl:text-md mt-2 xl:mt-10 text-neutral-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eius labore quae id excepturi, optio voluptate ex quas sint nisi!</p>
               
               
                <div className="flex justify-between mt-2 2xl:mt-30 xl:mt-12">
                    <div>
                        <p className="text-sm md:text-sm  font-bold  text-neutral-500">December 15 2023</p>
                    </div>
                    <div>
                        <Link to="/blogseemore" className="text-sm md:text-sm  text-blue-900 font-bold" href="">Read Full</Link>
                    </div>
                </div>
            </div>
        </div> 
        
        <div className="flex">
            <div className="w-2/5 border-2 border-solid">
                <img className="h-full" src={blog2img}  alt="" />
            </div>
            <div className="w-3/5 border-2 border-solid p-5 ">
                <h1 className="text-sm 2xl:text-2xl xl:text-lg font-bold">Paws For A Moment:Art for a good cause</h1>
                <p className="text-sm 2xl:text-lg  xl:text-md mt-2 xl:mt-10 text-neutral-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eius labore quae id excepturi, optio voluptate ex quas sint nisi!</p>
               
               
                <div className="flex justify-between mt-2 2xl:mt-30 xl:mt-12">
                    <div>
                        <p className="text-sm md:text-sm  font-bold  text-neutral-500">December 15 2023</p>
                    </div>
                    <div>
                        <Link to="/blogseemore" className="text-sm md:text-sm  text-blue-900 font-bold" href="">Read Full</Link>
                    </div>
                </div>
            </div>
        </div> 





        <div className="flex">
            <div className="w-2/5 border-2 border-solid">
                <img className="h-full" src={blog3img}  alt="" />
            </div>
            <div className="w-3/5 border-2 border-solid p-5 ">
                <h1 className="text-sm 2xl:text-2xl xl:text-lg font-bold">Paws For A Moment:Art for a good cause</h1>
                <p className="text-sm 2xl:text-lg  xl:text-md mt-2 xl:mt-10 text-neutral-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eius labore quae id excepturi, optio voluptate ex quas sint nisi!</p>
               
               
                <div className="flex justify-between mt-2 2xl:mt-30 xl:mt-12">
                    <div>
                        <p className="text-sm md:text-sm  font-bold  text-neutral-500">December 15 2023</p>
                    </div>
                    <div>
                        <Link to="/blogseemore" className="text-sm md:text-sm  text-blue-900 font-bold" href="">Read Full</Link>
                    </div>
                </div>
            </div>
        </div> 





        <div className="flex">
            <div className="w-2/5 border-2 border-solid">
                <img className="h-full" src={blog4img}  alt="" />
            </div>
            <div className="w-3/5 border-2 border-solid p-5 ">
                <h1 className="text-sm 2xl:text-2xl xl:text-lg font-bold">Paws For A Moment:Art for a good cause</h1>
                <p className="text-sm 2xl:text-lg  xl:text-md mt-2 xl:mt-10 text-neutral-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eius labore quae id excepturi, optio voluptate ex quas sint nisi!</p>
               
               
                <div className="flex justify-between mt-2 2xl:mt-30 xl:mt-12">
                    <div>
                        <p className="text-sm md:text-sm  font-bold  text-neutral-500">December 15 2023</p>
                    </div>
                    <div>
                        <Link to="/blogseemore" className="text-sm md:text-sm  text-blue-900 font-bold" href="">Read Full</Link>
                    </div>
                </div>
            </div>
        </div> 
</div>
</div>

)
}
export default BlogAllpost