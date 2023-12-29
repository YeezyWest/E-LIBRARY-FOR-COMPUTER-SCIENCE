"use client";
import { useUser } from "@clerk/nextjs";

export default function page() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
 
  return (
    <section>
      <span className="font-bold text-4xl">
        Wagwan 🤜🤛 {user.firstName}, Welcome to Dream Builders
      </span>
      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        {/* <Link href={{
          pathname: '/help', 
          query: {
            name: 
          }
        }} >
        
        </Link> */}
      </div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </section>
  );
}
