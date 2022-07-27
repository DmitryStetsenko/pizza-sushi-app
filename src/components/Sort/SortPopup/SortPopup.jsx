import React from 'react';

const SortPopup = ({className}) => {
    return (
        <div className={ className }>
            <ul>
                <li className="active">популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
            </ul>
        </div>
    );
};

export default SortPopup;