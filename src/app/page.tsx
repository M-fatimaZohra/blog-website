//port Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { Merriweather } from "next/font/google";
import { client } from "@/sanity/lib/client";

import { Button } from "@/components/ui/button";
import Link from "next/link"


const merriweather = Merriweather({
  weight: "400",
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ['latin'],
});
interface Blog {
  _id: string,
  title: string,
  description:string
}
async function getBlog() {

  const Fetch = await client.fetch(`*[_type == 'blog']{ _id, title,description } `)


  return Fetch
}

getBlog()
export default async function Home() {

  const blogData =await getBlog()



  console.log(blogData)
  return (
    <div className="py-20 flex flex-col justify-between items-center ">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className='lg:text-[125px] text-[80px] animate-[pulse_5s_ease-in-out_1] duration-500'style={bebasNeue.style}>Dewll Days</h1>
        <p style={merriweather.style} className="lg:text-[18px] text-[16px]">Get to see blogs that match your taste</p>
      </div>
      <div className="grid grid-cols-1   xl:grid-cols-3  md:grid-cols-2 h-auto gap-4 py-10 px-8 sm:px-20 md:px-5 lg:px-5">
        {blogData.slice(0,3).map((blog:Blog, index:number)=>{
         return (
          <div key={index} className="flex hover:animate-[pulse_500ms_ease-in-out_1]  justify-center flex-col translate-y-1 hover:-translate-y-3  ease-in duration-200 items-center gap-4 border-solid border-2 bg-[#dce3fa] text-gray-800 border-black rounded-lg w-auto  h-auto py-2  px-1 drop-shadow-[4px_2px_0px_rgba(0,0,0,0.25)]" >
          <h1 className="lg:text-2xl text-[25px] font-bold">{blog.title}</h1>
          <p className="lg:w-[400px]  text-[18px] line-clamp-[7] px-2  ">{blog.description}</p>
          <Button variant="outline" size="sm" className="border-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)] active:translate-y-[2px] active:drop-shadow-none " ><Link href={`/Blog/${blog._id}`}>View</Link></Button>
          </div>
         )
           
        }) }
       
      </div>
      <div>
    <Link href="/Blog">
     <Button variant="outline" size="default" className="border-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)] active:translate-y-[2px] active:drop-shadow-none ">View More...</Button>
    </Link>
    </div>
    </div>
  );
}
