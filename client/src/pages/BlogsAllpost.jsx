import React, { useEffect, useState } from "react";
import blog1img from "../assets/ui/CARA_PICTURES/blog4img.png";
import blog4img from "../assets/ui/CARA_PICTURES/blog1img.png";
import blog2img from "../assets/ui/CARA_PICTURES/blog2img.png";
import blog3img from "../assets/ui/CARA_PICTURES/blog3img.png";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogAllpost() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get('http://localhost:8000/blogs')
                setBlogs(res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()
    }, [])

  return (
    <div className=" bg-neutral-100 shadow-l">
      <div className=" px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
        <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold xl:text-4xl text-rose-600 pt-6">
          {" "}
          CARA BLOGS
        </h1>
      </div>
      <div className=" mt-[30px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
        <div>
          <p className="text-sm md:text-md lg:text-lg font-bold  text-neutral-500">
            All Post
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[20px] px-16 md:px-[50px] lg:px-[100px] xl:px-[200px]  mx-auto gap-2">
        {blogs.map(blog => (
            <div className="flex">
            <div className="w-2/5 h-[200px] border-2 border-solid">
                <img className="h-full" src={`http://localhost:8000/uploads/${blog.photo}`} alt="" />
            </div>
            <div className="w-3/5 border-2 border-solid h-[200px]">
                <h1 className="text-sm 2xl:text-2xl xl:text-lg font-bold">
                {blog.title}
                </h1>
                <p className="text-sm 2xl:text-lg xl:text-md mt-2 text-neutral-700 overflow-clip">
                    {blog.description.split(' ').slice(0, 25).join(' ')}
                    {blog.description.split(' ').length > 25 ? '...' : ''}
                </p>

                <div className="flex justify-right mt-6">
                <div className="m-auto">
                    <Link
                    to={`/blog-seemore/${blog.id}`}
                    className="text-sm md:text-sm bg-rose-600 p-2 text-white rounded-full font-bold"
                    href=""
                    >
                    Read Full
                    </Link>
                </div>
                </div>
            </div>
            </div>
        ))}

      </div>
    </div>
  );
}
export default BlogAllpost;
