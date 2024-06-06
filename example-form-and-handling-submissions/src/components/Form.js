const Form = () => {
	return (
		<form className="add-form">
			<h3>What do you need for your 😍 trip?</h3>
			<select>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
					<option value={number}>{number}</option>
				))}
			</select>
			<input type="text" placeholder="Item..." />
			<button>Add</button>
		</form>
	);
};

export default Form;
