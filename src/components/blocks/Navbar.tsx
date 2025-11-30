import * as React from "react";
import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import {ModeToggle} from "@/components/menu-toggle.tsx";

export const Navbar: React.FC = () => {
    return (
        <>
            <nav className="w-full fixed top-0 left-0 z-50 border-b px-4 py-2 flex items-center">
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-4">
                        <NavigationMenuItem>
                                <ModeToggle/>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="block px-4 py-2">
                                Link
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

        </>
    )
}