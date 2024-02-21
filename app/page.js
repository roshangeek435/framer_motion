"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
	const [animation, setAnimation] = useState(false);
	const div = useRef(null);

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, scale: 0.8, transition: { type: "spring", stiffness: 300, damping: 5 } }
	};

	const containerVariants = {
		hidden: {
			opacity: 0,
			x: "100vw"
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "tween", duration: 0.5 }
		},
		exit: {
			x: "-100vw",
			opacity: 0,
			transition: { delay: 0.25, type: "easeInOut" }
		}
	};

	const childrenVariants = {
		hidden: {
			opacity: 0,
			y: 200
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "tween", duration: 0.5, delay: 0.5 }
		}
	};

	const hoverRepeatAnimation = {
		hover: {
			// scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
			scale: 1.2,
			transition: { type: "spring", stiffness: 200, damping: 100, ease: "easeInOut", repeat: Infinity }
		}
	};

	return (
		<>
			<AnimatePresence>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<h1 className="text-xl font-bold">Home Page</h1>

					<motion.div variants={childrenVariants}>
						<div className="flex gap-5">
							<motion.div
								className="w-40 h-40 bg-white mt-5"
								initial={{ opacity: 0, scale: 1.2, x: -100 }}
								animate={{ opacity: 1, scale: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
							></motion.div>

							<motion.div
								className="w-40 h-40 bg-white mt-5"
								variants={hoverRepeatAnimation}
								whileHover="hover"
							></motion.div>
						</div>

						<motion.div
							className="h-full bg-indigo-950 mt-5 p-5"
							ref={div}
						>
							<motion.div
								className="w-40 h-40 bg-white cursor-grab"
								transition={{ duration: 0.5 }}
								drag
								dragConstraints={div}
								whileTap={{ cursor: "grabbing" }}
							></motion.div>
						</motion.div>

						<motion.div className="h-full bg-indigo-800 mt-5 p-10">
							<motion.div
								className="w-[500px] h-[500px] bg-white mx-auto"
								initial={{ opacity: 0, scale: 1.2 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							></motion.div>
							<motion.div
								className="w-[500px] h-[500px] bg-white mx-auto mt-[50vh]"
								initial={{ opacity: 0, scale: 1.2 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							></motion.div>
						</motion.div>

						<div className="border-2 p-5 mt-5">
							<motion.div
								className="w-[500px] h-[500px] bg-white mx-auto mb-5"
								variants={variants}
								initial="hidden"
								animate={animation ? "visible" : "hidden"}
								transition={{ duration: 1 }}
							></motion.div>

							<button
								className="bg-sky-600 px-5 py-3 rounded-lg mx-auto block transition-color duration-2 ease-in-out hover:bg-sky-700"
								onClick={() => setAnimation((prev) => !prev)}
							>
								Toggle Animation
							</button>
						</div>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</>
	);
}
