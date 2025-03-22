"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "../ui/Input"
import Scene from "../../../public/SignUpBG.png"
import { Facebook, Google, Twitter } from "../ui/icons"

interface LoginFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginForm({ isOpen, onClose }: LoginFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login form submitted:", formData)
    // Add your login submission logic here
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-in fade-in duration-300 backdrop-blur overflow-auto">
      <div className="relative background-aside rounded-3xl h-[658px]">
        {/* <div className="size-full background-header absolute opacity-10 "></div> */}
        <div className="flex flex-col md:flex-row rounded-3xl background-header h-full">
          {/* Left side - Image */}
          <div className="relative rounded-l-3xl h-64 md:h-auto overflow-hidden w-[460px]">
            <Image
              src={Scene || "/placeholder.svg"}
              alt="Dark"
              objectFit="fill"
              className="absolute bottom-0 left-0 w-full h-full rounded-l-3xl"
            />
            <div className="h-full w-full absolute inset-0 bg-[#212530] opacity-50 rounded-3xl"></div>

            <Image
              src="/SignUpKing.png"
              alt="King with treasure"
              width={500}
              height={600}
              className="absolute bottom-0 left-0 rounded-l-3xl"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-[460px] h-full py-4 px-8 background-header rounded-r-3xl flex flex-col place-content-center relative ">
            <div className="flex justify-end items-center place-content-center rounded-l-3xl absolute top-4 right-4">
              <button onClick={onClose} className="text-foreground-secondary hover:text-foreground transition-colors">
                <X size={24} />
              </button>
            </div>
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">Log In</h1>

            <div className="mb-6 flex place-content-center items-center gap-2">
              <span className="text-foreground-secondary">{"You don't have an account yet?"} </span>
              <Link href="/signup" className="text-foreground font-medium">
                Sign Up
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
              </div>

              <div className="mb-2">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end mb-6">
                <Link href="/forgot-password" className="text-sm text-foreground">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-white shadow-primary"
                style={{
                  background: "radial-gradient(123.83% 99.06% at 49.75% 0%, #6A7EFF 0%, #4962FF 48.44%, #3A55FF 100%)",
                }}
              >
                Log In
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px bg-[rgba(255,255,255,0.15)] flex-1"></div>
                <span className="text-foreground-secondary">Or Continue with</span>
                <div className="h-px bg-[rgba(255,255,255,0.15)] flex-1"></div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="flex items-center justify-center w-10 h-10 rounded-lg background-secondary border-secondary shadow-secondary">
                  <Google />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-lg background-secondary border-secondary shadow-secondary">
                  <Twitter className={"fill-foreground"} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-lg background-secondary border-secondary shadow-secondary">
                  <Facebook className={"fill-foreground"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

