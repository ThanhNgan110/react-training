import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import "./App.css";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage/>}></Route>
					<Route path="product" element={<Product />}></Route>
					<Route path="pricing" element={<Pricing/>}></Route>
					<Route path="app" element={<AppLayout/>}></Route>
					<Route path="*" element={<PageNotFound/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
