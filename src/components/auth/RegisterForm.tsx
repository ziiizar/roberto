'use client'

import { useState } from "react";
import { Input } from "../ui/Input";
import Link from "next/link";

const RegisterForm = () => {

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
        // onClose();
      };

    return (
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
    )
}

export default RegisterForm