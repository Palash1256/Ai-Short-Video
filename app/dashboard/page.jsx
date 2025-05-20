"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import EmptyState from "./_components/EmptyState";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "@/configs/db";
import { useUser } from "@clerk/nextjs";
// import { VideoData } from "@/configs/schema";
import { videoTable } from "@/configs/schema";
import { VideoOff } from "lucide-react";
import VideoList from "./_components/VideoList";
import { eq } from "drizzle-orm";


function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  const { user } = useUser();
  // console.log("user tryy ", user);
  useEffect(() => {
   user && GetVideoList();
  }, [user]);

  /**
   *
   * Used to get users video
   */
  const GetVideoList = async () => {
    const result = await db
      .select()
      .from(videoTable)
      .where(
        eq(videoTable?.createdBy, user?.primaryEmailAddress?.emailAddress)
      );
    // console.log("result........=", result);
    setVideoList(result);
  };
  // GetVideoList();

  return (
    <div>
      <div className="flex justify-between item-center">
        <h2 className="font-bold text-2xl text-primary"> Dashboard </h2>
        <Link href={"/dashboard/create-new"}>
          <Button>+ Create new</Button>
        </Link>
      </div>
      {/*Empty State*/}
      {videoList?.length == 0 && (
        <div>
          <EmptyState />
        </div>
      )}

      {/*List of vedios*/}

      <VideoList videoList={videoList}  className="flex justify-center items-center"/>
    </div>
  );
}

export default Dashboard;
