import React, { useEffect, useState } from "react";
import blog4img from "../assets/ui/CARA_PICTURES/blog4img.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function BlogSeemore() {
    const { id } = useParams()
    const [blog, setBlog] = useState([])

    useEffect(() => {
        const getBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/blogs/${id}`)
                setBlog(res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getBlog()
    }, [])

  return (
    <div className="">
        {blog.map(b => (
            <div>
                <div className="flex justify-between mt-[70px] px-16 md:px-[50px] lg:px-[150px] xl:px-[400px] ">
                <div>
                <p className="text-sm md:text-md lg:text-lg font-bold  text-neutral-500">
                    {b.datecreated}
                </p>
                </div>
                <div>
                <Link
                    to="/blogs"
                    className="text-sm md:text-md lg:text-lg text-blue-900 font-bold"
                    href=""
                >
                    See All blogs
                </Link>
                </div>
                        </div>
                
                        <div className="mt-[40px] px-16 md:px-[50px] lg:px-[150px] xl:px-[400px]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                {b.title}
                </h1>
                <p className="">Category/Author</p>
                <div className="h-[280px] mb-[50px] mt-8">
                <img className=" w-full h-[100%]" src={`http://localhost:8000/uploads/${b.photo}`} alt="" />
                </div>
                <div className="text-md md:text-md lg:text-lg mb-8">
                <p>{b.description}</p>
                <br />
                </div>
                </div>
            </div>
        ))}
    </div>
  );
}
export default BlogSeemore;
