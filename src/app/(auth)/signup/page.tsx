'use client'

import Header from "@/components/global/Header/Header";
import { cn } from "@/lib/utils";
import { primaryFont } from "@/styles/fonts";
import SignUpForm from "@/components/auth/SignUpForm";
import Footer from "@/components/global/Footer";
import GlassCard from "@/components/auth/GlassCard";
import Stars from "@/components/auth/Stars";

export default function SignupPage() {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col bg-background dark:bg-dark-background overflow-hidden transition-colors",
        primaryFont.className
      )}
    >
      <Header />
      <main className="flex-1 flex items-center justify-center py-6 px-4 relative">
         {/* Estrellas de fondo */}
      <Stars/>    

      <GlassCard>
        <SignUpForm />
      </GlassCard>
      </main>
      
      <Footer />
    </div>
  );
}
