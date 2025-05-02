import Link from "next/link";
import React from "react";
import { LogOut, Moon, Settings, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-bg-border ">
      <SidebarTrigger />
      <div className="flex items-center space-x-4">
        <Link href="/">Dashboard</Link>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-1" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-1" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-1" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
