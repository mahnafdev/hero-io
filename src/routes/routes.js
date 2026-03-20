import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import HomePage from "../components/home/Home";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: HomePage,
			},
		],
	},
]);
