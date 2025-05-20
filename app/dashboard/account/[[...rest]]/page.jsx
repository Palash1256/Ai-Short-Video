import React from 'react'
import { UserProfile } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex justify-center items-center m-12'  >
      
        <UserProfile
            routing="hash"
            appearance={{
            elements: {
            cardBox: 'lg:max-h-[399px]'
            },
        }}
        />

    </div>
  )
}

export default page
