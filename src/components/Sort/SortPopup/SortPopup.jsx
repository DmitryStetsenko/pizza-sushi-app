import React from 'react';

const SortPopup = ({className, popUpProps}) => {
    const { sortList, activeIndex, setActiveIndex, setOpen } = popUpProps;

    const toggleSortPopup = (index) => {
        setActiveIndex(index);
        setOpen(false);
    }

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