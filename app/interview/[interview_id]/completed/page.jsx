"use client"
import React from 'react'
import Image from "next/image";
import { CheckCircle, Timer } from "lucide-react";

function InterviewComplete() {
  return (
    <div>
       <div className="flex flex-col items-center text-center">
       
         <Image src={'/circle.png'} alt='circle'
                   width={200}
                   height={200}
                   className='w-[50px] h-[50px]'
                 />
    

        {/* 🔹 Title */}
        <h2 className="text-3xl font-bold mt-4">
          Interview Complete!
        </h2>

        {/* 🔹 Subtitle */}
        <p className="text-gray-500 mt-2 max-w-md">
          Thank you for participating in the AI-driven interview with AIcruiter
        </p>
      </div>

      {/* 🔹 Illustration Card */}
      <div className=" flex justify-center items-center mt-5 bg-bkack w-full shadow-md rounded-xl p-4">
        <Image
          src="/interview.jpg" // 👉 put your image in public folder
          alt="Interview Illustration"
          width={500}
          height={250}
          className="rounded-lg object-cover"
        />
      </div>

      {/* 🔹 What's Next Section */}
      <div className="mt-5 text-center">
        <h3 className="text-xl font-semibold">What’s Next?</h3>
        <p className="text-gray-500 text-center mt-1 max-w-md mx-auto">
          The recruiter will review your interview responses and will contact you
          soon regarding the next steps.
        </p>
        <p className="text-gray-500 text-center mt-5"><Timer className='w-[10px] h-[10px]'> Response within 2-3 business days </Timer></p>
      </div>
 
    </div>
  )
}

export default InterviewComplete