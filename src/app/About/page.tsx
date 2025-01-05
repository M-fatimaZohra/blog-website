import React from "react";
//import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link"

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

function page() {
  return (
    <div className="flex flex-col justify-between items-center py-20 lg:px-0 px-[10px] sm:px-10 w-full gap-10">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className='lg:text-[125px] text-[80px] animate-[pulse_5s_ease-in-out_1] duration-500'style={bebasNeue.style}>Dwell Days</h1>
        <p style={merriweather.style} className="lg:text-[18px] text-[16px]">Get to see blogs that match your taste</p>
      </div>
      <div className="flex justify-center items-start px-4 py-20 w-auto sm:w-auto lg:w-[1000px] gap-5  flex-col bg-white  border-black border-[2px] border-solid shadow-[8px_8px_0px_rgba(0,0,0,0.25)]">
        <div className="flex justify-center items-start flex-col w-full gap-3 ">
          <h2 className="md:text-2xl text-lg" style={bebasNeue.style}>
            What Makes Dwell Days Special?
          </h2>
          <p style={merriweather.style} className="text-[16px] w-[200px] sm:w-auto">
            At Dwell Days, we believe that every reader is unique. That’s why
            we’ve curated a space where you can dwell in topics that resonate
            with your personality, hobbies, and preferences. From tech
            enthusiasts and creative writers to foodies and travelers, there’s
            something here for everyone.
          </p>
        </div>

        <div className="flex justify-center items-start flex-col w-full gap-3">
          <h2 className="md:text-2xl text-lg" style={bebasNeue.style}>
            Personalized Reading Experience
          </h2>
          <p style={merriweather.style} className="text-[16px] w-[200px] sm:w-auto">
            We understand the value of your time, and we aim to make every
            second spent on Dwell Days worthwhile. Our content is designed to
            align with your tastes—whether you’re into the latest tech trends,
            lifestyle hacks, or thought-provoking essays.
          </p>
        </div>

        <div className="flex justify-center items-start flex-col w-full gap-3">
          <h2 className="md:text-2xl text-lg" style={bebasNeue.style}>
            A Diverse World of Blogs
          </h2>
          <p style={merriweather.style} className="text-[16px] w-[200px] sm:w-auto">
            Our platform is a melting pot of ideas and stories. Explore:
          </p>
          <ul style={merriweather.style} className="text-[16px] w-[200px] sm:w-auto ">
            <li>
              <strong>Tech Talk:</strong> The latest in gadgets, apps, and
              innovations.
            </li>
            <li>
              <strong>Lifestyle & Wellness:</strong> Tips for a balanced,
              fulfilling life.
            </li>
            <li>
              <strong>Food Adventures:</strong> Recipes, restaurant reviews, and
              foodie tales.
            </li>
            <li>
              <strong>Travel Diaries:</strong> Inspiring stories from around the
              globe.
            </li>
            <li>
              <strong>Creative Corner:</strong> Poetry, short stories, and
              artistic musings.
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-start flex-col w-full gap-3">
          <h2 className="md:text-2xl text-lg" style={bebasNeue.style}>
            Why &quot;Dwell&quot;?
          </h2>
          <p style={merriweather.style} className="text-[16px] w-[200px] sm:w-auto">
            The name “Dwell” is inspired by the serene feeling of dwelling in a
            place that feels just right. It symbolizes comfort, exploration, and
            the joy of discovering something you genuinely connect with.
          </p>
        </div>

        <div className="flex justify-center items-start flex-col w-full gap-3">
          <h2 className="md:text-2xl text-lg" style={bebasNeue.style}>
            Join the Dwell Days Community
          </h2>
          <p style={merriweather.style} className="text-[16px] w-[200px] sm:w-auto">
            Ready to dive into content that feels like it was made just for you?
            Start your journey with Dwell Days and uncover blogs that speak to
            your soul.
          </p>
        
        </div>
        <Link href="/Blog" className="w-full flex flex-col justify-center items-center">
     <Button variant="outline" size="default" className="border-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)] active:translate-y-[2px] active:drop-shadow-none w-[200px] sm:w-auto text-[12px] sm:text-[16px] ">Let’s make every day a Dwell Day!</Button>
    </Link>
      </div>
    </div>
  );
}

export default page;
