import { StatItem } from "../shared/StatItem";

export const Stats = () => {
	const stats = [
		{
			label: "Total Downloads",
			value: 14.4,
			suffix: "M",
			footnote: "16% more than last month",
		},
		{
			label: "Active Apps",
			value: 66,
			suffix: "+",
			footnote: "6 more launching this month",
		},
		{
			label: "Total Reviews",
			value: 227,
			suffix: "K",
			footnote: "34% more than last month",
		},
	];

	return (
		<section
			id="stats"
			className="px-48 py-20 bg-gradient text-white"
		>
			{/* Header */}
			<h2 className="text-5xl font-bold mb-12 text-center">
				Trusted by Millions, Built for You
			</h2>
			{/* Stats */}
			<div className="max-w-4xl mx-auto flex justify-between">
				{stats.map((stat) => (
					<StatItem
						key={stat.label}
						stat={stat}
					/>
				))}
			</div>
		</section>
	);
};
