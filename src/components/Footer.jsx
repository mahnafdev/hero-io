import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Logo from "../assets/logo.png";

export const Footer = () => {
	return (
		<footer className="mt-24 px-48 py-10 bg-zinc-900 text-white space-y-6">
			<div className="flex justify-between">
				{/* Logo */}
				<div className="flex items-center gap-x-3">
					<img
						src={Logo}
						alt="Logo"
						className="size-8"
					/>
					<h3 className="text-2xl font-semibold">Hero IO</h3>
				</div>
				{/* Social */}
				<div className="space-y-2">
					<h4 className="text-xl font-medium">Social Links</h4>
					<div className="flex gap-2">
						{/* Linkedin */}
						<a
							href="https://www.linkedin.com/in/mahnafdev"
							className="hover:text-cyan-600 transition-colors duration-200"
						>
							<FaLinkedin size={24} />
						</a>
						{/* GitHub */}
						<a
							href="https://github.com/mahnafdev"
							className="hover:text-white transition-colors duration-200"
						>
							<FaGithub size={24} />
						</a>
						{/* X */}
						<a
							href="https://x.com/mahnaf_swe"
							className="hover:text-white transition-colors duration-200"
						>
							<FaXTwitter size={24} />
						</a>
						{/* Facebook */}
						<a
							href="https://www.facebook.com/mahnafdev"
							className="hover:text-blue-500 transition-colors duration-200"
						>
							<FaFacebook size={24} />
						</a>
						{/* YouTube */}
						<a
							href="https://www.youtube.com/@mahnafdev"
							className="hover:text-red-500 transition-colors duration-200"
						>
							<FaYoutube size={24} />
						</a>
					</div>
				</div>
			</div>
			<div className="w-full h-px bg-zinc-700/75" />
			<p className="text-center text-zinc-300">
				Hero IO &copy; 2025 - All rights reserved
			</p>
		</footer>
	);
};
