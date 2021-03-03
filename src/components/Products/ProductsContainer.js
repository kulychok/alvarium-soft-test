import { connect } from 'react-redux';
import Products from './Products';
import './Products.css';

const mapStateToProps = (state) => {
	return {
		products: state.productsComponent.products.products,
		currency: state.filtersComponent.currentCurrency,
	};
};

const ProductsContainer = connect(mapStateToProps, () => {})(Products);

export default ProductsContainer;
