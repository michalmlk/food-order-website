import React, { useContext } from 'react';
import { CartItem } from '../../../../common/model';
import Button from '../../../UI/Button/Button';
import { CartContext } from '../../../../context/CartContext';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './CartPositionItem.scss';

interface CartPositionItemProps {
    item: CartItem;
}

const CartPositionItem: React.FC<CartPositionItemProps> = ({ item }) => {
    const { handleRemoveItem, handleAddItems } = useContext(CartContext);
    return (
        <div className="cart-item">
            <h3>{item.item.name}</h3>
            <div className="details">
                <Button onClick={() => handleRemoveItem(item.item.id, true)} secondary icon={faMinus} />
                <p>{item.amount}</p>
                <Button onClick={() => handleAddItems(item.item, 1)} secondary icon={faPlus} />
                <Button onClick={() => handleRemoveItem(item.item.id)} icon={faTimes} />
            </div>
        </div>
    );
};

export default CartPositionItem;
