import React, { FormEvent, ReactElement, useContext } from 'react';
import { InputText } from '../../../../UI/Input/Input';
import { motion } from 'framer-motion';
import { container } from '../../../../../common/animations';
import { CartContext } from '../../../../../context/CartContext';
import { CartItem } from '../../../../../common/model';
import { toast } from 'react-toastify';

const OrderDataForm: React.FC<{}> = (): ReactElement => {
    const { cartItems, paymentMethod } = useContext(CartContext);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const toastId = toast.loading('Ordering...');
        try {
            const formData = new FormData(e.target);
            const customerData = Object.fromEntries(formData.entries());

            const orderItems = cartItems.map((item: CartItem) => ({
                amount: item.amount,
                name: item.item.name,
            }));

            await fetch('http://localhost:3000/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethod,
                    items: orderItems,
                    customerData,
                }),
            });
            toast.success('Order successfull');
        } catch (e) {
            toast.error('Failed to order.');
        }
        toast.dismiss(toastId);
    };

    return (
        <motion.form
            className="form-wrapper"
            variants={container}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
        >
            <InputText id="name" label="Name" type="text" name="customer_name"></InputText>
            <InputText id="city" label="City" type="text" name="customer_city"></InputText>
            <InputText id="adress" label="Adress" type="text" name="customer_adress"></InputText>
            <InputText id="phone" label="Phone number" type="tel" name="customer_phone"></InputText>
            <button type="submit">abc</button>
        </motion.form>
    );
};

export default OrderDataForm;
