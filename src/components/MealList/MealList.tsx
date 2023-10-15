import React from 'react';
import Card from '../UI/Card/Card';
import './MealList.scss';

import { MOCKED_MEALS } from '../../assets/mockedMeals';
import MenuItem from './MenuItem/MenuItem';

const MealList: React.FC<{}> = () => {
    return (
        <Card>
            <div className="meals-content">
                <div className="list-header">
                    <h1>🥗 Menu</h1>
                </div>
                <div className="menu-list">
                    {MOCKED_MEALS.map((meal) => {
                        console.log(meal);
                        return <MenuItem meal={meal} />;
                    })}
                </div>
            </div>
        </Card>
    );
};

export default MealList;
