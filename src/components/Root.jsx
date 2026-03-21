import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Root = () => {
	return (
		<div className="bg-[#f7f7f7]">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
