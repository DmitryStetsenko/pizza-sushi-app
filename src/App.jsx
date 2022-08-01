
import { Routes, Route} from "react-router-dom";
import './scss/app.scss';

import { PageShop, PageCart, Page404 } from './components/pages';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<PageShop />} />
				<Route path="/shop" element={<PageShop />} />
				<Route path="/cart" element={<PageCart />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</>
	);
}

export default App;
