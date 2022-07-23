import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import ProductTabs from '../../UI/ProductTabs/ProductTabs';

const PizzaSingle = ({ pizza, aliases }) => {
    const {imgUrl, title, types, sizes, price} = pizza;

    return (
        <div className="pizza-block">
            <img className="pizza-block__image"
                src={ imgUrl }
                alt={ `Пицца ${ title }` } />
            <h4 className="pizza-block__title">{ title }</h4>
            <div className="pizza-block__selector">
                <ProductTabs options={ types } aliases={ aliases.types } />
                <ProductTabs options={ sizes } unit={ 'см.' } />
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от { price } ₴</div>
                <Button />
            </div>
        </div>
    );
};

export default PizzaSingle;