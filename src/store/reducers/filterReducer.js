const EDIT_PRICE = 'EDIT-PRICE';
const CHOOSE_CURRENCY = 'CHOOSE-CURRENCY';
const CHOOSE_SORTING_METHOD = 'CHOOSE-FILTER-METHOD';

const initialState = {
	currentPrice: { min: 0, max: 0 },
	currentCurrency: 'USD',
	sortingMethod: 'byPriceUp',
};

export const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case EDIT_PRICE:
			{
				state.currentPrice = { min: action.min, max: action.max };
			}
			break;
		case CHOOSE_CURRENCY:
			{
				state.currentCurrency = action.currency;
			}
			break;
		case CHOOSE_SORTING_METHOD:
			{
				state.sortingMethod = action.sortingMethod;
			}
			break;
	}
	return state;
};
