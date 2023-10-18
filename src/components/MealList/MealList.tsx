import React, { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import MenuItem from './MenuItem/MenuItem';
import { Meal } from '../../common/model';
import './MealList.scss';

const MealList: React.FC<{}> = () => {
    const [meals, setMeals] = useState<Array<Meal>>();
    useEffect(() => {
        // setTimeout for simulate behavior
        setTimeout(() => {
            fetch('/meals')
                .then((res) => res.json())
                .then((r) => setMeals(r));
        }, 500);
    }, []);
    return (
        <Card>
            <div className="meals-content">
                <div className="list-header">
                    <h1>🥗 Menu</h1>
                </div>
                <div className="menu-list">
                    {meals ? (
                        meals.map((meal) => {
                            return <MenuItem key={meal.id} meal={meal} />;
                        })
                    ) : (
                        <p>Fetching...</p>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default MealList;
