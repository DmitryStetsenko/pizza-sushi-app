import React from 'react';

const SortPopup = ({className, sortList, activeIndex, setActiveIndex}) => {
    return (
        <div className={ className }>
            <ul>
                {
                    sortList.map((sortItem, index) => 
                            <li 
                                key={ sortItem } 
                                className={index === activeIndex ? 'active' : undefined }
                                onClick={ () => setActiveIndex(index) }
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