"use client"
import { UserButton } from '@clerk/nextjs'
import React, { useState } from 'react';
import EmptyState from './_components/EmptyState';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
//import { useState} from 'react';
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
