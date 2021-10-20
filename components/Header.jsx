import Image from "next/image";
import { useRouter } from "next/router";
import {
  SearchIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import { useSession, signOut, signIn } from "next-auth/react";
// store
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modulAtom";
import { useState } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const router = useRouter();
  const mobilePost = () => {
    setOpen(true);
    setToggleMenuMobile(false);
  };

  return (
    <div className="shadow-sm border-b bg-white sticky z-50">
      <div className="flex justify-between items-center max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="relative h-10 w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/")}
          />
        </div>
        {/* middle */}
        <div className="max-w-sm">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex flex-row items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* middle */}
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <MenuIcon
            onClick={() => setToggleMenuMobile((prev) => !prev)}
            className="h-6 w-6 cursor-pointer md:hidden"
          />
          <HomeIcon className="nav-btn" onClick={() => router.push("/")} />
          {session ? (
            <>
              <div className="flex items-center space-x-4">
                <div className="relative nav-btn">
                  <PaperAirplaneIcon className="nav-btn rotate-45" />
                  <div className="absolute -top-1 flex items-center justify-center -right-2 h-4 w-4 text-xs bg-red-500 rounded-full text-white animate-pulse">
                    3
                  </div>
                </div>
                <PlusCircleIcon onClick={mobilePost} className="nav-btn" />
                <UserGroupIcon className="nav-btn" />
                <HeartIcon className="nav-btn" />
                <img
                  onClick={signOut}
                  className="h-10 w-10 cursor-pointer rounded-full"
                  src={session.user?.image}
                  alt={session.user?.name}
                />
              </div>
              <div
                className={`${
                  toggleMenuMobile ? "translate-x-0" : "-translate-x-14"
                }  fixed top-0 h-screen left-0 !ml-0 animation-slide transition-all duration-700 ease-in-out `}
              >
                <div className="h-screen justify-center shadow-sm border-r bg-white space-y-8 flex flex-col px-4">
                  {/* <div className="relative nav-btn-mobile">
                  <PaperAirplaneIcon className="nav-btn-mobile rotate-45" />
                  <div className="absolute -top-1 flex items-center justify-center -right-2 h-4 w-4 text-xs bg-red-500 rounded-full text-white animate-pulse">
                    3
                  </div>
                </div> */}
                  <PlusCircleIcon
                    onClick={() => setOpen(true)}
                    className="nav-btn-mobile"
                  />
                  <UserGroupIcon className="nav-btn-mobile" />
                  <HeartIcon className="nav-btn-mobile" />
                </div>
              </div>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
          {/* mobile Menu */}
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default Header;
