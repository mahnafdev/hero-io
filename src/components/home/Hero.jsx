import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6";
import BannerImg from "../../assets/banner.png";

export const Hero = () => {
	return (
		<section
			id="hero"
			className="pt-8 flex flex-col items-center text-center"
		>
			{/* Tagline */}
			<h1 className="text-6xl font-bold leading-[1.125] mb-4">
				We Build
				<br />
				<span className="gradient-text">Productive</span> Apps
			</h1>
			{/* Subtext */}
			<p className="text-lg text-zinc-500 max-w-3xl mb-6">
				At Hero IO, we craft innovative apps designed to make everyday life simpler,
				smarter, and more exciting. Our goal is to turn your ideas into digital
				experiences that truly make an impact.
			</p>
			{/* CTA Buttons */}
			<div className="flex gap-4 mb-8">
				{/* Google Play */}
				<button
					type="button"
					className="flex items-center gap-x-2 px-5 py-3 text-xl font-medium border border-zinc-300 rounded-[10px] cursor-pointer hover:bg-purple-100 hover:border-purple-300 transition-colors duration-200"
				>
					<FaGooglePlay
						size={28}
						className="text-purple-500"
					/>
					Google Play
				</button>
				{/* App Store */}
				<button
					type="button"
					className="flex items-center gap-x-2 px-5 py-3 text-xl font-medium border border-zinc-300 rounded-[10px] cursor-pointer hover:bg-purple-100 hover:border-purple-300 transition-colors duration-200"
				>
					<FaAppStoreIos
						size={28}
						className="text-purple-500"
					/>
					App Store
				</button>
			</div>
			{/* Banner Image */}
			<div>
				<img
					src={BannerImg}
					alt="App Image"
				/>
			</div>
		</section>
	);
};
