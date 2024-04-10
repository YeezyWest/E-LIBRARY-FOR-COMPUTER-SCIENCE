import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";

export function MainNav() {
  const { userId } = auth();
  return (
    <>
      <nav className="flex items-center justify-between py-1 px-6">
        <div className="flex items-center md:px-4 py-4">
          <Link href='/'>
          <Image src="/img/LOGO copy.png" alt="logo" width={100} height={100} />
        </Link>
        </div>
        <div className="flex items-center">
          {!userId && (
            <>
              <Link
                href="sign-in"
                className="mr-4 bg-black px-6 py-2 rounded-md text-white"
              >
                Sign In
              </Link>
              <Link href="sign-up" className=" mr-4">
                Sign Up
              </Link>
            </>
          )}
          {userId && (
            <Link href="dashboard" className=" mr-4 px-6 py-2 bg-black text-white rounded-md">
              Dashboard
            </Link>
          )}
          <div className="hidden md:block md:ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
}
