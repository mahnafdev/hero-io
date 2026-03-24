import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import HomePage from "../pages/Home";
import AppsPage from "../pages/Apps";

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
