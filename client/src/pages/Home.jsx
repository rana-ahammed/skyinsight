import skyImg from "../assets/sky.jpg";

const Home = () => {
	return (
		<section className="w-full">
			<img
				src={skyImg}
				alt="sky-background"
				className="w-full h-[calc(100vh-132px)]"
			/>
			{/* <form action="">
				<input type="text" />
				<button type="submit" name="" id="" className="bg-sky-400">
					Search
				</button>
			</form> */}
		</section>
	);
};

export default Home;
