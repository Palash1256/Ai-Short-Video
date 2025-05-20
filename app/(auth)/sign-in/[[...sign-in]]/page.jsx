import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute w-96 h-96 bg-purple-400 rounded-full opacity-30 animate-pulse-slow top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full opacity-30 animate-pulse-slow bottom-20 right-20"></div>

      {/* SignIn Card */}
      <div className="z-10 animate-floating transform transition-transform duration-500 hover:scale-105 bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <SignIn />
      </div>
    </div>
  );
}