"use client";

import { AnimatePresence, delay, motion, cubicBezier, useInView, useAnimation, Variant } from "framer-motion";
import { Children, useRef } from "react";
import { useEffect } from "react";

type AnimatedTextProps = {
    children: React.ReactElement[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    delay?: number;
    per?: "word" | "sentence";
};

export const AnimateComponent = ({
    children,
    el: Wrapper = "div",
    className,
    once,
    repeatDelay,
    per = "word",
}: AnimatedTextProps) => {
    const controls = useAnimation();
    // const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            controls.start("visible");
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden");
                    controls.start("visible");
                }, repeatDelay);
            }
        };

        if (isInView) {
            show();
        } else {
            controls.start("hidden");
        }

        return () => clearTimeout(timeout);
    }, [isInView]);

    return (
        <AnimatePresence mode="wait">
            <motion.div className={"overflow-hidden " + className} ref={ref}
                initial={{
                    y: 0
                }}
                animate={{
                    y: 0,
                }}
                exit={{
                    y: -50,
                }}
            >
                {
                    children.map((child, index) => (
                        <motion.div
                            className="overflow-hidden inline pr-2"
                            key={index}
                            initial={{
                                y: 500
                            }}
                            animate={{
                                y: 0,
                            }}
                            transition={{ duration: 1, ease: cubicBezier(1, 0, 0, 1), delay: 0.2 * index }}
                        >
                            {child}
                        </motion.div>
                    ))
                }
            </motion.div>
        </AnimatePresence >
    );
};