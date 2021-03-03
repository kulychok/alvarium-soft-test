import { updatePrice } from '../../../store/actionCreators';
import './Price.css';

function Price(props) {
	const onMinPriceChange = (el) => {
		props.updatePrice(el.target.value, props.price.max);
	};

	const onMaxPriceChange = (el) => {
		props.updatePrice(props.price.min, el.target.value);
	};

	return (
		<div className='filter-price'>
			<h3>Цена</h3>

			<label htmlFor='priceFrom' className='form-label'>
				от:
			</label>

			<label htmlFor='priceTo' className='form-label'>
				до:
			</label>

			<input
				type='number'
				id='priceFrom'
				className='form-control'
				value={props.price.min}
				onChange={onMinPriceChange}></input>

			<input
				type='number'
				id='priceTo'
				className='form-control'
				value={props.price.max}
				onChange={onMaxPriceChange}></input>
		</div>
	);
}

export default Price;
