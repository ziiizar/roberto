"use client"

import { TogglerIcon } from "../../ui/icons"
import { useSidebarStore } from "@/store/use-sidebar-store"

export default function AsideToggler() {
  const { toggleSidebar } = useSidebarStore()

  return (
    <button
      onClick={toggleSidebar}
      className="flex items-center justify-center p-2 rounded-md hover:bg-secondary/50 transition-colors"
    >
      <TogglerIcon />
    </button>
  )
}

