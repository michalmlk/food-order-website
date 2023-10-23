import React, { FormEvent, ReactElement, useContext } from 'react';
import { InputText } from '../../../../UI/Input/Input';
import { motion } from 'framer-motion';
import { container } from '../../../../../common/animations';
import { CartContext } from '../../../../../context/CartContext';
import { CartItem } from '../../../../../common/model';

const OrderDataForm: React.FC<{}> = (): ReactElement => {
    const { cartItems } = useContext(CartContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const customerData = Object.fromEntries(formData.entries());

        const orderItems = cartItems.map((item: CartItem) => ({
            amount: item.amount,
            name: item.item.name,
        }));

        console.log(customerData, orderItems);
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
