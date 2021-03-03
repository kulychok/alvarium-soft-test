import PriceContainer from './Price/PriceContainer';
import './Filters.css';
import CurrencyContainer from './Currency/CurrencyContainer';
import SortingContainer from './Sorting/SortingContainer';

function Filters() {
	return (
		<div className='filters'>
			<PriceContainer />
			<CurrencyContainer />
			<SortingContainer />
		</div>
	);
}

export default Filters;
