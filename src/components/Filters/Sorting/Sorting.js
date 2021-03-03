import './Sorting.css';

function Sorting(props) {
	return (
		<div className='filter-sorting'>
			<h3>Сортировка</h3>
			<div>
				<input
					type='radio'
					id='sortPriceUp'
					className='form-check-input'
					checked={((v) => (v === 'sortPriceUp' ? 'checked' : ''))(
						props.currency
					)}
					onChange={() =>
						props.chooseCurrency('sortPriceUp')
					}></input>
				<label htmlFor='sortPriceUp'>по возрастанию цены</label>
			</div>
			<div>
				<input
					type='radio'
					id='sortPriceDown'
					className='form-check-input'
					checked={((v) => (v === 'sortPriceDown' ? 'checked' : ''))(
						props.currency
					)}
					onChange={() =>
						props.chooseCurrency('sortPriceDown')
					}></input>
				<label htmlFor='sortPriceDown'>по убыванию цены</label>
			</div>
			<div>
				<input
					type='radio'
					id='sortAlphabet'
					className='form-check-input'
					checked={((v) => (v === 'sortAlphabet' ? 'checked' : ''))(
						props.currency
					)}
					onChange={() =>
						props.chooseCurrency('sortAlphabet')
					}></input>
				<label htmlFor='sortAlphabet'>по алфавиту</label>
			</div>
		</div>
	);
}

export default Sorting;
