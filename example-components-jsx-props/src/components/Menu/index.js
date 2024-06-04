import Pizza from "../Pizza";
import styles from "./menu.module.css";
import { pizzaData } from "../../data/pizzaData";

const Menu = () => {
	return (
		<>
			<h2 className={styles.menu}>Our Menu</h2>
			<ul className={styles.pizzas}>
				{pizzaData.map((pizza) => {
					// return <Pizza {...pizza}/>
					return <Pizza pizzaObject={pizza} />;
				})}
			</ul>
			<p>
				Authentic Italian cuisine. 6 creative dishes to choose from. All from
				our stone oven, all organic, all delicious.
			</p>
		</>
	);
};

export default Menu;
