"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export function SearchBar({ placeholder = "Search", onSearch, className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative max-[1100px]:hidden w-[240px] h-[44px] max-w-xl ${className}`}>
      <div className="relative flex items-center w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full py-2 pl-6 pr-12 text-foreground font-semibold bg-[#1C202B] rounded-full border border-[#303541] focus:outline-none focus:ring-1 focus:ring-primary-gradient-from placeholder:text-foreground-secondary/70"
        />
        <button
          type="submit"
          className="absolute right-4 p-1 text-foreground-secondary hover:text-foreground transition-colors"
          aria-label="Search"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  )
}

