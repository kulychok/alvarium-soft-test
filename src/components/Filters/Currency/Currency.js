import './Currency.css';

function Currency(props) {
	return (
		<div className='filter-currency'>
			<h3>Валюта</h3>
			<div>
				<label htmlFor='priceUSD'>USD</label>
				<input
					type='radio'
					id='priceUSD'
					checked={((v) => (v === 'USD' ? 'checked' : ''))(
						props.currency
					)}
					onChange={() => props.chooseCurrency('USD')}
					className='form-check-input'></input>
				<input
					type='radio'
					id='priceUAH'
					checked={((v) => (v === 'UAH' ? 'checked' : ''))(
						props.currency
					)}
					onChange={() => props.chooseCurrency('UAH')}
					className='form-check-input'></input>
				<label htmlFor='priceUAH'>UAH</label>
			</div>
		</div>
	);
}

export default Currency;
