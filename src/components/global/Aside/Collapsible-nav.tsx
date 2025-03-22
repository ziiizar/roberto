"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="mb-1">
        <Link
          href={item.path}
          className={cn(
            "flex items-center w-full px-3 py-2 rounded-md text-sm text-foreground-secondary hover:text-foreground hover:bg-secondary/30"
          )}
        >
          <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center mr-2">
            {item.icon}
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className={cn(
          "flex items-center justify-between w-full transition-all duration-200 h-12 px-3 py-2",
          isOpen && 'background-secondary border-secondary shadow-secondary transition-all duration-200',
          level === 0
            ? "bg-background hover:bg-gradient-to-b from-secondary-gradient-from to-secondary-gradient-to rounded-xl relative z-10"
            : "",
          isActive || isChildActive ? "bg-secondary" : "",
          // Si está abierto, forzamos el color foreground; de lo contrario, foreground-secondary
          isOpen ? "text-foreground" : "text-foreground-secondary "
        )}
      >
        <Link
          href={item.path}
          className={cn(
            "flex items-center flex-grow  text-sm",
            level === 0 ? "font-medium" : "",
            // Siempre que se haga hover se cambia a foreground
            isOpen || isActive || isChildActive
              ? "text-foreground"
              : "text-foreground-secondary hover:text-foreground"
          )}
        >
          <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center mr-2">
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
            className={cn(
              "p-[5px] mr-1 bg-aside rounded-full outline-1 outline-secondary transition-all duration-200",
              isOpen ? "text-foreground" : "text-foreground-secondary"
            )}
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>

      {/* Contenedor para los hijos con transición suave */}
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen pt-6 -mt-6 relative background-secondary brightness-65 rounded-xl -z-0 " : "max-h-0"
          }`}
        >
          <div className="  ">
            {item.children?.map((child) => (
              <CollapsibleNavItem
                key={child.path}
                item={child}
                level={level + 1}
                collapsed={collapsed}
              />
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
