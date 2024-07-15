import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="product" element={<Product />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
