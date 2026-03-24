import { TbDownload, TbStarFilled } from "react-icons/tb";
import { calculateAvgRating } from "../../utils/calculateAvgRating";
import { format } from "numerable";
import { Link } from "react-router";

const iconModules = import.meta.glob("/src/assets/appIcons/*.png", {
	eager: true,
	import: "default",
});

export const AppCard = ({ app }) => {
	const matchedPaths = Object.entries(iconModules).find(([path]) =>
		path.endsWith(`/${app.iconName}.png`),
	);
	const icon = matchedPaths ? matchedPaths[1] : "";

	return (
		<Link to={`/apps/${app.id}`}>
			<div className="p-5 bg-white shadow-lg shadow-black/5 rounded-xl active:shadow-sm transition-shadow">
				<div className="flex items-center gap-x-4 mb-6">
					{/* Icon */}
					<div>
						<img
							src={icon}
							alt={`${app.title} icon`}
							className="size-10 rounded-md"
						/>
					</div>
					{/* Title */}
					<h5 className="text-xl font-medium leading-[1.125]">{app.title}</h5>
				</div>
				<div className="flex justify-between gap-2">
					{/* Downloads */}
					<div className="px-2 py-1.5 text-[15px] flex items-center gap-x-1.5 bg-green-800/5 text-green-600 rounded-md">
						<TbDownload size={16} />
						<span>{format(app.downloads, "0a")}</span>
					</div>
					{/* Average Rating */}
					<div className="px-2 py-1.5 text-[15px] flex items-center gap-x-1.5 bg-yellow-800/5 text-yellow-600 rounded-md">
						<TbStarFilled size={16} />
						<span>{calculateAvgRating(app.ratings)}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};
