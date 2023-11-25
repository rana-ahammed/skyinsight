import profilePic from "../assets/profile-image-circular.png";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
	return (
		<section className="w-full min-h-[calc(100vh-150px)]">
			<p className="text-center font-semibold text-4xl p-4 text-black dark:text-white">
				About Us
			</p>

			<div className="flex flex-col lg:flex-row mx-auto lg:mt-10 items-center gap-5 lg:w-3/4">
				{/* Image Section */}
				<div className="lg:order-2 md:w-1/2 p-5 shadow-xl w-3/4">
					<img
						src={profilePic}
						alt="This Website developer"
						className="w-40 h-40 mx-auto rounded-full"
					/>
					<p className="text-xl font-semibold text-center mt-3 text-black dark:text-gray-200">
						Rana Ahammed
					</p>
					<p className="text-md font-semibold text-center text-gray-700 dark:text-gray-400">
						Web Developer
					</p>
					<hr className="my-3 bg-black h-[2px] w-1/2 mx-auto" />
					<section className="flex items-center justify-center gap-4 text-2xl text-black dark:text-white">
						<a
							href="https://github.com/rana-ahammed"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-110 dark:hover:text-green-500"
						>
							<FaSquareGithub />
						</a>
						<a
							href="mailto:rana.ahammed.012@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-110 dark:hover:text-green-500"
						>
							<MdEmail />
						</a>
						<a
							href="https://linkedin.com/in/rana-ahammed1"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-110 dark:hover:text-green-500"
						>
							<FaLinkedin />
						</a>
					</section>
				</div>
				{/* Description Section */}
				<div className="md:w-1/2 py-5">
					<p className="font-semibold text-md text-gray-700 dark:text-gray-300 mx-auto w-3/4">
						Hello, I am Rana Ahammed from Weathery. Welcome to
						Weathery, your go-to destination for accurate and
						up-to-date weather forecasts! We understand the
						importance of staying informed about the ever-changing
						weather conditions, and our mission is to provide you
						with reliable and user-friendly weather information. At
						Weathery, we leverage advanced meteorological
						technologies and a team of experienced meteorologists to
						deliver precise and timely weather forecasts tailored to
						your location. Whether you're planning a weekend getaway
						or simply want to stay ahead of the weather, we've got
						you covered.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
