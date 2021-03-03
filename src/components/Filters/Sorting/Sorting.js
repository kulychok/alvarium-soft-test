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
						props.sortingMethod
					)}
					onChange={() =>
						props.chooseFilterMethod('sortPriceUp')
					}></input>
				<label htmlFor='sortPriceUp'>по возрастанию цены</label>
			</div>
			<div>
				<input
					type='radio'
					id='sortPriceDown'
					className='form-check-input'
					checked={((v) => (v === 'sortPriceDown' ? 'checked' : ''))(
						props.sortingMethod
					)}
					onChange={() =>
						props.chooseFilterMethod('sortPriceDown')
					}></input>
				<label htmlFor='sortPriceDown'>по убыванию цены</label>
			</div>
			<div>
				<input
					type='radio'
					id='sortAlphabet'
					className='form-check-input'
					checked={((v) => (v === 'sortAlphabet' ? 'checked' : ''))(
						props.sortingMethod
					)}
					onChange={() =>
						props.chooseFilterMethod('sortAlphabet')
					}></input>
				<label htmlFor='sortAlphabet'>по алфавиту</label>
			</div>
		</div>
	);
}

export default Sorting;
