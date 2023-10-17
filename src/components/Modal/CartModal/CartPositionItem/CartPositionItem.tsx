import React, { useContext } from 'react';
import { CartItem } from '../../../../common/model';
import './CartPositionItem.scss';
import Button from '../../../UI/Button/Button';
import { CartContext } from '../../../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CartPositionItemProps {
    item: CartItem;
}

const CartPositionItem: React.FC<CartPositionItemProps> = ({ item }) => {
    const { handleRemoveItem, cartItems } = useContext(CartContext);
    return (
        <div className="cart-item">
            <h3>{item.item.name}</h3>
            <div className="details">
                <p>Amount: {item.amount}</p>
                <Button
                    onClick={() => {
                        console.log('click');
                        handleRemoveItem(item.item.id);
                    }}
                >
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </Button>
            </div>
        </div>
    );
};

export default CartPositionItem;
