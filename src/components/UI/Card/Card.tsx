import React, { ReactElement } from 'react';
import './Card.scss';

interface CardProps {
    children: ReactElement | ReactElement[];
}

const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="card">{children}</div>;
};

export default Card;
