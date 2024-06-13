import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
const Homepage = () => {
	return (
		<>
			<PageNav />
			<div>WorldWise</div>
			<Link to="/app">Go to the app</Link>
		</>
	);
};

export default Homepage;
