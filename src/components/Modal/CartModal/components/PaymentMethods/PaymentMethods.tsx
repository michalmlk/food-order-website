import React, { ReactElement, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { container, variants } from '../../../../../common/animations';
import { PAYMENT_METHODS } from '../../../../../common/utils';
import { CartContext } from '../../../../../context/CartContext';
import './PaymentMethods.scss';

const PaymentMethods: React.FC<{}> = (): ReactElement => {
    const { paymentMethod, handlePaymentMethodChange } = useContext(CartContext);

    return (
        <motion.div className="payments-wrapper" variants={container} initial="hidden" animate="visible">
            {PAYMENT_METHODS.map((method) => (
                <motion.div
                    key={method.id}
                    className={`payment-method ${paymentMethod.id === method.id && 'selected'}`}
                    variants={variants}
                    onClick={() => handlePaymentMethodChange(method.id)}
                >
                    <p>{method.paymentName}</p>
                    <FontAwesomeIcon icon={method.icon} size="2xl" />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default PaymentMethods;
