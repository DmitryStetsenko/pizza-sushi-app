import React from 'react';

const SortPopup = ({className, sortList, activeIndex, toggleSortPopup}) => {
    return (
        <div className={ className }>
            <ul>
                {
                    sortList.map((sortItem, index) => 
                            <li 
                                key={ sortItem } 
                                className={index === activeIndex ? 'active' : undefined }
                                onClick={ () => toggleSortPopup(index) }
                            >
                                { sortItem }
                            </li>
                    )
                }
            </ul>
        </div>
    );
};

export default SortPopup;