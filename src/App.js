import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Filters from './components/Filters/Filters';
import ProductsContainer from './components/Products/ProductsContainer';

function App() {
	return (
		<div className='app'>
			<Filters />

			<ProductsContainer />

			<AddProduct />
		</div>
	);
}

export default App;
