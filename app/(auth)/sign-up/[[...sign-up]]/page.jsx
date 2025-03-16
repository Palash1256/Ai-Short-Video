import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'
import bgImg from '../../../../public/wallpaper.jpg'

export default function Page() {
  return (
    <div 
      className="flex justify-center items-center h-screen bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <SignUp 
          appearance={{
            elements: {
              card:{
                color:'black',
                backgroundColor: 'transparent',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              },
              footerAction: {
                backgroundColor: 'transparent',
                fontSize: '14px',
                color: '#fff',
                textAlign: 'center',
              },
              formFieldInput:{
                backgroundColor:'transparent',
                
              }
            },
          }}
        />
      
    </div>
  )
}
