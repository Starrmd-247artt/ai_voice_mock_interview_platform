"use client"
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { Clock, Info, Loader2Icon, Video, } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/services/supabaseClient'
import { useState } from 'react'
import { toast } from 'sonner'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import QuestionList from '@/app/(main)/dashboard/create-interview/_components/QuestionList'

function Interviews() {

  const {interview_id}=useParams();
  console.log(interview_id)
  const [interviewData,setInterviewData]=useState();
  const [userName,setUserName]=useState();
  const [userEmail,setUserEmail] = useState();
  const [loading,setLoading]=useState(false);
  const {interviewInfo,setInterviewInfo}=useContext(InterviewDataContext);
  const router=useRouter();

  useEffect(()=>{
    interview_id&&GetInterviewDetails();

  },[interview_id])

  const GetInterviewDetails = async()=>{
    setLoading(true);
    try{
    let { data: Interviews, error } = await supabase
      .from('Interviews')
      .select("jobPosition,jobDescription,duration,type ")
      .eq('interview_id',interview_id)
    setInterviewData(Interviews[0]);
    setLoading(false);
    if(Interviews?.length==0)
      {
        toast('Incorrect Interview Link')
        return ;
      }
   
    }
    catch(e)
    {
      setLoading(false);
    }
    console.log(Interviews);


  }
  const onJoinInterview = async()=>{ 
    setLoading(true);
  let { data: Interviews, error } = await supabase
    .from('Interviews')
    .select('*') 
    .eq('interview_id',interview_id);

  console.log(Interviews[0]); 
  setInterviewInfo({
    userName:userName,
    userEmail:userEmail,
    interviewData:Interviews[0]

  });
  router.push('/interview/'+interview_id+'/start')
  setLoading(false);

  }
  return (
    <div className='flex flex-col px-10 md:px-28 lg:px-48 xl:px-64 mt-7'>
        <div className='flex flex-col items-center justify-center gap-3 mb-2 border rounded-lg bg-black p-7 lg:px-40 xl:px-52 mb-20'>
          <div className='flex items-center gap-3'>
              <Image src={'/logo.svg'} alt='logo' width={100} height={100}
              className='w-[40px]'/>
              <h2 className='text-primary-500'>VoxHire</h2>
          </div>

           <h2 className='text-lg mt-3'>AI-Powered Interview Platform</h2>
           <Image src={'/robot.png'} alt='robot' width={500} height={500}
           className='w-[250px] my-6'/>
           <h2 className='font-bold text-xl'>{interviewData?.jobPosition}</h2>
           <p className='flex gap-2 items-center text-xl-gray-500 mt-3'><Clock className='h-4 w-4'/>{interviewData?.duration}</p>

           <div className='w-full'>
            <h2 className='text-xl mb-3'>Enter your full name</h2>
            <Input placeholder='e.g Suife Maria' onChange={(event)=>setUserName(event.target.value)}/>
           </div>

           <div className='w-full'>
            <h2 className='text-xl mb-3'>Enter your email</h2>
            <Input placeholder='e.g smaria@gmail.com' onChange={(event)=>setUserEmail(event.target.value)}/>
           </div>
           
           <div className='p-3 mt-3 flex gap-4 border rounded-xl'>
              <Info className='text-primary'/>
              <div>
                   <h2 className='text-sm font-bold'>Before you begin</h2>
                   <ul className='py-3'>
                     <li className='text-sm text-primary py-2'>Ensure you have a stable internet connection</li>
                     <li className='text-sm text-primary py-2'>Test your camera and microphone</li>
                     <li className='text-sm text-primary py-2'>Find a quiet place for interview</li>
                   </ul>
               </div>
           </div>

           <Button className={'mt-5 w-full font-bold'} 
           disabled={loading || !userName} 
           onClick={()=>onJoinInterview()}> 
           <Video/> {loading&&<Loader2Icon/>}Join Interview</Button>
        </div>
    </div>
  )
}

export default Interviews