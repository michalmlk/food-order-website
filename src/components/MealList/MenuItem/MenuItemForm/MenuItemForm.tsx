import React, { useState, useRef, ReactElement, useContext } from 'react';
import Button from '../../../UI/Button/Button';
import './MenuItemForm.scss';
import { CartContext } from '../../../../context/CartContext';
import { Meal } from '../../../../common/model';

const MenuItemForm: React.FC<{ item: Meal }> = ({ item }): ReactElement => {
    const amountRef = useRef<{ current: HTMLInputElement }>(null);
    const [disabled, setDisabled] = useState(false);

    const handleDisableSubmitButton = () => {
        setDisabled(!!(amountRef.current.value < 1));
    };

    const { handleAddItems } = useContext(CartContext);

    return (
        <div className="meal-form">
            <div className="input">
                <input
                    type="number"
                    id="amount"
                    onChange={handleDisableSubmitButton}
                    ref={amountRef}
                    defaultValue={1}
                    min={1}
                    step={1}
                />
            </div>
            <Button onClick={() => handleAddItems(item, amountRef.current.value)} disabled={disabled}>
                $ {item.price.toString()}
            </Button>
        </div>
    );
};
export default MenuItemForm;
