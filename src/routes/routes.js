import { createBrowserRouter } from "react-router";
import Root from "../components/Root";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: Root,
	},
]);
