import './Sorting.css';

function Sorting() {
	return (
		<div className='filter-sorting'>
			<h3>Сортировка</h3>
			<div>
				<input
					type='radio'
					id='sortPriceUp'
					className='form-check-input'></input>
				<label for='sortPriceUp'>по возрастанию цены</label>
			</div>
			<div>
				<input
					type='radio'
					id='sortPriceDown'
					className='form-check-input'></input>
				<label for='sortPriceDown'>по убыванию цены</label>
			</div>
			<div>
				<input
					type='radio'
					id='sortAlphabet'
					className='form-check-input'></input>
				<label for='sortAlphabet'>по алфавиту</label>
			</div>
		</div>
	);
}

export default Sorting;
