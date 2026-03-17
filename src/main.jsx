import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes.js";

const root = document.getElementById("root");

createRoot(root).render(
	<StrictMode>
		<RouterProvider router={routes}></RouterProvider>
	</StrictMode>,
);
