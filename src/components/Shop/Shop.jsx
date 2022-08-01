import React from 'react';
import { useEffect, useState } from 'react';

import Categories from './../Categories';
import Sort from './../Sort';
import { PizzaSingle, PizzaSingleSceleton } from './../products/PizzaSingle';

const Shop = () => {
    const apiUrl = 'https://62e50e2620afdf238d76adab.mockapi.io';

	const [pizzas, setPizzas] = useState([]);
	const [aliases, setAliases] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		fetch(`${apiUrl}/items`)
			.then(res => res.json())
			.then(items => {
				setPizzas(items);
				setIsLoading(false);
			});

		fetch(`${apiUrl}/aliases`)
			.then(res => res.json())
			.then(items => setAliases(items[0]));
	}, []);

    return (
        <div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{ isLoading 
							? [...new Array(6)].map((_, index) => <PizzaSingleSceleton key={ index }/>)
							: pizzas.map(pizza => <PizzaSingle key={ pizza.id } pizza={ pizza } aliases={ aliases }/>)
						}
					</div>
				</div>
			</div>
    );
};

export default Shop;