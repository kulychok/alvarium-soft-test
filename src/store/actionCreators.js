const EDIT_PRICE = 'EDIT-PRICE';
const CHOOSE_CURRENCY = 'CHOOSE-CURRENCY';
const CHOOSE_SORTING_METHOD = 'CHOOSE-FILTER-METHOD';
const ADD_PRODUCT = 'ADD-PRODUCT';

export const editPrice = (min, max) => {
	return { type: EDIT_PRICE, min: min, max: max };
};

export const chooseCurrency = (currency) => {
	return { type: CHOOSE_CURRENCY, currency: currency };
};

export const chooseFilterMethod = (sortingMethod) => {
	return { type: CHOOSE_SORTING_METHOD, sortingMethod: sortingMethod };
};

export const addProduct = (name, price, description, img) => {
	return { type: ADD_PRODUCT, name, price, description, img };
};
