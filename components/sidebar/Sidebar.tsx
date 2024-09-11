import { ScrollArea } from "@radix-ui/react-scroll-area";
import { menuItems } from "./menuOptions";
import MenuItem from "./SidebarItemLinks";

export default function Sidebar() {
  return (
    <div className="flex h-screen w-full flex-col">
      <ScrollArea className="flex-1">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
