import { useState } from "react";
import bgImage from "../assets/sky.jpg";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 426 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 426, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};
const Home = () => {
	const [city, setCity] = useState("");
	const [current, setCurrent] = useState({});
	const [hourly, setHourly] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
		type: "region",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		};

		await axios
			.all([
				axios.post(
					`${process.env.REACT_APP_SERVER_URL}/current`,
					{ city },
					config
				),
				axios.post(
					`${process.env.REACT_APP_SERVER_URL}/hourly`,
					{ city },
					config
				),
			])
			.then(
				axios.spread((firstResponse, secondResponse) => {
					setCurrent(firstResponse.data);
					setHourly(secondResponse.data);
					const message =
						firstResponse.data.message ||
						secondResponse.data.message;
					if (message) {
						toast.error(`There is no city in this name`);
					}
				})
			)
			.catch((error) => console.log(error));
		setIsLoading(false);
		setCity("");
	};

	return (
		<section
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
			className="min-h-[calc(100vh-124px)] bg-cover"
		>
			<form
				action=""
				className="w-full md:w-1/2 top-20 py-10 px-3 left-0 right-0 mx-auto flex items-center justify-center"
			>
				<input
					onChange={(e) => setCity(e.target.value)}
					value={city}
					autoComplete="off"
					id="city"
					name="name"
					type="text"
					placeholder="Enter Only City Name Here"
					className="w-full lg:w-1/2 p-2 rounded-l-lg text-sm md:text-lg dark:bg-slate-700 font-semibold dark:text-gray-200 border-none outline-none"
				/>
				<button
					onClick={handleSubmit}
					type="submit"
					name="search"
					id="search"
					disabled={isLoading}
					className="bg-green-300 hover:bg-green-400 p-2 rounded-r-lg text-sm md:text-lg font-semibold"
				>
					{isLoading ? "Loading..." : "Search"}
				</button>
			</form>
			{/* Weather Details */}
			{current.main && (
				<div className="top-40 left-0 right-0 mx-auto bg-slate-300 dark:bg-slate-700 shadow-xl w-3/4 md:w-1/2 lg:w-1/4 flex flex-col justify-center rounded-lg p-3 items-center gap-2">
					<p className="text-md font-medium dark:text-gray-300">
						<span className="text-xl font-bold">Local Time:</span>{" "}
						{moment()
							.utcOffset(current.timezone / 60)
							.format("ddd, LT")}
					</p>
					<p className="font-light text-md dark:text-gray-200">
						<span className="text-xl md:text-3xl font-bold dark:text-gray-200">
							{current.name}{" "}
						</span>
						({regionNamesInEnglish.of(current.sys.country)})
					</p>

					<p className="text-4xl font-bold dark:text-gray-300">
						{Math.floor(current.main.temp)}&deg;C
					</p>
					<p className="text-2xl font-semibold dark:text-gray-300">
						{current.weather[0].description}
					</p>
					<p className="text-lg font-medium dark:text-gray-300">
						<span className="text-xl font-semibold">Sunrise:</span>{" "}
						{moment
							.utc(current.sys.sunrise, "X")
							.add(current.timezone, "seconds")
							.format("LT")}
					</p>
					<p className="text-lg font-medium dark:text-gray-300">
						<span className="text-xl font-semibold">Sunset:</span>{" "}
						{moment
							.utc(current.sys.sunset, "X")
							.add(current.timezone, "seconds")
							.format("LT")}
					</p>
					<p className="text-md font-medium dark:text-gray-300">
						Min Temp: {Math.floor(current.main.temp_min)}&deg;C
					</p>
					<p className="text-md font-medium dark:text-gray-300">
						Max Temp: {Math.floor(current.main.temp_max)}&deg;C
					</p>
				</div>
			)}

			{/* Forecast Details */}
			{hourly.list && (
				<Carousel
					swipeable={false}
					arrows="true"
					draggable={false}
					responsive={responsive}
					ssr={true}
					infinite={false}
					autoPlay={false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					{hourly.list.map((list, index) => (
						<div
							className="bg-slate-300 dark:text-gray-200 flex justify-center items-center flex-col dark:bg-slate-700 rounded-lg shadow-xl m-10 py-3 px-8"
							key={index}
						>
							<p className="text-lg font-normal">
								{moment
									.utc(list.dt, "X")
									.add(current.timezone, "seconds")
									.format("ddd, LT")}
							</p>
							<p className="font-semibold text-4xl">
								{Math.floor(list.main.temp)}&deg;C
							</p>
							<p className="font-bold mt-1 text-2xl">
								{list.weather[0].description}
							</p>
						</div>
					))}
				</Carousel>
			)}
		</section>
	);
};

export default Home;
