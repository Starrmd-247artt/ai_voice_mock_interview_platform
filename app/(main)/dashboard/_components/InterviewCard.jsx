
import { Button } from '@/components/ui/button'
import { ArrowRight, Copy, Send } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

function InterviewCard({ interview, viewDetail=false }) {
  const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview?.interview_id;

  const copyLink=()=>{
      navigator.clipboard.writeText(url);
      toast('Copied')
    } 

  const onSend = () => {
     window.location.href="mailto:accounts@powercorp.com?subject=AICruiter Interview Link & body=Interview Link:"+url
  }

  return (
    <div className='p-5 bg-black rounded-lg border overflow-hidden'>
        <div className='flex items-center justify-between'>
            <div className='h-[30px] w-[30px] bg-primary rounded-full'></div>
            <h2 className='text-sm whitespace-nowrap'>{moment(interview?.created_at).format('DD MMM yyy')}</h2>
        </div>
        <h2 className='mt-3 font-bold text-sm truncate'>{interview?.jobPosition}</h2>
        <h2 className='mt-2 text-sm flex justify-between text-gray-500 gap-2 min-w-0'>{interview?.duration}
            <span className='text-green-700 whitespace-nowrap'> {interview['interview-feedback']?.length} Candidates</span> 
        </h2>
        {!viewDetail?<div className='flex gap-5 w-full mt-5'>
         <Button variant='outline' className={'w-full'} onClick={copyLink}><Copy />Copy Link</Button>
          <Button className='' onClick={onSend}><Send />Send</Button>  
        </div>
        :
        <Link href={`/scheduled-interview/${interview?.interview_id}/details`}>
          <Button className='mt-5 w-full' variant='outline'>View Details <ArrowRight/> </Button>
        </Link>
       }
    </div>
  )
}

export default InterviewCard