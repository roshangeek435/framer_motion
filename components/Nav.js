"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, MotionValue, motion, useMotionValue, useTransform } from "framer-motion";

export default function Nav() {
    const navData = [
        {
            path: "/",
            title: "Home",
        },
        {
            path: "/about",
            title: "About",
        },
        {
            path: "/contact",
            title: "Contact",
        },
    ];

    const pathName = usePathname();
    const MotionLink = motion(Link);

    const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
        const input_range = inputUpper - inputLower;
        const output_range = outputUpper - outputLower;

        return (value) => outputLower + (((value - inputLower) / input_range) * output_range || 0);
    };

    const setTransform = (eventTarget, event, x, y) => {
        const bounds = eventTarget.getBoundingClientRect();
        const relativeX = event.clientX - bounds.left;
        const relativeY = event.clientY - bounds.top;
        const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
        const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
        x.set(xRange * 10);
        y.set(yRange * 10);
    };

    return (
        <>
            <div className="bar w-full h-[10px] fixed top-0 left-0 z-30 bg-lime-500"></div>
            <nav className="navbar navbar-expand-lg navbar-light p-20 bg-slate-50 mb-5">
                <ul className="flex gap-5">
                    <AnimatePresence>
                        {navData.map((data, index) => {
                            const x = useMotionValue(0);
                            const y = useMotionValue(0);
                            const textX = useTransform(x, (latest) => latest * 0.5);
                            const textY = useTransform(y, (latest) => latest * 0.5);
                            return (
                                <motion.li
                                    key={index}
                                    onPointerMove={(event) => {
                                        const item = event.currentTarget;
                                        setTransform(item, event, x, y);
                                    }}
                                    onPointerLeave={() => {
                                        x.set(0);
                                        y.set(0);
                                    }}
                                    style={{ x, y }}
                                    className="transition-all duration-1s ease-out"
                                >
                                    <MotionLink
                                        href={data.path}
                                        className={`text-black relative font-medium text-md px-5 py-3 flex rounded-md ${
                                            pathName === data.path ? "bg-slate-200" : ""
                                        } transition-all duration-1s ease-out hover:bg-slate-200 `}
                                    >
                                        <motion.span className="relative z-10" style={{ x: textX, y: textY }}>
                                            {data.title}
                                        </motion.span>

                                        {pathName === data.path && (
                                            <motion.div transition={{ type: "spring" }} layoutId="underline" className="absolute rounded-md left-0 bottom-0 bg-blue-300 w-full h-full"></motion.div>
                                        )}
                                    </MotionLink>
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </ul>
            </nav>
        </>
    );
}
