import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

const CustomLoading = ({loading}) => {
  return (
        <AlertDialog open={loading}>
                
                <AlertDialogContent>
                    
                    <AlertDialogTitle ></AlertDialogTitle>
                    <div className="flex justify-center items-center my-10 flex-col">
                        <Image src={"/progress.gif"} width={100} height={100} alt='loading...'/>
                        <h2>Generating your video... Do not refresh</h2>                                    
                    </div>
                    
                  
                    
                    {/* <div>
                        <h2>Loading</h2>
                    </div> */}
                </AlertDialogContent>
        </AlertDialog>

  )
}

export default CustomLoading
