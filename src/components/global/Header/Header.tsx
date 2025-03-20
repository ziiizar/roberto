"use client";

import { GoldCoin, GreenCoin, Logo } from "../../ui/icons";
import AsideToggler from "./AsideToggler";
import HeaderLinks from "./HeaderLinks";
import { AdminLinks } from "@/constants/Links";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { useUserStore } from "@/store/use-user-store"; // Assuming this is the correct path
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { ChevronDown } from "lucide-react";
import NotificationButtons from "./Notifications";

export const Header = () => {
  const { loged: isLoggedIn } = useUserStore();

  return (
    <header className="[grid-area:header] bg-gradient-to-bl from-background-secondary-gradient-from to-background-secondary-gradient-to flex px-6 items-center justify-between drop-shadow-header">
      <div className="flex gap-6 place-content-center items-center h-full">
        <Logo />
        <h2 className="text-foreground text-2xl font-extrabold uppercase -ml-4">
          Lucky Wolf
        </h2>
        <AsideToggler></AsideToggler>
        <HeaderLinks links={AdminLinks}></HeaderLinks>
      </div>

      {isLoggedIn ? (
        <div className="flex items-center gap-4  justify-between">
          <div className="flex items-center gap-2 w-[300px] h-[44px] bg-[#171A22] rounded-xl">
            <div className="flex items-center gap-3 px-3 py-1 rounded-full ">
              <GoldCoin/>
              <span className="text-foreground">0.00</span>
              <button
          
          className="p-[5px] mr-1 text-foreground-secondary   bg-gradient-to-br from-secondary-gradient-from to-secondary-gradient-to  cursor-pointer  shadow-inner shadow-gray-500/30   hover:from-gray-600 hover:shadow-gray-400/30 hover:to-gray-700   rounded-xl outline-1 outline-secondary transition-all duration-200"
         
        >
           <ChevronDown size={16} />
        </button>
            </div>

            <div className=" h-6 w-[1.5px] bg-gray-700"></div>
            <div className="flex items-center gap-3 px-3 py-1 rounded-full ">
             <GreenCoin></GreenCoin>
              <span className="text-foreground">0.00</span>
              <button
          
            className="p-[5px] mr-1 text-foreground-secondary   bg-gradient-to-br from-secondary-gradient-from to-secondary-gradient-to  cursor-pointer  shadow-inner shadow-gray-500/30   hover:from-gray-600 hover:shadow-gray-400/30 hover:to-gray-700   rounded-xl outline-1 outline-secondary transition-all duration-200"
           
          >
             <ChevronDown size={16} />
          </button>
            </div>
          </div>
          <div className="flex -ml-10">
            {" "}
            <Button className="rounded-l-2xl rounded-r-none border border-border-secondary">Deposit</Button>
            <Button variant="secondary" className="rounded-r-2xl rounded-l-none border border-border-secondary">
              Withdraw
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex place-content-end items-center grow mr-28">
          <SearchBar></SearchBar>
        </div>
      )}

      {isLoggedIn ? (
        <div className="flex items-center gap-2 ml-2">
          <NotificationButtons></NotificationButtons>
          <button className="flex items-center gap-2 px-3 py-1 rounded-md ">
            <span className="text-gray-300">Max A.</span>
            <Avatar className="h-8 w-8 border border-gray-700">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      ) : (
        <>
          <div className="flex place-content-center items-center gap-6">
            <Link className="text-foreground" href={"#"}>
              Log in
            </Link>
            <Button>Sign up</Button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
