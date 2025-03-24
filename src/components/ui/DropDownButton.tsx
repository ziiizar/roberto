import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export const DropDownButton = ({className}:{className?:string}) => {
  return (
    <button className={cn("p-[5px] mr-1 text-foreground-secondary background-secondary border-secondary cursor-pointer hover:from-gray-600 hover:shadow-gray-400/30 hover:to-gray-700 rounded-xl transition-all duration-200", className)}>
      <ChevronDown size={16} />
    </button>
  );
};

export default DropDownButton;
