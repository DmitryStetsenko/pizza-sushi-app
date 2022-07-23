import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaSinge from './components/products/PizzaSingle';

import pizzasData from './assets/pizza.json';

const App = () => {
	const {pizzas, aliases} = pizzasData;
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
						{
							pizzas.map(pizza => <PizzaSinge key={ pizza.id } pizza={ pizza } aliases={ aliases }/>)
						}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
