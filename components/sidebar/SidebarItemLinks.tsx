"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import MenuItem from "./SidebarItemLinks";
import { MenuItemType } from "./menuOptions";

function SidebarItemLinks({
  item,
  isSubmenuItem = false,
}: {
  item: MenuItemType;
  isSubmenuItem?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.submenu) {
    return (
      <div>
        <Button
          variant="ghost"
          className={`w-full justify-between ${isSubmenuItem ? "pl-8" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center">
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
        {isOpen && (
          <div className="ml-4">
            {item.submenu.map((subItem) => (
              <MenuItem key={subItem.name} item={subItem} isSubmenuItem />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      className={`w-full justify-start ${isSubmenuItem ? "pl-8" : ""}`}
      asChild
    >
      <a href={item.href}>
        {item.icon}
        <span className="ml-2">{item.name}</span>
      </a>
    </Button>
  );
}

export default SidebarItemLinks;
