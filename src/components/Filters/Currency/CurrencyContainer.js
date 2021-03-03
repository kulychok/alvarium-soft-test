import { chooseCurrency } from '../../../store/actionCreators';
import { connect } from 'react-redux';
import Currency from './Currency';

const mapStateToProps = (state) => {
	return {
		currency: state.filtersComponent.currentCurrency,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		chooseCurrency: (currency) => {
			dispatch(chooseCurrency(currency));
		},
	};
};

const CurrencyContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Currency);

export default CurrencyContainer;
