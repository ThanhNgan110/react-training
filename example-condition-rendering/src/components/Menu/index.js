import Pizza from "../Pizza";
import styles from "./menu.module.css";
import { pizzaData } from "../../data/pizzaData";

const Menu = () => {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;

	return (
		<main className={styles.menu}>
			<h2 className={styles.menu}>Our Menu</h2>
			<p>
				Authentic Italian cuisine. 6 creative dishes to choose from. All from
				our stone oven, all organic, all delicious.
			</p>

			{
				// condition rendering with &&
			}
			
			{/* {numPizzas > 0 && (
				<ul className={styles.pizzas}>
					{pizzaData.map((pizza) => (
						// <Pizza {...pizza}/>
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			)} */}

			{
				// condition rendering with ternaries
			}

			{numPizzas > 0 ? (
				<ul className={styles.pizzas}>
					{pizzaData.map((pizza) => (
						// <Pizza {...pizza}/>
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>We're still working on our menu.Please come back later :)</p>
			)}
		</main>
	);
};

export default Menu;
