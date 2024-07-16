import TranscationList from "@/components/transcation-list";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Manage() {
    const session = await auth()
    if(!session?.user?.id){
        return redirect('/')
    }
  return (
    <>
      <div className="max-w-[85rem] min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                  <div>
                    <div className="inline-flex gap-x-2">
                      <Link href="/dashboard">
                        <Button>Add</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <TranscationList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
