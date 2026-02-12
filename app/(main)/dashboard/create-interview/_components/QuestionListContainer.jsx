import React from 'react'

function QuestionListContainer({questionList}) {
  return (
    <div>
        <h2 className='font-bold text-lg mb-5'>Generated Interview Questions:</h2>
            <div className='p-5 border border-gray-300 rounded-xl'>
                {questionList.map((item,index)=>(
                    <div key={index} className='p-3 m-3 border border-gray-200 rounded-xl'>
                        <p className='font-bold'>{item.question}</p>
                        <p className='text-small text-primary'>Type: {item?.type}</p>
                    </div>    
                ))}
            </div> 
    </div>
  )
}

export default QuestionListContainer