import Item from "./Item";

const PackingList = ({items, onDeleteItem, onToggleItem}) => {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item item={item} onDeleteItem = {onDeleteItem} onToggleItem = {onToggleItem} key={item.id} />
				))}
			</ul>
		</div>
	);
};

export default PackingList;
