import React from 'react';
import Card from '../UI/Card/Card';
import { MOCKED_MEALS } from '../../assets/mockedMeals';
import MenuItem from './MenuItem/MenuItem';
import './MealList.scss';

const MealList: React.FC<{}> = () => {
    return (
        <Card>
            <div className="meals-content">
                <div className="list-header">
                    <h1>🥗 Menu</h1>
                </div>
                <div className="menu-list">
                    {MOCKED_MEALS.map((meal) => {
                        return <MenuItem key={meal.id} meal={meal} />;
                    })}
                </div>
            </div>
        </Card>
    );
};

export default MealList;
