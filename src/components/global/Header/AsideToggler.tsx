"use client";

import { TogglerIcon } from "../../ui/icons";
import { useSidebarStore } from "@/store/use-sidebar-store";

export default function AsideToggler() {
  const { toggleSidebar } = useSidebarStore();

  return (
    <button
      onClick={toggleSidebar}
      className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-gradient-from to-secondary-gradient-to   transition-colors shadow-inner shadow-gray-500/30  hover:shadow-gray-500/90  hover:animate-pulse"
    >
      <TogglerIcon className="text-gray-400 w-6 h-6" />
    </button>
  );
}
