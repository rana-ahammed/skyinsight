import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<Fragment>
			<Toaster />
			<a href="#maincontent" className="hidden">
				Skip to main content
			</a>
			<div
				id="maincontent"
				className="bg-gray-200 dark:bg-gray-800 w-full"
			>
				<Header />
				<main className="min-h-[calc(100vh-124px)]">
					<Outlet />
				</main>
				<Footer />
			</div>
		</Fragment>
	);
};

export default App;
