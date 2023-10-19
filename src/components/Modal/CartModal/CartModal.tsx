import React, { useContext } from 'react';
import Modal from '../Modal';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../../context/CartContext';
import CartPositionItem from './CartPositionItem/CartPositionItem';
import { CartItem } from '../../../common/model';
import { ModalWrapperProps } from '../Modal';
import { motion } from 'framer-motion';
import './CartModal.styles.scss';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.05,
        },
    },
};

const CartModal: React.FC<ModalWrapperProps> = ({ isShowing, onHide }) => {
    const { cartItems } = useContext(CartContext);

    const totalValue = cartItems.reduce((acc: number, item: CartItem) => acc + item.totalPrice, 0);
    return (
        <Modal isShowing={isShowing} hide={onHide}>
            <div className="cart-modal-content">
                <div className="modal-header">
                    <h2>Summary</h2>
                </div>
                <motion.div className="summary-list" variants={container} initial="hidden" animate="visible">
                    {cartItems.length ? (
                        cartItems.map((item) => <CartPositionItem key={item.item.id} item={item} />)
                    ) : (
                        <h2>Cart is empty... add sth delicious 🤤</h2>
                    )}
                </motion.div>
                <div className="order-summary">
                    <h3>Total: ${totalValue.toFixed(2)}</h3>
                </div>
                <div className="modal-footer">
                    <Button onClick={onHide} secondary>
                        <FontAwesomeIcon icon={faTimes} /> Cancel
                    </Button>
                    <Button onClick={() => console.log('xd')}>
                        <FontAwesomeIcon icon={faCartArrowDown} /> Order
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default CartModal;
