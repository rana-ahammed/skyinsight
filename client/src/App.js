import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment } from "react";

const App = () => {
	return (
		<Fragment>
			<a href="#maincontent" className="hidden">
				Skip to main content
			</a>
			<div
				id="maincontent"
				className="bg-gray-200 dark:bg-gray-800 w-full"
			>
				<Header />
				<main className="min-h-[calc(100vh-132px)]">
					<Outlet />
				</main>
				<Footer />
			</div>
		</Fragment>
	);
};

export default App;
