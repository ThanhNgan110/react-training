import Pizza from "../Pizza";
import styles from "./menu.module.css";
import { pizzaData } from "../../data/pizzaData";

const Menu = () => {
	return (
		<main className= {styles.menu}>

			<h2 className={styles.menu}>Our Menu</h2>
			<p>
				Authentic Italian cuisine. 6 creative dishes to choose from. All from
				our stone oven, all organic, all delicious.
			</p>
			<ul className={styles.pizzas}>
			{pizzaData.map((pizza)=> (
				<Pizza pizzaObj = {pizza}/>
			))}
			</ul>
		</main>
	);
};

export default Menu;
