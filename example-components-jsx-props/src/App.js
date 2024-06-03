import styles from "./index.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
	return (
		<>
			<div className={styles.container}>
				<Header />
				<Footer />
			</div>
		</>
	);
}

export default App;
