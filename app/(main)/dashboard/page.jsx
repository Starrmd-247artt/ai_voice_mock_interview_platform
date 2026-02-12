import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import CreateOptions from './_components/CreateOptions'
import LatestInterviewsList from './_components/LatestInterviewsList'

function Dashboard() {
  return (
    <div>
      {/*<WelcomeContainer />*/}
      <h2 className='my-3 font-bold text-2xl pl-10'>Dashboard</h2>
      <CreateOptions/>
      <LatestInterviewsList/>
    </div>
  )
}

export default Dashboard

/**"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { useRouter } from "next/navigation";
import WelcomeContainer from "./_components/WelcomeContainer";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/auth"); // not logged in → back to login
      } else {
        setUser(session.user);
      }
    };

    getUser();
  }, [router]);

  if (!user) return <p className="p-10">Loading dashboard...</p>;

  return (
    <div className="p-10">
      <WelcomeContainer user={user} />

      <h2 className="text-2xl font-bold mt-6">Dashboard</h2>
      {/* Add your dashboard components here 
    </div>
  );
}**/
