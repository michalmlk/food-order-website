import React, { ReactNode } from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode;
    disabled?: boolean;
    secondary?: boolean;
    icon?: IconProp;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, secondary = false, icon }) => {
    return (
        <button
            className={`button ${secondary && 'secondary'} ${icon && 'icon'}`}
            onClick={onClick}
            disabled={disabled}
        >
            {!!icon ? <FontAwesomeIcon icon={icon!} /> : children}
        </button>
    );
};

export default Button;
