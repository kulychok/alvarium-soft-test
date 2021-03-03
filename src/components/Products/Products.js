import Product from './Product/Product';
import './Products.css';

function Products(props) {
	return (
		<div className='products'>
			{props.products.map((el) => (
				<Product
					name={el.name}
					price={el.price}
					img={el.img}
					description={el.description}
				/>
			))}
		</div>
	);
}

export default Products;
