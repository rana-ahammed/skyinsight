import React from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-300 dark:bg-slate-800 p-3 w-full flex flex-col md:flex-row items-center justify-between">
			<p className="text-sm md:text-lg mb-2 font-semibold text-center text-black dark:text-white w-1/2">
				All Rights Reserved By SkyInsight
			</p>
			<section className="flex items-center justify-center gap-5 text-2xl text-black dark:text-white w-1/2">
				<a
					href="https://github.com/rana-ahammed"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub Profile Link"
					className="hover:scale-110 dark:hover:text-green-500"
				>
					<FaSquareGithub />
				</a>
				<a
					href="mailto:rana.ahammed.012@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Email Address Link"
					className="hover:scale-110 dark:hover:text-green-500"
				>
					<MdEmail />
				</a>
				<a
					href="https://linkedin.com/in/rana-ahammed1"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Linkedin Profile Link"
					className="hover:scale-110 dark:hover:text-green-500"
				>
					<FaLinkedin />
				</a>
			</section>
		</footer>
	);
};

export default Footer;
