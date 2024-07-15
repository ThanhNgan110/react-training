import "./index.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Menu from "./components/Menu"; 

function App() {
	return (
		<>
			<div className="container">
				<Header />
				<Menu/>
				<Footer />
			</div>
		</>
	);
}

export default App;
