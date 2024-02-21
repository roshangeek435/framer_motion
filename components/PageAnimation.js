"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageAnimation({ children }) {
    const pathName = usePathname();
    const [page, setPage] = useState(false);

    useEffect(() => {
        if (!page) setPage(true);
        // setPage(pathName);
    }, [page]);

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

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" exit={page ? "exit" : ""}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
