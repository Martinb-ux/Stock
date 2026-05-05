'use client';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = { name: 'John', email: 'battumartindavid@gmail.com' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 cursor-pointer">
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className='text-base font-medium text-gray-400'>
                           {user.name}
                        </span>
                    </div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <div className="flex relative items-center gap-3 py-2">
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className='text-base font-medium text-gray-400'>
                           {user.name}
                        </span>
                        <span className="text-sm text-gray-500">{user.email}</span>
                    </div>
                </div>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
