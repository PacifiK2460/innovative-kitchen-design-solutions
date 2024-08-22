"use client";

import { AnimatePresence, cubicBezier, motion, useAnimation, useInView } from "framer-motion";
import { exit } from "process";
import { useEffect, useRef } from "react";

type AnimatedTextProps = {
    text: string;
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    delay?: number;
    per?: "word" | "sentence";
    duration?: number;
    Wrapper?: keyof JSX.IntrinsicElements;
};

export const AnimatedText = ({
    text,
    el: Wrapper = "div",
    className,
    once = false,
    repeatDelay,
    per = "word",
    duration = 0.7,
    delay = 0.1
}: AnimatedTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once });
    const controls = useAnimation();

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
            <motion.div className={"overflow-hidden " + className}
                ref={ref}
                initial="hidden"
                exit="hidden"
                animate={controls}
                variants={{
                    visible: {
                        opacity: 1,
                    },
                    hidden: {
                        opacity: 0,
                    },
                    exit: {
                        opacity: 0,
                    }
                }}
                transition={{
                    duration: 0.5,
                }}
                aria-hidden
                layout
            >
                <Wrapper className="hidden">
                    {text}
                </Wrapper>
                {
                    text.split(" ").map((word, index) => (
                        <motion.div
                            layout
                            ref={ref}
                            className="overflow-hidden inline-block"
                            key={index}
                            // initial={{
                            //     opacity: 0,
                            // }}
                            // animate={{
                            //     y: 0,
                            //     opacity: 1,
                            // }}
                            // exit={{ opacity: 0 }}
                            transition={{
                                // duration: 50, ease: cubicBezier(1, 0, 0, 1), delay: (index * delay),
                                type: "spring",
                                stiffness: 50,
                                mass: 0.5,
                            }}
                            variants={{
                                visible: {
                                    y: 0, opacity: 1, transition: {
                                        duration: duration, ease: cubicBezier(1, 0, 0, 1), delay: (index * delay),
                                    }
                                },
                                hidden: { y: 500, opacity: 0 },
                                exit: { opacity: 0 }
                            }}
                        >
                            {word}
                            {index < text.split(" ").length - 1 && (
                                <span>&nbsp;</span>
                            )}
                        </motion.div>
                    ))
                }
            </motion.div>
        </AnimatePresence>
    );
};