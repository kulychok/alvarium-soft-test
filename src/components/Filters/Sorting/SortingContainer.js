import { chooseFilterMethod } from '../../../store/actionCreators';
import { connect } from 'react-redux';
import Sorting from './Sorting';

const mapStateToProps = (state) => {
	return {
		currency: state.filtersComponent.currentCurrency,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		chooseFilterMethod: (sortingMethod) => {
			dispatch(chooseFilterMethod(sortingMethod));
		},
	};
};

const SortingContainer = connect(mapStateToProps, mapDispatchToProps)(Sorting);

export default SortingContainer;
