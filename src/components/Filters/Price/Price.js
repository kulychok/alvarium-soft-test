import './Price.css';

function Price() {
	return (
		<div className='filter-price'>
			<h3>Цена</h3>

			<label for='priceFrom' className='form-label'>
				от:
			</label>

			<label for='priceTo' className='form-label'>
				до:
			</label>

			<input
				type='number'
				id='priceFrom'
				className='form-control'></input>

			<input type='number' id='priceTo' className='form-control'></input>
		</div>
	);
}

export default Price;
