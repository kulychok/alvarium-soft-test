import './AddProduct.css';

function AddProduct() {
	return (
		<div className='addProduct'>
			<div className='addProduct-name'>
				<label for='addProductName' className='form-label'>
					Имя
				</label>
				<input
					type='text'
					id='addProductName'
					className='form-control'></input>
			</div>

			<div className='addProduct-price'>
				<label for='addProductPrice' className='form-label'>
					Цена
				</label>
				<input
					type='number'
					id='addProductPrice'
					className='form-control'></input>
			</div>

			<div className='addProduct-description'>
				<textarea className='form-control'></textarea>
			</div>

			<div className='addProduct-img'>
				<label for='addProductImg' className='form-label'>
					Изображение
				</label>
				<input
					type='file'
					id='addProductImg'
					className='form-control'></input>
			</div>

			<button className='btn btn-primary'>Save</button>
		</div>
	);
}

export default AddProduct;
