import { useEffect, useState } from "react";
import { AppCard } from "../shared/AppCard";
import { Link } from "react-router";

export const TrendingApps = () => {
	// States
	const [apps, setApps] = useState([]);

	// Function to fetch apps data
	const fetchApps = async () => {
		const appsRes = await fetch("/apps.json");
		const fetchedApps = await appsRes.json();
		const trendingApps = await fetchedApps.slice(0, 8);

		return trendingApps;
	};

	useEffect(() => {
		const doWork = async () => {
			// Fetch apps
			const fetchedApps = await fetchApps();
			// Set fetched apps to data state
			setApps(fetchedApps);
		};

		doWork();
	}, []);

	return (
		<section
			id="trending-apps"
			className="px-48 mt-20"
		>
			{/* Header */}
			<h2 className="text-5xl font-bold text-center mb-4">Trending Apps</h2>
			{/* Subtext */}
			<p className="text-zinc-500 text-center">
				Explore all trending apps on the market developed by us.
			</p>
			{/* Apps Grid */}
			<div className="mt-10 grid grid-cols-4 gap-4">
				{apps.map((app) => (
					<AppCard
						key={app.id}
						app={app}
					/>
				))}
			</div>
			{/* Show All button */}
			<div className="mt-10 flex justify-center">
				<Link to="/apps">
					<button className="text-lg px-8 py-2.5 rounded-[10px] bg-gradient text-zinc-50">
						Show All
					</button>
				</Link>
			</div>
		</section>
	);
};
