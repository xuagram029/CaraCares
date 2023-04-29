import React from "react";
import blog4img from '../assets/ui/CARA_PICTURES/blog4img.png'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";
function BlogSeemore(){
return(
   
<div className="">
<Navbar/>
<div className="flex justify-between mt-[70px] px-16 md:px-[50px] lg:px-[150px] xl:px-[400px] ">
    <div>
        <p className="text-sm md:text-md lg:text-lg font-bold  text-neutral-500">December 15 2023</p>
    </div>
    <div>
        <Link to="/blogallpost" className="text-sm md:text-md lg:text-lg text-blue-900 font-bold" href="">See All blogs</Link>
    </div>
</div>

<div className="mt-[40px] px-16 md:px-[50px] lg:px-[150px] xl:px-[400px]">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Paws For A Moment: Art for a good cause</h1>
    <p className="">Category/Author</p>
    <div className="h-[280px] mb-[50px] mt-8">
         <img className=" w-full h-[100%]" src={blog4img} alt="" />
    </div>
    <div className="text-md md:text-md lg:text-lg mb-8">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quas perspiciatis. In consequatur a aut quo dolore quod iure doloremque dolor ex. Assumenda minima, nobis illo inventore provident laudantium vero?</p>
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis explicabo eos, quas vitae id rem quidem recusandae neque eaque ea corporis ducimus, molestiae hic exercitationem optio laborum quae commodi?</p> 
    </div>
    
    
</div>
</div>

)
}
export default BlogSeemore