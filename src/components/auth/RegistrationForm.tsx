"use client";

import type React from "react";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/Input";
import Scene from "../../../public/SignUpBG.png";
import { Facebook, Google, Twitter } from "../ui/icons";
interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationForm({
  isOpen,
  onClose,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    password: "",
    repeatPassword: "",
    promoCode: "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-in fade-in duration-300 backdrop-blur overflow-auto ">
      <div className="relative   background-aside rounded-3xl">
        <div className="flex flex-col md:flex-row rounded-3xl background-header">
          {/* Left side - Image */}
          <div className="relative  rounded-l-3xl h-64 md:h-auto overflow-hidden w-[460px]">
            <Image
              src={Scene}
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
          <div className="w-[460px]  h-[786px] py-4 px-8 background-header rounded-r-3xl">
            <div className="flex justify-end items-center place-conter-center  rounded-l-3xl">
              <button
                onClick={onClose}
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
              <h1 className="text-2xl font-bold text-foreground text-center mb-2">
                Registration
              </h1>

            <div className="mb-6 flex  place-content-center items-center gap-2">
                <span className="text-foreground-secondary">
                  Already have an account?{" "}
                </span>
                <Link href="/login" className="text-foreground font-medium">
                  Log In
                </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label
                  htmlFor="terms"
                  className="text-sm text-foreground-secondary"
                >
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
                  background:
                    "radial-gradient(123.83% 99.06% at 49.75% 0%, #6A7EFF 0%, #4962FF 48.44%, #3A55FF 100%)",
                }}
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px bg-[rgba(255,255,255,0.15)] flex-1"></div>
                <span className="text-foreground-secondary">
                  Or Continue with
                </span>
                <div className="h-px bg-[rgba(255,255,255,0.15)] flex-1"></div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="flex items-center justify-center w-32 py-2 rounded-lg background-secondary border-secondary shadow-secondary gap-3">
                  <Google></Google>
                  <span className="text-foreground-secondary">Google</span>
                </button>
                <button className="flex items-center justify-center w-32 py-2 rounded-lg background-secondary border-secondary shadow-secondary gap-3">
                  <Twitter className={'fill-foreground'}></Twitter>
                  <span className="text-foreground-secondary">Twitter</span>
                </button>
                <button className="flex items-center justify-center w-32 py-2 rounded-lg background-secondary border-secondary shadow-secondary gap-3">
                  <Facebook className={'fill-foreground'}></Facebook>
                  <span className="text-foreground-secondary">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
