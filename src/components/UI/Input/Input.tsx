import React from 'react';
import { motion } from 'framer-motion';
import './Input.styles.scss';
import { variants } from '../../../common/animations';

interface InputTextProps {
    id: string;
    label: string;
    type: 'text' | 'email' | 'tel';
    name: string;
    pattern?: string;
}

export const InputText: React.FC<InputTextProps> = ({ id, label, type, name, pattern }) => {
    return (
        <motion.div className="input-wrapper" variants={variants}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={name} required pattern={pattern} />
        </motion.div>
    );
};
