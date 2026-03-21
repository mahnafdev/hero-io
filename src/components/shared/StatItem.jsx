export const StatItem = ({ stat }) => {
	return (
		<div className="flex flex-col items-center text-center gap-y-3">
			{/* Label */}
			<p className="text-lg">{stat.label}</p>
			{/* Value (with suffix) */}
			<h2 className="text-5xl font-bold">
				{stat.value}
				{stat.suffix ?? ""}
			</h2>
			{/* Side note */}
			<p>{stat.footnote}</p>
		</div>
	);
};
