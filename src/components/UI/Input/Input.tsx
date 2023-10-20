import React from 'react';
import { motion } from 'framer-motion';
import './Input.styles.scss';
import { variants } from '../../../common/animations';

interface InputTextProps {
    id: string;
    label: string;
    type: 'text' | 'email' | 'tel';
}

export const InputText: React.FC<InputTextProps> = ({ id, label, type }) => {
    return (
        <motion.div className="input-wrapper" variants={variants}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} />
        </motion.div>
    );
};
