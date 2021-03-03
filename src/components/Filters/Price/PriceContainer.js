import Price from './Price';
import { updatePrice } from '../../../store/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		price: state.filtersComponent.currentPrice,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updatePrice: (min, max) => {
			dispatch(updatePrice(min, max));
		},
	};
};

const PriceContainer = connect(mapStateToProps, mapDispatchToProps)(Price);

export default PriceContainer;
