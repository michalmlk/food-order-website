import React, { ReactElement } from 'react';
import { InputText } from '../../../../UI/Input/Input';
import { motion } from 'framer-motion';
import { container } from '../../../../../common/animations';

const OrderDataForm: React.FC<{}> = (): ReactElement => {
    return (
        <motion.form className="form-wrapper" variants={container} initial="hidden" animate="visible">
            <InputText id="name" label="Name" type="text"></InputText>
            <InputText id="city" label="City" type="text"></InputText>
            <InputText id="adress" label="Adress" type="text"></InputText>
            <InputText id="phone" label="Phone number" type="tel"></InputText>
        </motion.form>
    );
};

export default OrderDataForm;
