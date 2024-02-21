import Image from "next/image";
import style from "./new.module.css";

export default function GooeyEffect() {
	return (
		<>
			<h1 class={`${style.goo} text-zinc-900 font-bold text-[3vw] leading-[1.3] bg-yellow-200`}>
				<span>This is an example of a simple headline or text with rounded corners using a gooey SVG filter.</span>
			</h1>

			<br />
			<br />
			<br />

			<div className="max-w-[480px]">
				<p className={style.p}>
					<span>I just want to smile and live life and enjoy every moment while I still have it.</span>
				</p>
			</div>

			<svg style={{ display: "none" }}>
				<defs>
					<filter id="gooey-filter">
						<feGaussianBlur
							in="SourceGraphic"
							result="blur"
							stdDeviation="7.5"
						/>
						<feColorMatrix
							in="blur"
							result="colormatrix"
							type="matrix"
							values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 58 -9"
						/>
						<feBlend
							in="SourceGraphic"
							in2="colormatrix"
						/>
					</filter>
				</defs>
			</svg>
			<div className="flex gap-5 mt-8">
				<div className={`w-[450px] h-[400px] relative mb-10 ${style.clip_img}`}></div>

				<div className={`w-[450px] h-[400px] relative ${style.clip_img_tag}`}>
					<Image
						src="https://picsum.photos/1000"
						fill
						objectFit="cover"
						alt=""
					/>
				</div>
			</div>
			<div className={`inline-flex gap-5 ${style.round_effect} relative`}>
				<div className="w-60 h-60 bg-blue-300 rounded-full"></div>
				<div className="w-60 h-60 bg-blue-300 rounded-full"></div>
				<div className="w-60 h-60 bg-blue-300 rounded-full"></div>
			</div>
			<svg style={{ visibility: "hidden", position: "absolute" }}>
				<filter id="round-lg">
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="12"
						result="blur"
					/>
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
						result="goo"
					/>
					<feComposite
						in="SourceGraphic"
						in2="goo"
						operator="atop"
					/>
				</filter>
				<filter id="round-sm">
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="5"
						result="blur"
					/>
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
						result="goo"
					/>
					<feComposite
						in="SourceGraphic"
						in2="goo"
						operator="atop"
					/>
				</filter>
			</svg>
			{/* <svg
				style={{ visibility: "hidden", position: "absolute" }}
				version="1.1"
			>
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
							result="goo"
						/>
						<feComposite
							in="SourceGraphic"
							in2="goo"
							operator="atop"
						/>
					</filter>
				</defs>
			</svg> */}
			<svg style={{ display: "none" }}>
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							result="blur"
							stdDeviation="7.5"
						/>
						<feColorMatrix
							in="blur"
							result="colormatrix"
							type="matrix"
							values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 58 -9"
						/>
						<feBlend
							in="SourceGraphic"
							in2="colormatrix"
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
}
