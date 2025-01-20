"use client"
import { db } from '@/configs/db';
import { Users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { use, useEffect } from 'react'

const Provider = ({children}) => {
  const {user} = useUser();
useEffect(()=>{
  user&&isNewUser();
},[user])
  
  console.log("user",user);
  const isNewUser=async()=>{
    const result = await db.select().from(Users).where(eq(Users.email,user?.primaryEmailAddress?.emailAddress));
    console.log("result",result);
    if(result.length===0){
      await db.insert(Users).values({

        name: user?.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      })
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
