"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Links } from "@/types/links";

const HeaderLinks = ({ links }: { links: Links[] }) => {
  const pathname = usePathname();

  // Function to remove the locale prefix from the pathname
//   const removeLocalePrefix = (path: string) => {
//     const parts = path.split('/');
//     if (parts.length > 1 && (parts[1] === 'en' || parts[1] === 'es')) { // replace 'en' and 'es' with all your locales
//       return '/' + parts.slice(2).join('/');
//     }
//     return path;
//   };

//   const cleanedPathname = removeLocalePrefix(pathname);

  return (
    <ul className="flex  gap-2 ps-2 flex-1 h-full place-content-center items-center max-lg:hidden">
      {links.map((link, index) => {
        const LinkIcon = link.icon;

        return (
          <li className="h-full w-[115px]" key={index}>
            <Link
              href={link.href}
              className={cn(
                'flex gap-3 items-center place-content-center font-semibold h-full   hover:text-foreground  transition-all text-foreground-secondary',
                // (link.href === cleanedPathname || cleanedPathname.startsWith(link.href))
                (link.href === pathname || pathname.startsWith(link.href))
                 &&
                  'border-b-2 bg-[#1C202B] border-b-[#28C5F0]'
              )}
            >
              {
            //   link.href === cleanedPathname || cleanedPathname.startsWith(link.href) 
              link.href === pathname || pathname.startsWith(link.href) 
              ? (
                <LinkIcon color={'#ed3e09'}></LinkIcon>
              ) : (
                <LinkIcon color={'white'}></LinkIcon>
              )}

              <span>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;