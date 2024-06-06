import Item from "./Item";

const PackingList = () => {
	const initialItems = [
		{ id: 1, description: "Passport", quantity: 2, packed: false },
		{ id: 2, description: "Socks", quantity: 12, packed: false },
		{ id: 3, description: "Charger", quantity: 1, packed: true },
	];
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
};

export default PackingList;
