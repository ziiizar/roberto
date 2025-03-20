"use client";

import { CollapsedTogglerIcon, TogglerIcon } from "../../ui/icons";
import { useSidebarStore } from "@/store/use-sidebar-store";

export default function AsideToggler() {
  const { toggleSidebar,collapsed } = useSidebarStore();

  return (
    
    <button
      onClick={toggleSidebar}
      className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-gradient-from to-secondary-gradient-to  cursor-pointer  shadow-inner shadow-gray-500/30   hover:from-gray-600 hover:shadow-gray-400/30 hover:to-gray-700 transition-all duration-200 "
    >
      {collapsed ? <CollapsedTogglerIcon  /> : <TogglerIcon  />}
      
    </button>
  );
}
