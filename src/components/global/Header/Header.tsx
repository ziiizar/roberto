"use client";

import { Logo } from "../../ui/icons";
import AsideToggler from "./AsideToggler";
import HeaderLinks from "./HeaderLinks";
import { AdminLinks } from "@/constants/Links";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="[grid-area:header] bg-gradient-to-bl from-background-secondary-gradient-from to-background-secondary-gradient-to flex px-8 py-4 items-center justify-between drop-shadow-header">
      <div className="flex gap-6 place-content-center items-center ">
        <Logo />
        <AsideToggler></AsideToggler>
        <HeaderLinks links={AdminLinks}></HeaderLinks>
      </div>
      <div className="flex place-content-end items-center grow mr-28">
        <SearchBar></SearchBar>
      </div>
      <div className="flex place-content-center items-center gap-6">
       <Link className="text-foreground" href={"#"}>Login</Link>
        <Button > Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
