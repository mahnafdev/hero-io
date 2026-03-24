import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import HomePage from "../components/home/Home";
import AppsPage from "../components/apps/Apps";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{ path: "apps", Component: AppsPage },
		],
	},
]);
