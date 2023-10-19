import React from 'react';
import MenuItemForm from './MenuItemForm/MenuItemForm';
import { Meal } from '../../../common/model';
import './MenuItem.scss';

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
