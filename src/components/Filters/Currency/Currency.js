import './Currency.css';

function Currency() {
	return (
		<div className='filter-currency'>
			<h3>Валюта</h3>
			<div>
				<label for='priceUSD'>USD</label>
				<input
					type='radio'
					id='priceUSD'
					className='form-check-input'></input>
				<input
					type='radio'
					id='priceUAH'
					className='form-check-input'></input>
				<label for='priceUAH'>UAH</label>
			</div>
		</div>
	);
}

export default Currency;
