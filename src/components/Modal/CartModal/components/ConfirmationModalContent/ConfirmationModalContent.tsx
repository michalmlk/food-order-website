import React, { useContext } from 'react';
import { CartContext } from '../../../../../context/CartContext';
import { motion } from 'framer-motion';
import './ConfirmationModalContent.scss';
import { container, variants } from '../../../../../common/animations';

const ConfirmationModalContent: React.FC<{ totalValue: number }> = ({ totalValue }) => {
    const { cartItems, paymentMethod } = useContext(CartContext);

    return (
        <div className="confirmation-content">
            <motion.div className="items" initial="hidden" animate="visible">
                <h2>Your order</h2>
                <motion.div className="order-overview" variants={container}>
                    {cartItems.map((item) => (
                        <motion.div className="order-overview-item" variants={variants}>
                            <p className="content">{item.item.name}</p> <p>{item.amount}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="order-payment-details">
                    <div className="detail-row">
                        <p>Payment method</p>
                        <p>{paymentMethod.paymentName}</p>
                    </div>
                    <div className="detail-row">
                        <p>Sum</p>
                        <p>
                            <strong>${totalValue.toFixed(2)}</strong>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ConfirmationModalContent;
