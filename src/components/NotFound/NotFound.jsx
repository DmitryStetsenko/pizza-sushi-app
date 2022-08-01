import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Страница не найдена
                        <span>😕</span>
                    </h2>
                    <p>
                        Вероятней всего, вы хотели заказать пиццу.<br/>
                        Для этого, перейдите на главную страницу.
                    </p>
                    <img src="./img/404.png" alt="Empty cart"/>
                    <Link to="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
