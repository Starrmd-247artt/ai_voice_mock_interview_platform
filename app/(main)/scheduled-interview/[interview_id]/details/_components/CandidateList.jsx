/*import { Button } from '@/components/ui/button'
import moment from 'moment/moment'
import React from 'react'
import CandidateFeedbackDialog from './CandidateFeedbackDialog'

function CandidateList({ candidateList = [] }) {
  return (
    <div>
       <h2 className='font-bold my-5 text-lg'>Candidates ({candidateList?.length})</h2>
       {candidateList.map((candidate,index)=>(
         <div  key={index} className='p-5 flex gap-3 items-center justify-between bg-black rounded-lg'>
            <div  className='flex items-center gap-5 '>
              <h2 className='bg-primary p-3 px-4 font-bold text-white rounded-full'>{candidate.userName[0]}</h2>
              <div>
                <h2 className='font-bold'>{candidate?.userName}</h2>
                <h2 className='text-sm text-gray-500'>Completed On: { moment (candidate?.created_at).format('MMM DD,YYYY') }</h2>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
                <h2 className='text-green-600 text-sm'>{candidate?.feedback?.rating?.totalRating}/10</h2>
              
                  <CandidateFeedbackDialog candidate={candidate}/>
                     
            </div>
         </div>
       ))}
      
    </div>
  )
}

export default CandidateList*/

import moment from 'moment/moment'
import React from 'react'
import CandidateFeedbackDialog from './CandidateFeedbackDialog'

function CandidateList({ candidateList = [] }) {
  return (
    <div>
      <h2 className='font-bold my-5 text-lg'>
        Candidates ({candidateList?.length})
      </h2>

      {candidateList?.map((candidate, index) => {

        // ✅ Parse feedback
        let parsedFeedback = null;

        try {
          parsedFeedback = JSON.parse(candidate?.feedback);
        } catch (error) {
          console.log("Parsing error:", error);
        }

        const rating = parsedFeedback?.feedback?.rating;

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
          <div
            key={index}
            className='p-5 flex gap-3 items-center justify-between bg-black rounded-lg'
          >
            <div className='flex items-center gap-5'>
              <h2 className='bg-primary p-3 px-4 font-bold text-white rounded-full'>
                {candidate?.userName?.[0]}
              </h2>

              <div>
                <h2 className='font-bold'>{candidate?.userName}</h2>
                <h2 className='text-sm text-gray-500'>
                  Completed On: {moment(candidate?.created_at).format('MMM DD, YYYY')}
                </h2>
              </div>
            </div>

            <div className='flex gap-3 items-center'>
              {/* ✅ Average Rating */}
              <h2 className='text-green-600 text-sm'>
                {avg}/10
              </h2>

              <CandidateFeedbackDialog candidate={candidate} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CandidateList