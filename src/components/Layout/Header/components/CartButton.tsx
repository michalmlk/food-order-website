import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './CartButton.scss';
import { CartContext } from '../../../../context/CartContext';

interface CartButtonProps {
    onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
    const { cartItemsCount } = useContext(CartContext);
    const [isAdd, setIsAdd] = useState(false);

    const btnClassNames = `cart-button ${isAdd ? 'bump' : ''}`;

    useEffect(() => {
        if (cartItemsCount === 0) {
            return;
        }
        setIsAdd(true);

        const t = setTimeout(() => {
            setIsAdd(false);
        }, 300);

        return () => {
            clearTimeout(t);
        };
    }, [cartItemsCount]);

    return (
        <button className={btnClassNames} onClick={onClick}>
            <p>
                <FontAwesomeIcon icon={faCartShopping} /> Cart
            </p>
            <p className="items-counter">{cartItemsCount}</p>
        </button>
    );
};

export default CartButton;
