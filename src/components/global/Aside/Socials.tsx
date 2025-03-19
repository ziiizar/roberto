import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa"; // Importamos de react-icons

const Socials = () => {
  return (
    <div className="w-full flex gap-4 justify-center">
      {/* Telegram */}
      <Link
        className="size-12 rounded-2xl bg-gradient-to-br from-[#2A5470] via-[#4C669F] to-[#2A5470] flex justify-center items-center text-[#3FA8F4]"
        href={"/"}
      >
        <FaTelegramPlane size={24} />
      </Link>

      {/* Twitter/X */}
      <Link
        className="size-12 rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#222222] to-[#1A1A1A] flex justify-center items-center text-[#1DA1F2]"
        href={"/"}
      >
        <FaTwitter size={24} />
      </Link>

      {/* Facebook */}
      <Link
        className="size-12 rounded-2xl bg-gradient-to-br from-[#1D2B64] via-[#2A4383] to-[#1D2B64] flex justify-center items-center text-[#4267B2]"
        href={"/"}
      >
        <Facebook size={24} />
      </Link>

      {/* Instagram */}
      <Link
        className="size-12 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex justify-center items-center text-[#F56040]"
        href={"/"}
      >
        <Instagram size={24} />
      </Link>
    </div>
  );
};

export default Socials;
