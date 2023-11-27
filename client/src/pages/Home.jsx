import { useState } from "react";
import bgImage from "../assets/sky.jpg";
import axios from "axios";

const Home = () => {
	const [city, setCity] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		};
		axios
			.post(
				`${process.env.REACT_APP_SERVER_URL}/weather`,
				{ city },
				config
			)
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error));
	};
	return (
		<section
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
			className="h-[calc(100vh-124px)] bg-cover relative"
		>
			<form
				action=""
				className="w-3/4 md:w-1/2 top-20 absolute left-0 right-0 mx-auto flex items-center justify-center"
			>
				<input
					onChange={(e) => setCity(e.target.value)}
					value={city}
					autoComplete="off"
					type="text"
					placeholder="Enter City Name Here"
					className="w-full lg:w-1/2 p-2 rounded-l-lg text-sm md:text-lg dark:bg-slate-700 font-semibold dark:text-gray-200 border-none outline-none"
				/>
				<button
					onClick={handleSubmit}
					type="submit"
					name=""
					id=""
					className="bg-green-300 hover:bg-green-400 p-2 rounded-r-lg text-sm md:text-lg font-semibold"
				>
					Search
				</button>
			</form>
		</section>
	);
};

export default Home;
