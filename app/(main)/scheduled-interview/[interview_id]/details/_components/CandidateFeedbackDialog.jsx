/*
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
function CandidateFeedbackDialog({ candidate }) {
  
  const feedback = candidate?.feedback;
  //const rating = candidate?.feedback?.rating;
  const rating = candidate?.feedback?.rating;
  const summary = candidate?.feedback?.summary;
return (
 <Dialog>
  <DialogTrigger asChild>
    <Button variant='outline' className='text-primary'>View Report</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>FeedBack</DialogTitle>
      <DialogDescription asChild>
        <div>
          <div className='flex justify-between items-center mt-5'>
            <div  className='flex items-center gap-5 '>
              <h2 bg-primary className='bg-primary p-3 px-4 font-bold text-white rounded-full'>{candidate.userName[0]}</h2>
                <div>
                  <h2 className='font-bold'>{candidate?.userName}</h2>
                  <h2 className='text-sm text-gray-500'>{candidate?.userEmail}</h2>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <h2 className='text-primary text-xl font-bold'>6/10</h2>       
            </div>
          </div> 
          <div className='mt-5'>
              <h2 className='font-bold text-lg'>Skills Assesment</h2>
              <div className='mt-3 grid grid-cols-2 gap-10'>
                <div>
                  <h2 className='flex justify-between text-sm'>Technical Skills <span className='text-sm'>{rating?.technicalSkills}/10</span></h2>
                  <Progress value={(rating?.technicalSkills ?? 0) * 10} className='mt-1'/>
                </div>
                <div>
                  <h2 className='flex justify-between text-sm'>Communication<span className='text-sm'>{rating?.communication}/10</span></h2>
                  <Progress value={(rating?.communication ?? 0)* 10} className='mt-1'/>
                </div>
                <div>
                  <h2 className='flex justify-between text-sm'>Problem Solving<span className='text-sm'>{rating?.problemSolving}/10</span></h2>
                  <Progress value={(rating?.problemSolving ?? 0)* 10} className='mt-1'/>
                </div>
                <div>
                  <h2 className='flex justify-between text-sm'>Experience<span className='text-sm'>{rating?.experience}/10</span></h2>
                  <Progress value={(rating?.experience ?? 0) * 10} className='mt-1'/>
                </div>
              </div>
          </div>
          <div className='mt-5'></div>    
          <div className='mt-5'>
            <h2 className='font-bold text-lg'>Performance Summary </h2>
                <div className='p-5 bg-secondary my-3 rounded-mg'>
                  {feedback?.summary?.map((item, index) => (
                  <p key={index}>{item}</p>
                  ))}
                </div>

          </div>       
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default CandidateFeedbackDialog*/

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

function CandidateFeedbackDialog({ candidate }) {

  // ✅ Parse feedback
  let parsedFeedback = null;

  try {
    parsedFeedback = JSON.parse(candidate?.feedback);
  } catch (error) {
    console.log("Parsing error:", error);
  }

  const feedback = parsedFeedback?.feedback; // ✅ ADD THIS
  const rating = feedback?.rating;
  const summary = feedback?.summary;

  // ✅ Calculate average
  const avg =
    rating
      ? (
          (
            (rating?.technicalSkills ?? 0) +
            (rating?.communication ?? 0) +
            (rating?.problemSolving ?? 0) +
            (rating?.experince ?? 0)
          ) / 4
        ).toFixed(1)
      : 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='text-primary'>View Report</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>FeedBack</DialogTitle>

          <DialogDescription asChild>
            <div>

              {/* Header */}
              <div className='flex justify-between items-center mt-5'>
                <div className='flex items-center gap-5'>
                  <h2 className='bg-primary p-3 px-4 font-bold text-white rounded-full'>
                    {candidate?.userName?.[0]}
                  </h2>

                  <div>
                    <h2 className='font-bold'>{candidate?.userName}</h2>
                    <h2 className='text-sm text-gray-500'>{candidate?.userEmail}</h2>
                  </div>
                </div>

                {/* Average */}
                <h2 className='text-primary text-xl font-bold'>
                  {avg}/10
                </h2>
              </div>

              {/* Skills */}
              <div className='mt-5'>
                <h2 className='font-bold text-lg'>Skills Assessment</h2>

                <div className='mt-3 grid grid-cols-2 gap-10'>

                  <div>
                    <h2 className='flex justify-between text-sm'>
                      Technical Skills
                      <span>{rating?.technicalSkills ?? 0}/10</span>
                    </h2>
                    <Progress value={(rating?.technicalSkills ?? 0) * 10} />
                  </div>

                  <div>
                    <h2 className='flex justify-between text-sm'>
                      Communication
                      <span>{rating?.communication ?? 0}/10</span>
                    </h2>
                    <Progress value={(rating?.communication ?? 0) * 10} />
                  </div>

                  <div>
                    <h2 className='flex justify-between text-sm'>
                      Problem Solving
                      <span>{rating?.problemSolving ?? 0}/10</span>
                    </h2>
                    <Progress value={(rating?.problemSolving ?? 0) * 10} />
                  </div>

                  <div>
                    <h2 className='flex justify-between text-sm'>
                      Experience
                      <span>{rating?.experince ?? 0}/10</span>
                    </h2>
                    <Progress value={(rating?.experince ?? 0) * 10} />
                  </div>

                </div>
              </div>

              {/* Summary */}
              <div className='mt-5'>
                <h2 className='font-bold text-lg'>Performance Summary</h2>
                <div className='p-5 bg-secondary my-3 rounded-md'>
                  <p className="text-sm">
                    {summary ?? "No summary available"}
                  </p>
                </div>
              </div>

              {/* ✅ Recommendation Section */}
              <div className={`p-5 mt-10 flex items-center justify-between rounded-md 
                ${feedback?.Recommendation === 'Not Recommended' ? 'bg-red-100' : 'bg-green-100'}`}>

                <div>
                  <h2 className={`font-bold text-lg 
                    ${feedback?.Recommendation === 'Not Recommended' ? 'text-red-700' : 'text-green-700'}`}>
                    Recommendation: {feedback?.Recommendation}
                    
                  </h2>

                  <p className={`${feedback?.Recommendation === 'Not Recommended' ? 'text-red-500' : 'text-green-500'}`}>
                    {feedback?.RecommendationMsg}
                  </p>
                </div>

                <Button className={`${feedback?.Recommendation === 'Not Recommended' ? 'bg-red-700' : 'bg-green-700'}`}>
                  Send Msg
                </Button>
              </div>

            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CandidateFeedbackDialog