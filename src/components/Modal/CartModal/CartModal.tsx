import React, { useContext } from 'react';
import Modal from '../Modal';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import './CartModal.styles.scss';
import { CartContext } from '../../../context/CartContext';

interface ModalWrapperProps {
    isShowing: boolean;
    onHide: () => void;
    onOrder: () => void;
}

const CartModal: React.FC<ModalWrapperProps> = ({ isShowing, onHide, onOrder }) => {
    const { cartItems } = useContext(CartContext);
    return (
        <Modal isShowing={isShowing} hide={onHide}>
            <div className="cart-modal-content">
                <div className="modal-header">
                    <h2>Summary</h2>
                </div>
                <div className="summary-list">{console.log(cartItems)}</div>
                <div className="modal-footer">
                    <Button onClick={onHide}>
                        <FontAwesomeIcon icon={faTimes} /> Cancel
                    </Button>
                    <Button onClick={onOrder}>
                        <FontAwesomeIcon icon={faCartArrowDown} /> Order
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default CartModal;
