import Product from './Product/Product';
import photo1 from '../../store/products/1.jpg';
import './Products.css';

function Products() {
	return (
		<div className='products'>
			<Product
				name={'Iphone'}
				price={1000}
				img={photo1}
				description={'dfdsf'}
			/>
		</div>
	);
}

export default Products;
