"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

const SignInBtn = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/api/auth/login")}
      size="sm"
      className="bg-blue-700 hover:bg-blue-500 px-6"
    >
      Sign In
    </Button>
  );
};

const UserIcon = ({ user }) => {
  const router = useRouter();

  const getInitials = (name) => {
    if (!name) return "U";
    const nameParts = name.split(" ");
    return nameParts
      .map((part) => part[0]?.toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const AvatarComp = (
    <Avatar className="w-7 h-7 outline outline-2 outline-white">
      <AvatarImage src={user.picture || ""} alt={user?.name || "User"} />
      <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
    </Avatar>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{AvatarComp}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4 mt-1">
        <DropdownMenuLabel>
          <div className="flex gap-2">
            <div className="my-auto">{AvatarComp}</div>
            <div>
              <p>{user.name}</p>
              <p className="text-xs">{user.email}</p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => router.push("/api/auth/logout")}
          className="text-red-500 hover:text-red-500"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function UserButton() {
  const { user,isLoading } = useUser();
  
  if(isLoading){
    return <div>
      <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  }
  
  return (
    <div className="mr-4">
      {user ? <UserIcon user={user} /> : <SignInBtn />}
    </div>
  );
}
