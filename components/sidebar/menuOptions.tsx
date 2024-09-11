import { Home, Settings, Users, BarChart, ChevronRight } from "lucide-react";

export interface MenuItemType {
  name: string;
  icon: React.ReactNode;
  href?: string;
  submenu?: MenuItemType[];
}

export const menuItems: MenuItemType[] = [
  { name: "Home", icon: <Home className="h-4 w-4" />, href: "/" },
  {
    name: "Plant Types",
    icon: <BarChart className="h-4 w-4" />,
    submenu: [
      {
        name: "Succulents",
        icon: <ChevronRight className="h-4 w-4" />,
        href: "/plants/succulents",
      },
      {
        name: "Ferns",
        icon: <ChevronRight className="h-4 w-4" />,
        href: "/plants/ferns",
      },
      {
        name: "Cacti",
        icon: <ChevronRight className="h-4 w-4" />,
        href: "/plants/cacti",
      },
      {
        name: "Orchids",
        icon: <ChevronRight className="h-4 w-4" />,
        href: "/plants/orchids",
      },
      {
        name: "Herbs",
        icon: <ChevronRight className="h-4 w-4" />,
        href: "/plants/herbs",
      },
      {
        name: "Tropical Plants",
        icon: <ChevronRight className="h-4 w-4" />,
        href: "/plants/tropical-plants",
      },
    ],
  },
  {
    name: "About",
    icon: <Users className="h-4 w-4" />,
    href: "/about",
  },
  {
    name: "Contact",
    icon: <Settings className="h-4 w-4" />,
    href: "/contact",
  },
];
