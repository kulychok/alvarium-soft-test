import './App.css';

import Products from './components/Products/Products';
import AddProduct from './components/AddProduct/AddProduct';
import Filters from './components/Filters/Filters';

function App() {
	return (
		<div className='app'>
			<Filters />

			<Products />

			<AddProduct />
		</div>
	);
}

export default App;
