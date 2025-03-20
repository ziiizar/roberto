"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

// Define the types for our navigation items
type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  children?: NavItem[];
};

type NavItemProps = {
  item: NavItem;
  level?: number;
  collapsed?: boolean;
};

export function CollapsibleNavItem({
  item,
  level = 0,
  collapsed = false,
}: NavItemProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(pathname.startsWith(item.path));
  const hasChildren = item.children && item.children.length > 0;

  const isActive = pathname === item.path;
  const isChildActive = pathname.startsWith(item.path + "/");

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger className="bg-transparent" asChild>
            <div className="w-full mb-1">
              <Link
                href={item.path}
                className={cn(
                  "flex items-center w-full px-3 py-2 rounded-md text-sm",
                  isActive || isChildActive
                    ? "text-foreground bg-secondary/50"
                    : "text-foreground-secondary hover:text-foreground hover:bg-secondary/30"
                )}
              >
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center mr-2">
                  {item.icon}
                </span>
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className="w-full mb-4">
      <div
        className={cn(
          "flex items-center justify-between w-full transition-all duration-200 h-12",
          level === 0
            ? "bg-background hover:bg-gradient-to-b from-secondary-gradient-from to-secondary-gradient-to rounded-xl"
            : "",
          isActive || isChildActive ? "bg-secondary" : ""
        )}
      >
        <Link
          href={item.path}
          className={cn(
            "flex items-center flex-grow px-3 py-2 text-sm",
            level === 0 ? "font-medium" : "",
            isActive || isChildActive
              ? "text-foreground "
              : "text-foreground-secondary hover:text-foreground"
          )}
        >
          <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center mr-2 text-foreground-secondary">
            {item.icon}
          </span>
          <span>{item.title}</span>
        </Link>

        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            className="p-[5px] mr-1 text-foreground-secondary   bg-background  rounded-full outline-1 outline-secondary transition-all duration-200"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
  <div className="relative">
    <div className="absolute left-0 top-full w-full bg-background-secondary-gradient-from rounded-xl shadow-lg py-2">
      {item.children?.map((child) => (
        <CollapsibleNavItem key={child.path} item={child} level={level + 1} collapsed={collapsed} />
      ))}
    </div>
  </div>
)}

    </div>
  );
}

export function CollapsibleNav({
  items,
  collapsed = false,
}: {
  items: NavItem[];
  collapsed?: boolean;
}) {
  return (
    <nav className="w-full space-y-1 py-2 ">
      {items.map((item) => (
        <CollapsibleNavItem key={item.path} item={item} collapsed={collapsed} />
      ))}
    </nav>
  );
}
