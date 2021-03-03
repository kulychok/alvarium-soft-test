import Product from './Product/Product';
import './Products.css';

function Products(props) {
	let coefficient = 1;
	if (props.currency === 'USD') coefficient = 0.036;

	return (
		<div className='products'>
			{props.products.map((el) => (
				<Product
					name={el.name}
					price={Math.ceil(el.price * coefficient)}
					img={el.img}
					currency={props.currency}
					description={el.description}
				/>
			))}
		</div>
	);
}

export default Products;
