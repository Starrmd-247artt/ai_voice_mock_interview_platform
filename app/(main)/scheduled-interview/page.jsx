"use client"
import { useUser } from '@/app/provider';
import { Button } from '@/components/ui/button';
import { supabase } from '@/services/supabaseClient'
import React, { useEffect, useState } from 'react'
import InterviewCard from '../dashboard/_components/InterviewCard';
import { Video } from 'lucide-react';
import moment from 'moment/moment';

function ScheduledInterview() {
    const { user } = useUser();
    const [ interviewList,setInterviewList]=useState([]);   
    useEffect(()=>{
       user&&GetInterviewList();
    },[user])

    const GetInterviewList=async()=>{
        const result = await supabase
          .from('Interviews')
          .select('jobPosition,duration,interview_id,interview-feedback(userEmail)')
          .eq('userEmail',user?.email)
          .order('id',{ascending:false})
          ;
        console.log(result);
        setInterviewList(result.data);
    }
  return (
    <div className='min-h-screen w-full max-w-none px-4 py-5'>
       <h2 className='font-bold text-xl'>Interview List with Candidate Feedback</h2>
       {interviewList?.length == 0 &&
          <div className='p-5 flex flex-col gap-3 items-center mt-5'>
              <Video className='h-10 w-10 text-primary'/>
              <h2>You dont't have any interview created!</h2>
              <Button>+ Create New Interview</Button>
          </div>}
        {interviewList &&
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 mt-5 w-full px-10 overflow-hidden'>
              {interviewList.map((interview,index)=>(
                <InterviewCard interview={interview} key={index}
                viewDetail = {true} />
              ))}
            </div>
          }          
    </div>
  )
}

export default ScheduledInterview