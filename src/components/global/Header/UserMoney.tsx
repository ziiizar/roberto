import { Button } from "@/components/ui/Button";
import { GoldCoin, GreenCoin } from "@/components/ui/icons";
import DropDownButton from "../../ui/DropDownButton";

export default function UserMoney() {
  return (
    <div className="flex items-center gap-4  justify-between max-[1300px]:hidden">
      <div className="flex items-center  w-[300px] h-[44px] bg-[#171A22] rounded-xl">
        <div className="flex items-center gap-3 px-3 py-1 rounded-full ">
          <GoldCoin />
          <span className="text-foreground">0.00</span>
            <DropDownButton></DropDownButton>
        </div>

        <div className=" h-4 w-[1.5px] bg-gray-700"></div>
        <div className="flex items-center gap-3 px-3 py-1 rounded-full ">
          <GreenCoin></GreenCoin>
          <span className="text-foreground">0.00</span>
          <DropDownButton></DropDownButton>
        </div>
      </div>
      <div className="flex -ml-10">
        <Button className="rounded-l-2xl rounded-r-none border border-[#6D80FE] ">
          Deposit
        </Button>
        <Button
          variant="secondary"
          className="rounded-r-2xl rounded-l-none border border-[#3F4655]"
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
}
