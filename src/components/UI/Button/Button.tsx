import React, { ReactNode } from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode;
    disabled?: boolean;
    secondary?: boolean;
    icon?: IconProp;
    type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled = false,
    secondary = false,
    icon,
    type = 'button',
}) => {
    return (
        <motion.button
            className={`button ${secondary && 'secondary'} ${icon && 'icon'}`}
            onClick={onClick}
            disabled={disabled}
            whileTap={{ scale: 1.2 }}
            transition={{
                duration: 0.02,
            }}
            type={type}
        >
            {!!icon ? <FontAwesomeIcon icon={icon!} /> : children}
        </motion.button>
    );
};

export default Button;
