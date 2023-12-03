import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { LuMoon } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { GoSun } from "react-icons/go";

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);

	const setDark = () => {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
		setIsDark(true);
	};

	const setLight = () => {
		document.documentElement.classList.remove("dark");
		localStorage.removeItem("theme");
		setIsDark(false);
	};

	const darkModeToggler = () => {
		if (isDark) {
			setLight();
		} else {
			setDark();
		}
	};

	const hamburgerMenuToggler = () => {
		setIsNavOpen((prev) => !prev);
	};

	useEffect(() => {
		if (localStorage.getItem("theme") === "dark") setDark();
		else setLight();
	}, []);
	return (
		<>
			<header className="w-full bg-gray-300 dark:bg-slate-800 shadow-lg top-0 sticky z-50">
				{/* Tablet and Desktop Screens */}
				<nav className="mx-auto w-full lg:w-3/4 flex items-center justify-between p-3">
					<Link to="/">
						<img
							src={logo}
							alt="logo"
							className="w-10 h-10 hover:border-2"
						/>
					</Link>
					<section className="hidden md:flex font-semibold text-lg gap-10 justify-between text-black dark:text-white">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "dark:text-green-500 text-green-800 hover:underline"
									: "hover:underline hover:text-green-800 dark:hover:text-green-500"
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive
									? "dark:text-green-500 text-green-800 hover:underline"
									: "hover:underline hover:text-green-800 dark:hover:text-green-500"
							}
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive
									? "dark:text-green-500 text-green-800 hover:underline"
									: "hover:underline hover:text-green-800 dark:hover:text-green-500"
							}
						>
							Contact
						</NavLink>

						{/* Dark Mode Toggler */}
						<button onClick={darkModeToggler}>
							{isDark ? (
								<GoSun className="hover:text-green-800 dark:hover:text-green-500" />
							) : (
								<LuMoon className="hover:text-green-800 dark:hover:text-green-500" />
							)}
						</button>
					</section>

					{/* Hamburger Icon For Mobile Screens*/}
					<button
						className="md:hidden"
						aria-label="hamburger-menu"
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						{isNavOpen ? (
							<RxCross2 className="w-10 h-10 text-black dark:text-white" />
						) : (
							<GiHamburgerMenu className="w-10 h-10 text-black dark:text-white" />
						)}
					</button>
				</nav>
			</header>

			{/* Hamburger Menu For Mobile Screens */}
			{isNavOpen && (
				<section className="flex md:hidden bg-slate-300 dark:bg-gray-800 items-center p-3 gap-3 flex-col ml-auto w-full font-semibold text-lg text-black dark:text-white sticky top-[64px]">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "dark:text-green-500 text-green-800 hover:underline"
								: "hover:underline hover:text-green-800 dark:hover:text-green-500"
						}
						onClick={hamburgerMenuToggler}
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive
								? "dark:text-green-500 text-green-800 hover:underline"
								: "hover:underline hover:text-green-800 dark:hover:text-green-500"
						}
						onClick={hamburgerMenuToggler}
					>
						About
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive
								? "dark:text-green-500 text-green-800 hover:underline"
								: "hover:underline hover:text-green-800 dark:hover:text-green-500"
						}
						onClick={hamburgerMenuToggler}
					>
						Contact
					</NavLink>

					{/* Dark Mode Toggler */}
					<button
						onClick={() => {
							darkModeToggler();
							hamburgerMenuToggler();
						}}
						className="hover:text-green-800 dark:hover:text-green-500"
					>
						{isDark ? <GoSun /> : <LuMoon />}
					</button>
				</section>
			)}
		</>
	);
};

export default Header;
