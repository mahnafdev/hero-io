import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { TrendingApps } from "../components/home/TrendingApps";

const HomePage = () => {
	return (
		<main className="pt-20">
			<Hero />
			<Stats />
			<TrendingApps />
		</main>
	);
};

export default HomePage;
