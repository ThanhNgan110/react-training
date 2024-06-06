import { useState } from "react";
const Form = () => {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(0);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!description) return;
		const newItem = { id: Date.now(), description, quantity, packed: false };
		console.log(newItem);
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
					<option value={number} key={number}>
						{number}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
};

export default Form;
