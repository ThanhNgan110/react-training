import Product from "./components/Product";
import Information from "./components/Information";
import "./App.css";

const App = () => {
	return (
		<div className="card">
			<Product />
			<div className="data">
				<Information />
			</div>
		</div>
	);
};

export default App;
