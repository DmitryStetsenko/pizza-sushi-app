import React, { useState } from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const cats = [
            'Все', 
            'Мясные', 
            'Вегетарианские',
            'Гриль',
            'Острые',
            'Закрытые',
        ];

    const cateroriesList = cats.map((item, index) => (
        <li
            key={item}
            onClick={ e => setActiveIndex(e.target.dataset.index)}
            data-index={ index }
            className={ activeIndex == index ? 'active' : '' }
        >
            { item }
        </li>
    ));

    return (
        <div className="categories">
            <ul>{ cateroriesList }</ul>
        </div>
    );
};

export default Categories;