import React, { useContext } from 'react';
import Modal from '../Modal';
import Button from '../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCartArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext, OrderStep } from '../../../context/CartContext';
import CartPositionItem from './components/CartPositionItem/CartPositionItem';
import { CartItem } from '../../../common/model';
import { ModalWrapperProps } from '../Modal';
import { motion } from 'framer-motion';
import OrderDataForm from './components/OrderDataForm/OrderDataForm';
import PaymentMethods from './components/PaymentMethods/PaymentMethods';
import { container } from '../../../common/animations';
import ConfirmationModalContent from './components/ConfirmationModalContent/ConfirmationModalContent';
import './CartModal.styles.scss';

const cartModalHeadings = ['Summary', 'Payment', 'Order data', 'Finalization'];

const CartModal: React.FC<ModalWrapperProps> = ({ isShowing, onHide }) => {
    const { cartItems, orderStep, handleNextStep, handlePrevStep } = useContext(CartContext);
    const totalValue = cartItems.reduce((acc: number, item: CartItem) => acc + item.totalPrice, 0);

    return (
        <Modal isShowing={isShowing} onHide={onHide}>
            <div className="cart-modal-content">
                <div className="modal-header">
                    <h2>{cartModalHeadings[orderStep]}</h2>
                    <Button onClick={onHide} secondary icon={faTimes} />
                </div>
                {orderStep === OrderStep.SUMMARY && (
                    <>
                        <motion.div className="summary-list" variants={container} initial="hidden" animate="visible">
                            {cartItems.length ? (
                                cartItems.map((item: CartItem) => <CartPositionItem key={item.item.id} item={item} />)
                            ) : (
                                <h2>Cart is empty... add sth delicious 🤤</h2>
                            )}
                        </motion.div>

                        <div className="order-summary">
                            <h3>Total: ${totalValue.toFixed(2)}</h3>
                        </div>
                    </>
                )}
                {orderStep === OrderStep.ORDER_DATA && <OrderDataForm />}
                {orderStep === OrderStep.PAYMENT && <PaymentMethods />}
                {orderStep === OrderStep.FINALIZATION && <ConfirmationModalContent totalValue={totalValue} />}
                <div className="modal-footer">
                    <Button onClick={handlePrevStep} secondary disabled={orderStep === OrderStep.SUMMARY}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back
                    </Button>
                    <Button onClick={handleNextStep}>
                        <FontAwesomeIcon icon={orderStep !== OrderStep.FINALIZATION ? faArrowRight : faCartArrowDown} />{' '}
                        {orderStep !== OrderStep.FINALIZATION ? 'Next' : 'Order'}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default CartModal;
