import React, { ReactElement } from 'react';
import './Button.scss';

interface ButtonProps {
    children: ReactElement | string[] | number;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
