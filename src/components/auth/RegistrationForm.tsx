"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "../ui/Input"

interface RegistrationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    password: "",
    repeatPassword: "",
    promoCode: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-in fade-in duration-300 backdrop-blur">
      <div
        className="relative w-[692px] h-[852px] rounded-xl overflow-hidden"
       
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <Image
              src="/images/king-treasure.png"
              alt="King with treasure"
              width={500}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-3/5 p-8 background-header">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-foreground">Registration</h1>
              <button onClick={onClose} className="text-foreground-secondary hover:text-foreground transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="mb-6 text-right">
              <span className="text-foreground-secondary">Already have an account? </span>
              <Link href="/login" className="text-foreground font-medium">
                Log In
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                   
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={formData.surname}
                    onChange={handleChange}
                   
                  />
                </div>
              </div>

              <div className="mb-4">
                <Input
                  type="text"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                 
                />
              </div>

              <div className="mb-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  
                />
              </div>

              <div className="mb-4">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                 
                />
              </div>

              <div className="mb-4">
                <Input
                  type="password"
                  name="repeatPassword"
                  placeholder="Repeat Password"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  
                />
              </div>

              <div className="mb-6">
                <Input
                  type="text"
                  name="promoCode"
                  placeholder="Promo Code (if available)"
                  value={formData.promoCode}
                  onChange={handleChange}
                 
                />
              </div>

              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-sm text-foreground-secondary">
                  I am 18 years old and I have read and accept{" "}
                  <Link href="/terms" className="text-foreground">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-foreground">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-white shadow-primary"
                style={{
                  background: "radial-gradient(123.83% 99.06% at 49.75% 0%, #6A7EFF 0%, #4962FF 48.44%, #3A55FF 100%)",
                }}
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px bg-[rgba(255,255,255,0.15)] flex-1"></div>
                <span className="text-foreground-secondary">Or Continue with</span>
                <div className="h-px bg-[rgba(255,255,255,0.15)] flex-1"></div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="flex items-center justify-center w-32 py-2 rounded-lg bg-secondary border border-[rgba(255,255,255,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground-secondary mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M17.13 17.13c-1.41 1.41-3.12 2.33-5.13 2.33-4.42 0-8-3.58-8-8 0-2.01.92-3.72 2.33-5.13"></path>
                    <path d="M9.13 14.87a4 4 0 1 1 5.74-5.74"></path>
                  </svg>
                  <span className="text-foreground-secondary">Google</span>
                </button>
                <button className="flex items-center justify-center w-32 py-2 rounded-lg bg-secondary border border-[rgba(255,255,255,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground-secondary mr-2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="text-foreground-secondary">Twitter</span>
                </button>
                <button className="flex items-center justify-center w-32 py-2 rounded-lg bg-secondary border border-[rgba(255,255,255,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground-secondary mr-2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="text-foreground-secondary">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

