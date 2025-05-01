import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div lang="en">
      <div className="p-3 px-5 flex items-center fixed w-full bg-white justify-between shadow-md">
        <div className="flex gap-3 items-center">
          <img
            loading="lazy"
            width="30"
            height="30"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="/logo.svg"
            alt="Logo"
          />
          <h2 className="font-bold text-xl">Ai Short Video</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      </div>

      <section className="z-50 pt-8"> {/* Reduced top padding */}
        <div className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-8"> {/* Reduced padding */}
          <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Build Your Short Video <span className="text-primary">With AI</span>
          </p>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"> {/* Reduced bottom margin */}
            Effortlessly Build AI-Generated Short Videos in Minutes
          </p>
          <div className="flex flex-col mb-6 lg:mb-12 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"> {/* Reduced bottom margin */}
            <Link href={"/dashboard"}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-8">
        <p className="font-bold text-3xl">How it Works?</p>
        <p className="text-md text-gray-500">Give mock interview in just 3 simple easy steps</p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> 
          <div className="block rounded-xl border bg-primary border-gray-200 p-6 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <p className="mt-4 text-xl font-bold text-black">Select Story Type</p>
            <p className="mt-1 text-md text-white font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </div>
          <div className="block rounded-xl border bg-white border-gray-200 p-6 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <p className="mt-4 text-xl font-bold text-black">Select Images Style</p>
            <p className="mt-1 text-sm text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </div>
          <div className="block rounded-xl border bg-primary border-gray-200 p-6 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <p className="mt-4 text-xl font-bold text-black">Generate Video</p>
            <p className="mt-1 text-md text-white font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center"> 
          <div className="inline-block rounded bg-pink-600 px-10 py-2 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
            <Link href={"/dashboard"}>
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}