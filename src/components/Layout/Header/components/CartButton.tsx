import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartButton.scss';

interface CartButtonProps {
    onClick: () => void;
    itemsCount: number;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick, itemsCount = 0 }) => {
    return (
        <button className="cart-button" onClick={onClick}>
            <p>
                <FontAwesomeIcon icon={faCartShopping} /> Order
            </p>
            <p className="items-counter">{itemsCount}</p>
        </button>
    );
};

export default CartButton;
