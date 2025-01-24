<<<<<<< HEAD
"use client"
import { UserButton } from '@clerk/nextjs'
import React, { useState } from 'react';
import EmptyState from './_components/EmptyState';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
//import { useState} from 'react';
=======
import { UserButton } from '@clerk/nextjs'
import React from 'react'
>>>>>>> 9b5cc69a6493f79f6b40007349144e6d30c96fd7

function Dashboard() {
  const [videoList,setVideoList]=useState([]);
  return (
    <div>
      <div className='flex justify-between item-center'>
        <h2 className='font-bold text-2xl text-primary'> Dashboard </h2>
        <Link href={'/dashboard/create-new'}>
            <Button>+ Create new</Button>
        </Link>
      </div>
      {/*Empty State*/}
      {videoList?.length==0&&<div>
        <EmptyState/>
      </div>}
    </div>
  )
}

export default Dashboard
