import React from 'react';
import './MenuItem.scss';
import MenuItemForm from './MenuItemForm/MenuItemForm';
import { Meal } from '../../../common/model';

const MenuItem: React.FC<{ meal: Meal }> = ({ meal }) => {
    return (
        <div className="menu-item">
            <div className="details">
                <h2>{meal.name}</h2>
                <div className="details">{meal.description}</div>
            </div>
            <MenuItemForm item={meal} />
            {/* <Button onClick={() => console.log('added')}>${meal.price.toString()}</Button> */}
        </div>
    );
};

export default MenuItem;
