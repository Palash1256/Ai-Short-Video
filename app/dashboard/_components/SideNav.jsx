"use client"
import { CircleUser, FileVideo, icons, PanelsTopLeft, ShieldIcon, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react' 
function SideNav(){
    const MenuOption =[{
        id:1,
        name:'Dashboard',
        path:'/dashboard',
        icon:icons,
        icon:PanelsTopLeft
    },
    {
        id:2,
        name:'Create new',
        path:'/dashboard/create-new',
        icon:icons,
        icon:FileVideo
    },
    {
        id:3,
        name:'Upgrade',
        path:'/upgrade',
        icon:icons,
        icon:ShieldPlus
    },
    {
        id:4,
        name:'Account',
        path:'/dashboard/account',
        icon:icons,
        icon:CircleUser
    }
]
const path=usePathname();
// console.log('path',path);

    return(
        <div className='w-64 h-screen shadow-md p-5'>
            <div className='grid gap-3'>
                {MenuOption.map((item,index)=>(
                    <Link href={item.path} key={index}>
                        <div className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer
                            ${path==item.path&&`bg-primary text-white`}
                            `}>
                        <item.icon/>
                        <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default SideNav