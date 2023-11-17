import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="bg-cyan-500 min-h-screen w-full">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
