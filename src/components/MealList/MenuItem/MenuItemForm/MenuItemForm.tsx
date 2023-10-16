import React, { useRef, ReactElement, useContext } from 'react';
import Button from '../../../UI/Button/Button';
import './MenuItemForm.scss';
import { CartContext } from '../../../../context/CartContext';
import { Meal } from '../../../../common/model';

const MenuItemForm: React.FC<{ item: Meal }> = ({ item }): ReactElement => {
    const amountRef = useRef(null);

    const { handleAddItems } = useContext(CartContext);

    return (
        <div className="meal-form">
            <div className="input">
                <input type="number" id="amount" ref={amountRef} defaultValue={1} min={1} step={1} />
            </div>
            <Button onClick={() => handleAddItems(item, amountRef.current.value)}>$ {item.price.toString()}</Button>
        </div>
    );
};
export default MenuItemForm;
