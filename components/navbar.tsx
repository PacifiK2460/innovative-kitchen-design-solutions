"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { VercelLogoIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import ListItem from '@/components/ui/list-item';

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Design Portafolio",
        href: "#",
        description: "lore ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        title: "Testimonial",
        href: "#",
        description: "lore ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        title: "Philosophy",
        href: "#",
        description: "lore ipsum dolor sit amet consectetur adipisicing elit.",
    },
]


export default function Navbar() {
    return (
        <nav className="z-50 bg-white bg-opacity-75 backdrop-blur-xl min-w-screen h-16 sticky">
            <div className='g:mx-48 flex content-center gap-6 min-w-screen h-16 sticky mx-5'>
                <motion.div layout className="flex-none h-full w-auto content-center font-bold">
                    <Link href="/" className='flex-row content-center gap-1 align-middle justify-center inline-flex items-center'>
                        <VercelLogoIcon className="w-8 h-8" />
                        IKS
                    </Link>
                </motion.div>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[70vw] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <VercelLogoIcon className="w-8 h-8" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    IKS
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Beautifully designed kitchen designs that you can buy. Accessible. Customizable.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="#" title="About Us">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </ListItem>
                                    <ListItem href="#" title="Our Advantages">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore odit qui optio, nostrum deserunt nisi sit unde aliquam eveniet ipsam.
                                    </ListItem>
                                    <ListItem href="#" title="Showcase Video">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, repellat modi! Id corrupti illum, deleniti fugiat quos rerum, repellendus quae quasi, itaque dolorem natus reiciendis voluptas!
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>ShowCase</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[50vw] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle() + " flex-row content-center gap-1 align-middle justify-center inline-flex items-center"} href="https://santiago-lara.dev" target="_blank">
                                Santiago Lara
                                <OpenInNewWindowIcon className="w-4 h-4" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>


        </nav>
    );
}