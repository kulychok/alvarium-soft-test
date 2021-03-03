import './Product.css';

function Product(props) {
	return (
		<div className='product'>
			<img src={props.img} alt={props.name}></img>
			<h2>{props.name}</h2>
			<div className='productPrice'>
				{props.price + ' ' + props.currency}
			</div>
			<div className='productDescription'>{props.description}</div>
		</div>
	);
}

export default Product;
