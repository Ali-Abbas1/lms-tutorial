"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({
    icon : Icon,
    label,
    href
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = 
    (pathname === "/" && href === "/") || 
    pathname === href ||
    pathname?.startsWith(`${href}/`);   

    const onClick = () => {
        router.push(href)
    }
    return (
        <div role="button"
        onClick={onClick}
        className={cn(
            "flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
             isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20"
        )}>
            Sidebar
        </div>
    )
}
