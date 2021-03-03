import products from './products/products.json';
import img1 from './products/1.jpg';
import img2 from './products/2.jpg';
import img3 from './products/3.jpg';
import img4 from './products/4.jpg';
import img5 from './products/5.jpg';
import img6 from './products/6.jpg';
import img7 from './products/7.jpg';
import img8 from './products/8.jpg';
import img9 from './products/9.jpg';
import img10 from './products/10.jpg';

const UPDATE_PRICE = 'UPDATE-PRICE';
const CHOOSE_CURRENCY = 'CHOOSE-CURRENCY';
const CHOOSE_SORTING_METHOD = 'CHOOSE-FILTER-METHOD';
const ADD_PRODUCT = 'ADD-PRODUCT';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
let i = 0;
products.products.map((el) => {
	el.img = images[i];
	i++;
});
products.products.sort((a, b) => a.price - b.price);

const initialState = {
	products,
	newProduct: {
		name: '',
		price: 0,
		description: '',
		img: {},
	},
	currentPrice: { min: '', max: '' },
	currentCurrency: 'UAH',
	sortingMethod: 'sortPriceUp',
};

export const reducer = (state = initialState, action) => {
	const stateCopy = {
		...state,
		products: { ...state.products, products: [...state.products.products] },
		newProduct: { ...state.newProduct },
		currentPrice: { ...state.currentPrice },
	};

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
				switch (stateCopy.sortingMethod) {
					case 'sortPriceUp':
						stateCopy.products.products.sort(
							(a, b) => a.price - b.price
						);
						break;
					case 'sortPriceDown':
						stateCopy.products.products.sort(
							(a, b) => b.price - a.price
						);
						break;
					case 'sortAlphabet':
						stateCopy.products.products.sort((a, b) => {
							let nameA = a.name.toLowerCase(),
								nameB = b.name.toLowerCase();
							if (nameA < nameB) return -1;
							if (nameA > nameB) return 1;
							return 0;
						});
				}
			}
			break;
		case ADD_PRODUCT:
			{
				stateCopy.newProduct = {
					id: state.products.length,
					name: action.name,
					price: action.price,
					description: action.description,
					img: action.img,
				};
				stateCopy.products.push(state.newProduct);
			}
			break;
	}
	return stateCopy;
};
