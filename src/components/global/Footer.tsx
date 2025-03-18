import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { EmailIcon } from "../ui/icons";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row h-auto md:h-20 gap-6 md:gap-0 justify-between items-center py-6 md:py-2 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-foreground dark:text-dark-foreground">
      <div className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start text-sm max-sm:hidden">
          <li className="hover:underline cursor-pointer">Terms and Conditions</li>
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div className="flex w-full md:w-auto max-w-md">
        <Input placeholder="E-mail address" type="text" icon={<EmailIcon />} className="w-full" />
        <Button className="-ml-10 h-[52px]">Subscribe</Button>
      </div>
    </footer>
  );
};

export default Footer;