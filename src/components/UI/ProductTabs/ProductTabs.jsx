import React from 'react';

const ProductTabs = ({ options,  unit, aliases}) => {
    return (
        <ul>
            {
                options.map((option, index) => {
                    let optionValue = aliases ? aliases[option] : option;
                    if (unit) {
                        optionValue += ' ' + unit;
                    }

                    return (
                        index === 0
                            ? <li key={ option } className="active">{ optionValue }</li>
                            : <li key={ option }>{ optionValue }</li>
                        )
                    }
                )
            }
        </ul>
    );
};

export default ProductTabs;