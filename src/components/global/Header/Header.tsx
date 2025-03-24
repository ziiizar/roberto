"use client"

import { useState } from "react"
import {  Logo } from "../../ui/icons"
import AsideToggler from "./AsideToggler"
import HeaderLinks from "./HeaderLinks"
import { AdminLinks } from "@/constants/Links"
import { Button } from "@/components/ui/Button"
import { SearchBar } from "./SearchBar"
import { useUserStore } from "@/store/use-user-store" // Assuming this is the correct path
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { ChevronDown } from "lucide-react"
import NotificationButtons from "./Notifications"
import RegistrationForm from "@/components/auth/RegistrationModal"
import LoginForm from "@/components/auth/LoginModal"
import UserMoney from "./UserMoney"

export const Header = () => {
  const { loged: isLoggedIn, toggleLoged } = useUserStore()
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const openRegistration = () => setIsRegistrationOpen(true)
  const closeRegistration = () => setIsRegistrationOpen(false)

  const openLogin = () => setIsLoginOpen(true)
  const closeLogin = () => setIsLoginOpen(false)

  return (
    <>
      <header className="[grid-area:header] background-header flex px-6 items-center justify-between drop-shadow-header">
        <div className="flex gap-6 place-content-center items-center h-full">
          <Logo />
          <h2 className="text-foreground text-2xl font-extrabold uppercase -ml-4 max-[600px]:hidden">Lucky Wolf</h2>
          <AsideToggler></AsideToggler>
          <HeaderLinks links={AdminLinks}></HeaderLinks>
        </div>

        {isLoggedIn ? (
          <UserMoney></UserMoney>
        ) : (
          <div className="flex place-content-end items-center grow mr-28">
            <SearchBar></SearchBar>
          </div>
        )}

        {isLoggedIn ? (
          <div className="flex items-center gap-2 ml-2 w-[300px] justify-between">
            <NotificationButtons></NotificationButtons>
            <button onClick={toggleLoged} className="flex items-center gap-2 px-3 py-1 rounded-md ">
              <span className="text-foreground font-semibold">Max A.</span>
              <Avatar className="h-8 w-8 border border-gray-700">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-foreground" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex place-content-center items-center gap-6">
              <button className="text-foreground font-semibold" onClick={openLogin}>
                Log in
              </button>
              <Button className="border-[#7A8BFE] border-[1px]" onClick={openRegistration}>
                Sign up
              </Button>
            </div>
          </>
        )}
      </header>

      {/* Registration Modal */}
      <RegistrationForm isOpen={isRegistrationOpen} onClose={closeRegistration} />

      {/* Login Modal */}
      <LoginForm isOpen={isLoginOpen} onClose={closeLogin} />
    </>
  )
}

export default Header

