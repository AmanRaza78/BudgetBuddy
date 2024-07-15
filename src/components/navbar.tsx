import Link from "next/link";
import { Button } from "./ui/button";
import { SignIn } from "./sign-in";
import { auth } from "@/lib/auth";
import { NavbarLinks } from "./navbar-links";
import { UserNav } from "./user-nav";
import { MobileMenu } from "./mobile-menu";


export async function Navbar() {
    const session = await auth()
    return (
      <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
        <div className="md:col-span-3">
          <Link href="/">
            <h1 className="text-2xl font-semibold ">
              Budget<span className="text-primary">Buddy</span>
            </h1>
          </Link>
        </div>
  
        <NavbarLinks />
  
        <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
          {session?.user ? (
            <UserNav
              email={session.user.email as string}
              name={session.user.name as string}
              userImage={
                session.user.image ?? `https://avatar.vercel.sh/${session.user.name}`
              }
            />
          ) : (
            <div className="flex items-center gap-x-2">
              <Button asChild>
                <SignIn/>
              </Button>
            </div>
          )}
  
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    );
  }