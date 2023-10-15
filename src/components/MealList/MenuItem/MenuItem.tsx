import React from 'react';
import './MenuItem.scss';
import Button from '../../UI/Button/Button';

interface Meal {
    id: number;
    name: string;
    description: string;
    price: number;
    alergens: Array<string>;
}

const MenuItem: React.FC<{ meal: Meal }> = ({ meal }) => {
    return (
        <div className="menu-item">
            <div className="details">
                <h2>{meal.name}</h2>
                <div className="details">{meal.description}</div>
            </div>
            <Button onClick={() => console.log('added')}>${meal.price.toString()}</Button>
        </div>
    );
};

export default MenuItem;
