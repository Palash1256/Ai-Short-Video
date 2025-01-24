import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='p-3 px-5 flex justify-between items-center shadow-md' >
      <div className='flex gap-3 items-center'>
        <Image src='/logo.svg' alt='' width={30} height={30}/>
        <h2 className='font-bold text-xl'>Ai Short Video</h2>
      </div>
      <div className='flex gap-3 items-center'>
        <Link href={"/dashboard"}>
          <Button>Dashboard</Button>
        </Link>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
