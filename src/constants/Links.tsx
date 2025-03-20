import { Links } from "@/types/links";
import { routes } from "./routes";
import { Sport, Casino} from "@/components/ui/icons";
import {
    Gamepad2,
    Dices,
    Tv2,
    PlugIcon as Slot,
    Zap,
    Joystick,
    Dice1,
    WalletCardsIcon as Cards,
    Ticket,
    CircleDot,
    Bomb,
    Club,
    Fish,
    Trophy,
    Scissors,
    Sparkles,
  } from "lucide-react"
  
export const AdminLinks: Links[] = [
    {
      name: "Sport",
      href: routes.sport,
      icon: Sport,
      // coloredIcon: DashboardColor,
      
    },
    // {
    //   name: "Notifications",
    //   href: routes.adminNotifications,
    //   icon: Notification,
      
    // },
    {
      name: "Casino",
      href: routes.home,
      icon: Casino,
  
    },

  ];

 export const CasinoNavigationItems = [
    {
      title: "Casino",
      path: "/casino",
      icon: <Casino />,
      children: [
        {
          title: "New Games",
          path: "/casino/new-games",
          icon: <Sparkles size={18} />,
        },
        {
          title: "Live Casino",
          path: "/casino/live-casino",
          icon: <Tv2 size={18} />,
        },
        {
          title: "Slots",
          path: "/casino/slots",
          icon: <Slot size={18} />,
        },
        {
          title: "Crash",
          path: "/casino/crash",
          icon: <Zap size={18} />,
        },
        {
          title: "Casual",
          path: "/casino/casual",
          icon: <Joystick size={18} />,
        },
        {
          title: "Craps",
          path: "/casino/craps",
          icon: <Dice1 size={18} />,
        },
        {
          title: "Cards",
          path: "/casino/cards",
          icon: <Cards size={18} />,
        },
        {
          title: "Lottery",
          path: "/casino/lottery",
          icon: <Ticket size={18} />,
        },
        {
          title: "Roulette",
          path: "/casino/roulette",
          icon: <CircleDot size={18} />,
        },
        {
          title: "Mines",
          path: "/casino/mines",
          icon: <Bomb size={18} />,
        },
        {
          title: "Poker",
          path: "/casino/poker",
          icon: <Club size={18} />,
        },
        {
          title: "Fishing",
          path: "/casino/fishing",
          icon: <Fish size={18} />,
        },
        {
          title: "Virtual Sports",
          path: "/casino/virtual-sports",
          icon: <Trophy size={18} />,
        },
        {
          title: "Scratch",
          path: "/casino/scratch",
          icon: <Scissors size={18} />,
        },
      ],
    },
    {
      title: "Skill",
      path: "/skill",
      icon: <Gamepad2 size={18} />,
      children: [
        {
          title: "Arcade",
          path: "/skill/arcade",
          icon: <Joystick size={18} />,
        },
        {
          title: "Board Games",
          path: "/skill/board-games",
          icon: <Dices size={18} />,
        },
      ],
    },
  ]
  
