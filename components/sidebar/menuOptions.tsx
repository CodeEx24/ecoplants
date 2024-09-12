import {
  Home,
  Settings,
  Users,
  ShoppingCart,
} from "lucide-react";

export interface MenuItemType {
  name: string;
  icon: React.ReactNode;
  href?: string;
  submenu?: MenuItemType[];
}

export const menuItems: MenuItemType[] = [
  { name: "Home", icon: <Home className="h-4 w-4" />, href: "/" },
  { name: "Shop", icon: <ShoppingCart className="h-4 w-4" />, href: "/shop" },

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
