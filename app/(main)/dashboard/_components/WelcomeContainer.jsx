"use client"
import React from 'react'
import { useUser } from '@/app/provider'
import Image from "next/image";

function WelcomeContainer() {
  const { user } = useUser();

  // ✅ ADD THIS HERE (EXACT SPOT)
  if (!user) {
    return <p className="text-white">Loading...</p>;
  }

  const name = user?.user_metadata?.full_name || "User";
  const avatar =
  user?.picture ||
  user?.user_metadata?.avatar_url ||
  user?.user_metadata?.picture ||
  null;

  const firstLetter = name.charAt(0).toUpperCase();

  console.log("User object:", user);

  return (
    <div className='bg-black ml-10 mt-5 pl-5 rounded-xl flex justify-between items-center'>
      <div>
        <h2 className='text-white'>Welcome Back, {user.name}</h2>
        <h2 className='text-sm font-bold'>
          AI-Driven Interviews, PowerCorpTech Hiring
        </h2>
      </div>

      <div>
        {avatar ? (
          <Image
          src={avatar}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
          />
       ) : (
        <div className="w-[40px] h-[40px] rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
          {firstLetter}
        </div>
)}

      </div>
    </div>
  );
}

export default WelcomeContainer;
