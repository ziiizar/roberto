import Link from "next/link";
import { Twitter, Facebook,Instagram, Telegram } from "@/components/ui/icons";

const Socials = () => {
  return (
    <div className="w-full flex gap-4 justify-center">
      {/* Telegram */}
      <Link
        className="size-12 rounded-2xl bg-radial from-[#1B394E]  to-[#1B394E99] flex justify-center items-center text-[#3FA8F4]"
        href={"/"}
      >
        <Telegram />
      </Link>

      {/* Twitter/X */}
      <Link
        className="size-12 rounded-2xl bg-radial from-[#253E52]  to-[#253E5299] flex justify-center items-center text-[#1DA1F2]"
        href={"/"}
      >
        <Twitter />
      </Link>

      {/* Facebook */}
      <Link
        className="size-12 rounded-2xl bg-radial from-[#272E44]  to-[#272E4499] flex justify-center items-center text-[#4267B2]"
        href={"/"}
      >
        <Facebook />
      </Link>

      {/* Instagram */}
      <Link
        className="size-12 rounded-2xl bg-radial from-pink-#DC427699 to-pink-700/20  flex justify-center items-center text-[#F56040]"
        href={"/"}
      >
        <Instagram  />
      </Link>
    </div>
  );
};

export default Socials;
