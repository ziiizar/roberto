"use client"

import Main from "@/components/home/Main";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/use-sidebar-store";

export default function Home() {
  const { collapsed } = useSidebarStore();
  return (
    <div className={cn(" [grid-area:main] ", collapsed ? "collapsed" : "expanded")}>
     
        <Main></Main>
      </div>
    
  );
}
