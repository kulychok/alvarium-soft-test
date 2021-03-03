import { connect } from 'react-redux';
import Products from './Products';
import './Products.css';

const mapStateToProps = (state) => {
	return {
		products: state.data.products.products,
		currency: state.data.currentCurrency,
	};
};

const ProductsContainer = connect(mapStateToProps, () => ({}))(Products);

export default ProductsContainer;
