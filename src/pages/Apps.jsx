import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { AppCard } from "../components/shared/AppCard";

const AppsPage = () => {
	// States
	const [apps, setApps] = useState([]);

	// Function to fetch apps data
	const fetchApps = async () => {
		const appsRes = await fetch("/apps.json");
		const fetchedApps = await appsRes.json();

		return fetchedApps;
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
		<main className="pt-20 px-48">
			<div className="mt-16">
				{/* Header */}
				<h2 className="mb-4 text-5xl font-bold text-center">Our Applications</h2>
				{/* Subtext */}
				<p className="text-lg text-zinc-500 text-center">
					Explore all apps on the market developed by us. We code for millions-worthy.
				</p>
				<div className="mt-10 space-y-6">
					{/* Apps Metadata and Search */}
					<div className="flex items-center justify-between gap-2">
						{/* Apps Count */}
						<h4 className="text-3xl font-medium">
							Total <span className="text-purple-900">66</span>, Showing{" "}
							<span className="text-purple-900">{apps.length}</span>
						</h4>
						{/* Search Bar */}
						<div className="w-96 px-3 flex items-center gap-x-2 border border-zinc-300/75 rounded-lg focus-within:border-purple-400 transition-colors">
							{/* Search Icon */}
							<TbSearch
								size={24}
								className="text-zinc-400"
							/>
							{/* Search Input */}
							<input
								type="text"
								placeholder="Search Apps"
								className="w-full py-2 text-zinc-700 placeholder-zinc-500/75 focus:outline-none"
							/>
						</div>
					</div>
					{/* Apps Grid */}
					<div className="grid grid-cols-4 gap-4">
						{apps.map((app) => (
							<AppCard
								key={app.id}
								app={app}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default AppsPage;
