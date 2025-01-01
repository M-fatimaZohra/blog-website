import React from 'react'
import { Bebas_Neue } from "next/font/google";
import { Merriweather } from "next/font/google";
import { client } from "@/sanity/lib/client";

import { Button } from "@/components/ui/button";

import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";

const merriweather = Merriweather({
    weight: ["400","700"],
    subsets: ['latin'],
  });


  interface Blog {
    _id: string,
    title: string,
    description:string
  } 

  const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin'],
  });

  async function getBlog() {

    const Fetch = await client.fetch(`*[_type == 'blog']{ _id, title,description } `)
    return Fetch
  }
  getBlog()

async function Blog() {
    const blogData =await getBlog()

   
  return (
    <div className="  ">
    <div className="flex justify-center items-center px-4 flex-col w-full bg-slate-300 ">     
      <h1 className='text-[60px] drop-shadow-[4px_2px_0px_rgba(0,0,0,0.9)] text-white'style={bebasNeue.style}>Dwell Days</h1>
      <p style={merriweather.style} className='text-[16px] text-center md:text-[20px] drop-shadow-[3px_1px_0px_rgba(0,0,0,0.9)] text-white'>Get to see blogs that match your taste</p>
    </div>
    <div className="flex flex-col gap-4 py-20 px-5">
      {blogData.map((blog:Blog, index:number)=>{
       return (
        <div key={index} className="flex justify-center flex-col items-start gap-4 border-solid border-2 bg-[#dce3fa] text-gray-800  border-black rounded-lg  py-2 px-3 drop-shadow-[4px_2px_0px_rgba(0,0,0,0.25)]" >
        <h1 className="text-xl underline font-bold" style={merriweather.style}>{blog.title}</h1>
        <hr/>
        <div className='flex justify-between flex-row items-center w-full '>
            <div>
            <p className="text-[16px] md:text-[18px] line-clamp-3  ">{blog.description}</p>
            </div>
        
        <Button variant="outline" size="sm" className="border-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]  text-gray-800 active:translate-y-[2px] active:drop-shadow-none "  ><Link href={`/Blog/${blog._id}`}>View</Link>
        </Button>
        
        </div>
         </div>
       )
         
      }) }
     
    </div>
    <div className='w-full py-[20px] flex justify-center items-center'>
    <Button variant="outline" size="lg2" className=" border-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]  text-gray-800 active:translate-y-[2px] active:drop-shadow-none "  ><Link href="./" className='flex justify-between items-center w-full md:px-8 px-4' ><FaArrowLeft /> Go Back</Link>
     </Button>
     </div>
  </div>
  )
}

export default Blog
