'use client'

import { useState } from "react";
import { Input } from "../ui/Input";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-4">
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
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
          background:
            "radial-gradient(123.83% 99.06% at 49.75% 0%, #6A7EFF 0%, #4962FF 48.44%, #3A55FF 100%)",
        }}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
