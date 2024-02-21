"use client";

import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ZoomEffect() {
	const container = useRef(null);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"]
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const image = [
		{
			src: "https://picsum.photos/2000",
			scale: scale4
		},
		{
			src: "https://picsum.photos/2500",
			scale: scale5,
			className: "-top-[40vh] left-[0vw] w-[22vw] h-[30vh]"
		},
		{
			src: "https://picsum.photos/4000",
			scale: scale6,
			className: "-top-[10vh] -left-[25vw] w-[20vw] h-[48vh]"
		},
		{
			src: "https://picsum.photos/3502",
			scale: scale5,
			className: "left-[27vw] w-[25vw] h-[25vh]"
		},
		{
			src: "https://picsum.photos/3000",
			scale: scale6,
			className: "top-[19vw] left-[5vw] w-[20vw] h-[25vh]"
		},
		{
			src: "https://picsum.photos/4800",
			scale: scale8,
			className: "top-[19vw] -left-[22.5vw] w-[30vw] h-[25vh]"
		},
		{
			src: "https://picsum.photos/4600",
			scale: scale9,
			className: "top-[20vw] left-[25vw] w-[15vw] h-[15vh]"
		}
	];

	return (
		<>
			<div
				className="relative h-[300vh] w-full"
				ref={container}
			>
				<div className="sticky top-0 h-screen w-full mt-[50vh] mb-[100vh] overflow-hidden">
					{image.map(({ src, scale, className }, index) => {
						return (
							<motion.div
								className="w-full h-full absolute top-0 flex items-center justify-center"
								style={{ scale: scale }}
								key={index}
							>
								<motion.div className={`relative ${className ? className : "w-[25vw] h-[40vh]"}`}>
									<Image
										className="object-cover"
										fill
										src={src}
										alt="dsdsd"
									/>
								</motion.div>
							</motion.div>
						);
					})}
				</div>

				<div className="prose prose-base prose-zinc mt-[calc(100vh+3rem)] max-w-[960px] mx-auto text-2xl leading-10">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eum quisquam qui consectetur ea reprehenderit pariatur modi fugiat rerum, amet quia numquam quasi, a vel provident sit blanditiis
						sapiente nesciunt.
					</p>
					<p>
						Facere incidunt quis voluptas mollitia alias suscipit fuga impedit voluptate dolor odio tempore a sequi amet cupiditate beatae, quidem perspiciatis dolores omnis accusantium. Magnam ratione
						necessitatibus corrupti ipsum officiis quidem, pariatur voluptatum blanditiis quas voluptate nobis cupiditate. Reprehenderit modi repellendus atque qui iusto, itaque in. Omnis non, doloremque ex
						numquam quaerat sapiente.
					</p>
					<p>
						Deserunt accusamus aliquid expedita porro corrupti nisi distinctio omnis consequatur aut debitis ipsa doloribus totam quaerat quos, sint molestias repellat laudantium et recusandae cumque neque?
						Exercitationem inventore assumenda repudiandae, perferendis sapiente aspernatur velit tenetur eos ipsum consequatur ducimus atque cumque. Inventore veritatis magni illo sapiente possimus? Nihil ipsa
						eius qui modi ut.
					</p>
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, molestiae.</blockquote>

					<pre>
						<code class="language-html">
							&lt;article class="prose"&gt; &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt; &lt;p&gt; For years parents have espoused the health benefits of eating garlic bread with
							cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween. &lt;/p&gt; &lt;p&gt; But a recent study shows
							that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. &lt;/p&gt; &lt;!-- ... --&gt; &lt;/article&gt;
						</code>
					</pre>
					<hr />
					<table>
						<thead>
							<tr>
								<th>Wrestler</th>
								<th>Origin</th>
								<th>Finisher</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Bret "The Hitman" Hart</td>
								<td>Calgary, AB</td>
								<td>Sharpshooter</td>
							</tr>
							<tr>
								<td>Stone Cold Steve Austin</td>
								<td>Austin, TX</td>
								<td>Stone Cold Stunner</td>
							</tr>
							<tr>
								<td>Randy Savage</td>
								<td>Sarasota, FL</td>
								<td>Elbow Drop</td>
							</tr>
							<tr>
								<td>Vader</td>
								<td>Boulder, CO</td>
								<td>Vader Bomb</td>
							</tr>
							<tr>
								<td>Razor Ramon</td>
								<td>Chuluota, FL</td>
								<td>Razor's Edge</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
