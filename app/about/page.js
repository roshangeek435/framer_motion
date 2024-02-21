"use client";

import PageAnimation from "@/components/PageAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutPage() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, [show]);

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: "100vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "tween", duration: 0.5, when: "beforeChildren" },
        },
        exit: {
            x: "-100vw",
            opacity: 0,
            transition: { delay: 0.25, type: "easeInOut" },
        },
    };

    const childrenVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 0.5 },
        },
    };

    const svg = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut" },
        },
    };

    const svgPath = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
        },
    };

    return (
        <PageAnimation>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                <h1 className="text-xl font-bold">About Page</h1>

                <motion.p variants={childrenVariants} className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id aliquam sunt consequatur soluta ratione blanditiis optio molestiae aspernatur culpa, reiciendis debitis magni,
                    maiores suscipit, repellat impedit officiis perspiciatis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero et, aliquid libero excepturi, fuga quasi
                    repellat beatae facere accusamus ipsam ducimus voluptas quaerat odio corporis praesentium cum, sequi laborum.
                </motion.p>

                <AnimatePresence>
                    {show && (
                        <motion.p variants={childrenVariants} className="mt-10" exit={{ y: -100, opacity: 0 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id aliquam sunt consequatur soluta ratione blanditiis optio molestiae aspernatur culpa, reiciendis debitis
                            magni, maiores suscipit, repellat impedit officiis perspiciatis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero et, aliquid libero excepturi,
                            fuga quasi repellat beatae facere accusamus ipsam ducimus voluptas quaerat odio corporis praesentium cum, sequi laborum.
                        </motion.p>
                    )}
                </AnimatePresence>
                <motion.div className="flex gap-2 items-center mt-5">
                    <motion.svg width="100" height="100" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={"mt-5"} variants={svg} initial="hidden" animate="visible">
                        <motion.path
                            d="M13.0597 15.9101C12.7497 15.8701 12.3897 15.7401 11.9897 15.5001L9.74974 14.1701C9.33974 13.9301 8.67973 13.9301 8.26973 14.1701L6.02974 15.5001C4.41974 16.4501 3.44974 15.7401 3.86974 13.9201L4.39974 11.6101C4.49974 11.1801 4.31975 10.5701 4.00975 10.2501L2.14974 8.3901C1.04974 7.2901 1.40974 6.18009 2.93974 5.93009L5.32973 5.5301C5.72973 5.4601 6.20976 5.1101 6.38976 4.7501L7.70973 2.1101C8.42973 0.680098 9.59974 0.680098 10.3097 2.1101L11.6297 4.7501C11.8097 5.1101 12.2897 5.4701 12.6897 5.5301L15.0797 5.93009C16.6097 6.19009 16.9697 7.2901 15.8697 8.3901L14.0098 10.2501C13.6998 10.5601 13.5197 11.1701 13.6197 11.6101"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            variants={svgPath}
                        />
                    </motion.svg>

                    <motion.svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" variants={svg} initial="hidden" animate="visible">
                        <motion.path
                            d="M16.0597 21.9101C15.7497 21.8701 15.3897 21.7401 14.9897 21.5001L12.7497 20.1701C12.3397 19.9301 11.6797 19.9301 11.2697 20.1701L9.02974 21.5001C7.41974 22.4501 6.44974 21.7401 6.86974 19.9201L7.39974 17.6101C7.49974 17.1801 7.31975 16.5701 7.00975 16.2501L5.14974 14.3901C4.04974 13.2901 4.40974 12.1801 5.93974 11.9301L8.32973 11.5301C8.72973 11.4601 9.20976 11.1101 9.38976 10.7501L10.7097 8.1101C11.4297 6.6801 12.5997 6.6801 13.3097 8.1101L14.6297 10.7501C14.8097 11.1101 15.2897 11.4701 15.6897 11.5301L18.0797 11.9301C19.6097 12.1901 19.9697 13.2901 18.8697 14.3901L17.0098 16.2501C16.6998 16.5601 16.5197 17.1701 16.6197 17.6101"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            variants={svgPath}
                        />
                        <motion.path d="M6 9V2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={svgPath} />
                        <motion.path d="M18 9V2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={svgPath} />
                        <motion.path d="M12 4V2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={svgPath} />
                    </motion.svg>

                    <motion.svg width="100" height="100" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" variants={svg} initial="hidden" animate="visible">
                        <motion.path
                            d="M3.18 4.37996C1.67 6.29996 0.839999 8.75996 1.03 11.42C1.39 16.57 5.76 20.76 10.99 20.99C14.68 21.15 17.98 19.43 19.96 16.72C20.78 15.61 20.34 14.87 18.97 15.12C18.3 15.24 17.61 15.29 16.89 15.26C12 15.06 8 10.97 7.98 6.13996C7.97 4.83996 8.24 3.60996 8.73 2.48996C9.27 1.24996 8.62 0.659961 7.37 1.18996"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            variants={svgPath}
                        />
                    </motion.svg>

                    <motion.svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" variants={svg} initial="hidden" animate="visible">
                        <motion.path
                            d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            variants={svgPath}
                        />
                        <motion.path
                            d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            variants={svgPath}
                        />
                    </motion.svg>
                </motion.div>
            </motion.div>

            <div className="mt-[100vh]">
                <motion.svg width="1942" height="806" viewBox="0 0 1942 806" fill="none" xmlns="http://www.w3.org/2000/svg" variants={svg} initial="hidden" whileInView="visible">
                    <motion.path
                        d="M0 8H1319.8C1428.8 8 1517.1 96.4 1517.1 205.4C1517.1 314.4 1428.7 402.7 1319.8 402.7H1325.1H492.1C383.1 402.7 294.8 491.1 294.8 600.1C294.8 709.1 383.2 797.4 492.2 797.4H1941.7"
                        stroke="#fff"
                        strokeWidth="16"
                        variants={svgPath}
                    />
                </motion.svg>
            </div>
        </PageAnimation>
    );
}
