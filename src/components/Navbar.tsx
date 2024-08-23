"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    // fixed top-10 inset-x-0 max-w-xl mx-auto z-50
    return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"#"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                {/* <Image
                    src={`/AmarNirman.png`}
                    alt="hero"
                    height={10}
                    width={100}
                    className="mx-auto rounded-2xl h-full object-left-top"
                    draggable={false}
                /> */}
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Services">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/interior">Interior Design</HoveredLink>
                <HoveredLink href="/construction">Construction</HoveredLink>
            </div>
            </MenuItem>
            <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export function Navibar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="navbar bg-white fixed top-3 inset-x-0 max-w-xl rounded-md mx-auto z-50">
        <div className="flex-1">
        <Link href={"#"}>
            <Image
                src={`/AmarNirman.png`}
                alt="hero"
                height={10}
                width={100}
                className="mx-auto rounded-2xl h-full object-left-top btn btn-ghost"
                draggable={false}
            />
        </Link>
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-sm">
            <li><a>Link</a></li>
            <li>
            <details>
                <summary>Parent</summary>
                <ul className="bg-white rounded-t-none p-2">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
                </ul>
            </details>
            </li>
        </ul>
        </div>
    </div>
  )
}
