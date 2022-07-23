import React, { useState } from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
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
            key={ item }
            onClick={ () => setActiveIndex(index) }
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