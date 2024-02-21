"use client";

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function DarkMode() {
	const [isToggled, setToggle] = useState(false);
	const { setTheme } = useTheme();

	// useEffect(() => {
	// 	if (!isToggled) {
	// 		setTheme("light");
	// 	} else {
	// 		setTheme("dark");
	// 	}
	// }, [isToggled, setTheme]);

	return (
		<>
			<Classic
				duration={750}
				className="text-8xl"
				toggled={isToggled}
				toggle={setToggle}
				// onToggle={() => (!isToggled ? setTheme("light") : setTheme("dark"))}
			/>

			<div onClick={() => setTheme("light")}>
				<FiSun />
			</div>

			<div onClick={() => setTheme("dark")}>
				<FiMoon />
			</div>

			<div className="dark:bg-black p-10">
				<h1 className="dark:text-white">Hello World</h1>
			</div>
		</>
	);
}
