import React, { useState } from 'react';

const ProductTabs = ({ options,  unit, aliases}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ul>
            {
                options.map((option, index) => {
                        let optionValue = aliases ? aliases[option] : option;
                        if (unit) {
                            optionValue += ' ' + unit;
                        }

                        return (
                            <li 
                                onClick={() => setActiveIndex(index)}
                                key={ option } 
                                className={ index === activeIndex ? 'active' : false }
                            >
                                { optionValue }
                            </li>
                        )
                    }
                )
            }
        </ul>
    );
};

export default ProductTabs;