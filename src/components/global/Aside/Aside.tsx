"use client";

import { Button } from "../../ui/Button";
import { CollapsibleNav } from "./Collapsible-nav";
import { CasinoNavigationItems } from "@/constants/Links";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/use-sidebar-store";
import { useEffect } from "react";
import Socials from "./Socials";
import {
  Banner,
  FavoritesHeart,
  Jackpot,
  Rank,
  Recents,
  Support,
} from "@/components/ui/icons";

export default function Aside() {
  const { collapsed } = useSidebarStore();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--aside-width",
      collapsed ? "80px" : "280px"
    );
  }, [collapsed]);

  return (
    <aside
      className={cn(
        "transition-all duration-200 ease-in-out [grid-area:aside] background-aside h-full overflow-y-auto custom-scrollbar flex flex-col justify-between font-semibold aside-responsive",
        collapsed ? "w-[var(--aside-width)] p-2" : "w-[var(--aside-width)] p-6"
      )}
    >
      <div className="flex flex-col gap-4 mb-4">
        {!collapsed && (
          <div className="flex flex-col gap-4 mb-4">
            <Button
              size="full"
              className="flex items-center justify-between gap-3 px-4 py-2 
                         rounded-xl background-primary 
                         text-foreground shadow-primary border-primary hover:brightness-110 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <Banner className="absolute inset-0" />
                  <FavoritesHeart className="absolute top-1 right-[10px]" />
                </div>
                <span className="font-medium">Favorites</span>
              </div>
              <div
                className="bg-[#2F3BB2] w-5 h-5 flex items-center justify-center 
                              rounded text-xs font-semibold"
              >
                5
              </div>
            </Button>

            <Button
              size="full"
              variant={"secondary"}
              className="flex justify-start gap-3 px-4 py-2 
                         rounded-xl text-foreground-secondary 
                         hover:text-foreground transition-colors"
            >
              <Recents />
              <span className="font-medium">Recently Played</span>
            </Button>
          </div>
        )}


         {/* Collapsible Links */}
        <ul
          className={cn(
            "flex flex-col gap-4 rounded-xl",
            collapsed ? "p-2" : ""
          )}
        >
          <CollapsibleNav items={CasinoNavigationItems} collapsed={collapsed} />
        </ul>
        <div className="bg-gray-700 h-[1.5px] w-full"></div>


        {/* Other Links */}
        <ul
          className={cn(
            "flex flex-col gap-4 text-foreground-secondary p-3",
            collapsed && "place-conter-center items-center"
          )}
        >
          <li className="flex  gap-3 text-foreground-secondary">
            <Rank />
            {!collapsed && <h4>Rank</h4>}
          </li>
          <li className="flex items-center  gap-3 text-foreground-secondary">
            <Jackpot />
            {!collapsed && <h4>Jackpot</h4>}
          </li>
        </ul>
      </div>


      
      <div className="flex flex-col gap-5">
        <button
          className={cn(
            "bg-[#181C27]   px-4 text-foreground-secondary flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors shadow-button backdrop-blur-2xl cursor-pointer transition-all duration-200 h-[44px]",
            !collapsed && "justify-start"
          )}
        >
          <Support />
          {!collapsed && <h4>Live Support</h4>}
        </button>
        {!collapsed && <Socials />}
      </div>
    </aside>
  );
}
