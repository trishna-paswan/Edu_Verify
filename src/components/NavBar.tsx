'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 whitespace-nowrap px-4",
                className
            )}
        >
            <Menu setActive={setActive}>
                {/* Home */}
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>

                {/* Features Dropdown */}
                <MenuItem setActive={setActive} active={active} item="Features">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/features/student-dashboard">
                            Student Dashboard
                        </HoveredLink>
                        <HoveredLink href="/features/institution-dashboard">
                            Institution Dashboard
                        </HoveredLink>
                        <HoveredLink href="/features/recruiter-dashboard">
                            Recruiter / Employer Dashboard
                        </HoveredLink>
                        <HoveredLink href="/features/analytics">
                            Analytics Overview
                        </HoveredLink>
                    </div>
                </MenuItem>

                {/* Contact */}
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us" />
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;
