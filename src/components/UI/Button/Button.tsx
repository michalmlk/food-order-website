import React, { ReactElement, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
