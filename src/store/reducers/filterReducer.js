const UPDATE_PRICE = 'UPDATE-PRICE';
const CHOOSE_CURRENCY = 'CHOOSE-CURRENCY';
const CHOOSE_SORTING_METHOD = 'CHOOSE-FILTER-METHOD';

const initialState = {
	currentPrice: { min: '', max: '' },
	currentCurrency: 'UAH',
	sortingMethod: 'byPriceUp',
};

export const filterReducer = (state = initialState, action) => {
	const stateCopy = { ...state, currentPrice: { ...state.currentPrice } };
	switch (action.type) {
		case UPDATE_PRICE:
			{
				stateCopy.currentPrice = { min: action.min, max: action.max };
			}
			break;
		case CHOOSE_CURRENCY:
			{
				stateCopy.currentCurrency = action.currency;
			}
			break;
		case CHOOSE_SORTING_METHOD:
			{
				stateCopy.sortingMethod = action.sortingMethod;
			}
			break;
	}
	return stateCopy;
};
