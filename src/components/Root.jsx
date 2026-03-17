import { Outlet } from "react-router";
import Header from "./Header";

const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Root;
