import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaSinge from './components/products/PizzaSingle';

const App = () => {
	return (
		<>
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						<PizzaSinge />
						<PizzaSinge />
						<PizzaSinge />
						<PizzaSinge />
						<PizzaSinge />
						<PizzaSinge />
						<PizzaSinge />
						<PizzaSinge />
						<PizzaSinge />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
