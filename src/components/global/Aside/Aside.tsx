"use client";

import { Button } from "../../ui/Button";
import { CollapsibleNav } from "./Collapsible-nav";
import { CasinoNavigationItems } from "@/constants/Links";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/use-sidebar-store";
import { useEffect } from "react";
import Socials from "./Socials";
import { Jackpot, Rank, Support } from "@/components/ui/icons";

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
        "transition-all duration-300 ease-in-out [grid-area:aside] bg-gradient-to-tr from-background-primary-gradient-from to-background-primary-gradient-to h-full overflow-y-auto custom-scrollbar flex flex-col justify-between",
        collapsed ? "w-[var(--aside-width)] p-2" : "w-[var(--aside-width)] p-6"
      )}
    >
      <div className="flex flex-col gap-4 mb-4">
        {!collapsed && (
          <div className="flex flex-col gap-4 mb-4">
            <Button size={"full"}>Favorites</Button>
            <Button size={"full"} variant={"secondary"}>
              Recently Played
            </Button>
          </div>
        )}

        <ul
          className={cn(
            "flex flex-col gap-4 rounded-xl",
            collapsed ? "p-2" : ""
          )}
        >
          <CollapsibleNav items={CasinoNavigationItems} collapsed={collapsed} />
        </ul>
        <div className="bg-gray-700 h-[1.5px] w-full"></div>
        <ul className="flex flex-col gap-4 text-foreground-secondary p-3">
          <li className="flex  gap-3 text-foreground-secondary">
            <Rank></Rank>
            {!collapsed && <h4>Rank</h4> }

          </li>
          <li className="flex items-center  gap-3 text-foreground-secondary">
            <Jackpot></Jackpot>
            {!collapsed && <h4>Jackpot</h4> }
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 ">
        <Button
          variant={"secondary"}
          size={"full"}
          className="bg-[#22263599] justify-start px-4 text-foreground-secondary "
        >
          <Support></Support>
          Live Support
        </Button>
        {!collapsed && <Socials />}
      </div>
    </aside>
  );
}
