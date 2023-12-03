import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
	return (
		<section className="w-full md:w-3/4 mx-auto md:flex md:justify-center md:items-center md:p-16">
			{/* Left Section */}
			<div className="w-full lg:w-1/2 flex flex-col items-center gap-3 mt-10 md:mt-0">
				<p className="text-3xl font-normal text-black dark:text-white">
					Contact me now!
				</p>
				<p className="text-xl font-normal text-black dark:text-white">
					Fill the form to start conversation
				</p>
				<div className="flex gap-3 items-center text-md font-semibold text-black dark:text-gray-300">
					<MdLocationPin />
					<p>Rajshahi, Bangladesh</p>
				</div>
				<div className="flex gap-3 items-center font-semibold text-md ext-black dark:text-gray-300">
					<FaPhoneAlt />
					<p>+8801303173740</p>
				</div>
				<div className="flex gap-3 items-center font-semibold text-md ext-black dark:text-gray-300">
					<MdEmail />
					<p>rana.ahammed.012@gmail.com</p>
				</div>
			</div>

			{/* Right Section */}

			<form
				action="https://formsubmit.co/rana.ahammed.012@gmail.com	"
				method="POST"
				className="flex flex-col w-full md:w-1/2 p-4 mt-10 md:mt-0"
			>
				<label
					htmlFor="name"
					className="font-semibold text-lg text-black dark:text-gray-200"
				>
					Your Full Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Rana Ahammed"
					autoComplete="off"
					required
					className="p-2 rounded-lg font-medium text-md text-gray-800 outline-none border-none mb-3 dark:bg-slate-700 dark:text-gray-200"
				/>
				<label
					htmlFor="email"
					className="font-semibold text-lg text-black dark:text-gray-200"
				>
					Email Address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="name@company.com"
					autoComplete="off"
					required
					className="p-2 rounded-lg font-medium text-md text-gray-800 outline-none border-none mb-3 dark:bg-slate-700 dark:text-gray-200"
				/>
				<label
					htmlFor="subject"
					className="font-semibold text-lg text-black dark:text-gray-200"
				>
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					autoComplete="off"
					placeholder="Let us know how we can help you"
					className="p-2 rounded-lg font-medium text-md text-gray-800 outline-none border-none mb-3 dark:bg-slate-700 dark:text-gray-200"
				/>
				<label
					htmlFor="message"
					required
					className="font-semibold text-lg text-black dark:text-gray-200"
				>
					Your Message
				</label>
				<textarea
					name="message"
					id="message"
					cols="10"
					rows="5"
					autoComplete="off"
					placeholder="Your message write here"
					required
					className="resize-none outline-none border-none p-2 rounded-lg font-medium text-md text-gray-800 dark:bg-slate-700 dark:text-gray-200"
				></textarea>
				<button
					type="submit"
					className="mt-3 bg-green-400 p-2 rounded-lg font-bold text-xl"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Contact;
