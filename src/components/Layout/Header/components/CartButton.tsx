import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import './CartButton.scss';
import { CartContext } from '../../../../context/CartContext';

interface CartButtonProps {
    onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
    const { cartItemsCount } = useContext(CartContext);
    return (
        <button className="cart-button" onClick={onClick}>
            <p>
                <FontAwesomeIcon icon={faCartShopping} /> Cart
            </p>
            <p className="items-counter">{cartItemsCount}</p>
        </button>
    );
};

export default CartButton;
