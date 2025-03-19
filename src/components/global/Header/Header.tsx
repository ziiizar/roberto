"use client";

import { Logo } from "../../ui/icons";
import AsideToggler from "./AsideToggler";
import HeaderLinks from "./HeaderLinks";
import { AdminLinks } from "@/constants/Links";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <header className="[grid-area:header] bg-background-secondary flex px-8 py-4 items-center justify-between">
      <div className="flex gap-6 place-content-center items-center ">
        <Logo />
        <AsideToggler></AsideToggler>
        <HeaderLinks links={AdminLinks}></HeaderLinks>
      </div>
      <div className="flex place-content-end items-center grow mr-8">
        <SearchBar></SearchBar>
      </div>
      <div className="flex place-content-center items-center">
        <Button variant={'ghost'}>Log in</Button>
        <Button > Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
