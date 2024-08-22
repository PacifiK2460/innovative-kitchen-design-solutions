"use client";

import React, { ReactElement, useEffect, useRef } from 'react';
// import { Card, CardFooter, CardHeader, CardBody, Button } from "@nextui-org/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimateComponent } from "@/components/ui/AnimateComponent";
import { AnimatedText } from "@/components/ui/AnimatedText";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image';

type ComponentCardProps = {
    children: JSX.Element;
    // description?: string;
    alt: string;
    image: string;
    className?: string;
    imageClass?: string;
    // textPosition?: "top-left" | "top-center" | "top-right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right";
    delay?: number;
    href?: string;
}

const CardComponent: React.FC<ComponentCardProps> = ({ children, image, className, imageClass, delay = 0, href = "#", alt = "" }) => {
    const ref = useRef(null);
    const router = useRouter();
    return (
        <AnimatePresence>
            <motion.div className={`relative overflow w-full h-full drop-shadow-2xl cursor-pointer ${className}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay }}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 }
                }}

                layout

                ref={ref}
                aria-hidden
                onClick={() => {
                    router.push(href);
                }}
            >
                {/* <Link href={href}>
                    {children}
                    <Image src={image} className={`-z-10 w-full h-screen object-cover brightness-75 ${imageClass}`} alt={alt} fill quality={100} priority loading="eager" />
                </Link> */}
                {/* <Link href={href}>
                    <Image src={image} alt="fondo" className={imageClass} quality={100} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                    <motion.div className={`absolute z-10 ${className}`}>
                        {children}
                    </motion.div>
                </Link> */}

                <Link href={href}>
                    <AspectRatio ratio={9 / 16}>
                        <Image src={image} alt="Image" className="rounded-none object-cover" width={1000} height={0}/>
                    </AspectRatio>
                    {/* <Image src={image} alt="fondo" className={`-z-10 w-full h-screen object-cover ${className}`} quality={100} width={0} height={0} style={{ width: '100%', height: 'auto' }} /> */}
                    <motion.div className={`absolute z-10 ${className}`}>
                        texto
                        {/* <AnimatedText text={title} className={` ${titleClassName} `} /> */}
                        {/* <AnimatedText text={description} className={` ${descriptionClassName} `} /> */}
                    </motion.div>
                </Link>
            </motion.div>
        </AnimatePresence >
    )
}

export { CardComponent };