import Image from 'next/image'
import React from 'react'

function InterviewHeader() {
  return (
    <div className='flex items-center gap-3 mb-2 p-4 sdadow-sm'>
      <Image src={'/logo.svg'} alt='logo' width={100} height={100}
      className='w-[50px]'/>
      <h2 className='text-primary-500'>VoxHire</h2>
    </div>
  )
}

export default InterviewHeader