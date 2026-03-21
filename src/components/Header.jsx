import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full">
			<nav className="w-full px-48 py-4 bg-white/75 backdrop-blur-md border-b border-b-[#e9e9eb] flex items-center justify-between gap-x-2">
				{/* Logo */}
				<Link to="/">
					<div className="flex items-center gap-x-3">
						<img
							src={Logo}
							alt="Logo"
							className="size-8"
						/>
						<h3 className="text-2xl font-semibold text-gradient">Hero IO</h3>
					</div>
				</Link>
				{/* Links */}
				<div className="flex items-center gap-x-8 text-[17px] font-medium">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`hover:text-purple-700 transition-colors duration-200 leading-none ${isActive && "text-gradient border-b border-b-purple-600"}`
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/apps"
						className={({ isActive }) =>
							`hover:text-purple-700 transition-colors duration-200 leading-none ${isActive && "text-gradient border-b border-b-purple-600"}`
						}
					>
						Apps
					</NavLink>
					<NavLink
						to="/installation"
						className={({ isActive }) =>
							`hover:text-purple-700 transition-colors duration-200 leading-none ${isActive && "text-gradient border-b border-b-purple-600"}`
						}
					>
						Installation
					</NavLink>
				</div>
				{/* Buttons */}
				<div>
					<a
						href="https://github.com/mahnafdev/hero-io"
						target="_blank"
						rel="noreferrer"
					>
						<button className="text-[17px] flex items-center gap-x-2 px-4 py-3 rounded-lg bg-linear-to-br from-purple-900/95 to-purple-500/80 text-zinc-50 leading-0 hover:opacity-92.5 active:scale-95 transition-all duration-200">
							<FaGithub size={20} />
							<span>Contribute</span>
						</button>
					</a>
				</div>
			</nav>
		</header>
	);
};
