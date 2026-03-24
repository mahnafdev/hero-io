import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { TrendingApps } from "./TrendingApps";

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
