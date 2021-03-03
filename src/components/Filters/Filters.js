import Currency from './Currency/Currency';
import Price from './Price/Price';
import Sorting from './Sorting/Sorting';
import './Filters.css';

function Filters() {
	return (
		<div className='filters'>
			<Price />
			<Currency />
			<Sorting />
		</div>
	);
}

export default Filters;
