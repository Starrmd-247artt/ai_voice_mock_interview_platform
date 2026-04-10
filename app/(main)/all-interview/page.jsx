"use client"
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { supabase } from '@/services/supabaseClient';
import { useUser } from '@/app/provider';
import InterviewCard from '../dashboard/_components/InterviewCard';
import { toast } from 'sonner';

function AllInterview() {
  const [interviewList,setInterviewList]=useState([]);
    const {user}=useUser();
    
    useEffect(()=>{
       user&&GetInterviewList();
    },[user])
    const GetInterviewList = async() => {
      
      let { data: Interviews, error } = await supabase
        .from('Interviews')
        .select('*')
        .eq('userEmail',user?.email)
        .order('id',{ascending:false})
        ;
  
      console.log(Interviews);  
      setInterviewList(Interviews);  
    }
    
    return (
      <div className='min-h-screen w-full px-6 py-5 box-border'>
          <h2 className="font-bold pl-7 text-2xl ml-2 ">All Previously Created Interviews</h2>
          {interviewList?.length == 0 &&
          <div className='p-5 flex flex-col gap-3 items-center mt-5'>
              <Video className='h-10 w-10 text-primary'/>
              <h2>You dont't have any interview created!</h2>
              <Button>+Create New Interview</Button>
          </div>}
          {interviewList&&
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full'>
              {interviewList.map((interview,index)=>(
                <InterviewCard interview={interview} key={index}/>
              ))}
            </div>
          }                                                      
      </div>
    )
}

export default AllInterview