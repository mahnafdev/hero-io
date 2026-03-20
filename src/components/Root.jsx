import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Root;
