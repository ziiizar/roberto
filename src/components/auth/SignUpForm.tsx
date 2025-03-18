import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { secondaryFont } from "@/styles/fonts";
import { EmailIcon, FacebookIcon, GoogleIcon, PasswordIcon } from "../ui/icons";
import Link from "next/link";
import { Checkbox } from "../ui/Checkbox";
import { Label } from "../ui/Label";

const SignUpForm = () => {
  return (
    <>
      
      <form className="w-full h-auto md:min-w-[480px] p-4 sm:p-6 md:p-8 bg-background-secondary dark:bg-dark-background-secondary rounded-[32px] flex flex-col items-center text-foreground dark:text-dark-foreground"
      >
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 place-content-center items-center">
          <h3
            className={cn(
              "text-xl sm:text-2xl font-bold",
              secondaryFont.className
            )}
          >
            Sign Up
          </h3>
          <h4 className="text-sm sm:text-base text-center">
            Choose a convenient method of registration
          </h4>
        </div>

        <Input placeholder="Enter your email or phone" icon={<EmailIcon />} />
        <Input
          placeholder="Password"
          type="password"
          icon={<PasswordIcon />}
          className="mt-3"
        />
        <div className="flex gap-2 w-full mt-3 items-start">
          <Checkbox id="terms" className="mt-1" />
          <Label
            htmlFor="terms"
            className="text-xs sm:text-sm cursor-pointer text-foreground dark:text-dark-foreground"
          >
            I agree with{" "}
            <span className="text-foreground dark:text-dark-foreground">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-foreground dark:text-dark-foreground">
              Privacy Policy
            </span>
          </Label>
        </div>

        <Button className="mt-5" size={"full"} type="submit">
          Sign Up
        </Button>
        <div className="flex flex-col my-4 sm:my-6 md:my-8 gap-3 sm:gap-4 w-full place-content-center items-center">
          <div className="flex gap-2 sm:gap-3 place-content-center items-center w-full">
            <div className="h-1 w-1/3 rounded-full opacity-20 bg-gradient-to-l from-[#181818] to-transparent dark:from-[#f0f0f0] dark:opacity-30"></div>
            <h4 className="text-sm">OR</h4>
            <div className="h-1 w-1/3 rounded-full opacity-20 bg-gradient-to-r from-[#181818] to-transparent dark:from-[#f0f0f0] dark:opacity-30"></div>
          </div>

          <Button
            className="mt-2"
            variant={"secondary"}
            size={"full"}
            type="submit"
          >
            <GoogleIcon />
            Continue with Google
          </Button>
          <Button
            className="mt-2"
            variant={"secondary"}
            size={"full"}
            type="submit"
          >
            <FacebookIcon />
            Continue with Facebook
          </Button>
        </div>

        <h4 className="text-sm sm:text-base mt-auto">
          Already have an account?{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400 hover:underline">
            <Link href={"#"}>Log In</Link>
          </span>
        </h4>
      </form>
    </>
  );
};

export default SignUpForm;
