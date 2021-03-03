import products from '../products/products.json';
import img1 from '../products/1.jpg';
import img2 from '../products/2.jpg';
import img3 from '../products/3.jpg';
import img4 from '../products/4.jpg';
import img5 from '../products/5.jpg';
import img6 from '../products/6.jpg';
import img7 from '../products/7.jpg';
import img8 from '../products/8.jpg';
import img9 from '../products/9.jpg';
import img10 from '../products/10.jpg';

const ADD_PRODUCT = 'ADD-PRODUCT';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
let i = 0;
products.products.map((el) => {
	el.img = images[i];
	i++;
});

const initialState = {
	products,
	newProduct: {
		name: '',
		price: 0,
		description: '',
		img: {},
	},
};

export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			{
				state.newProduct = {
					id: state.products.length,
					name: action.name,
					price: action.price,
					description: action.description,
					img: action.img,
				};
				state.products.push(state.newProduct);
			}
			break;
	}
	return state;
};
