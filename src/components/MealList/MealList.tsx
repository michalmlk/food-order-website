import React, { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import MenuItem from './MenuItem/MenuItem';
import { Meal } from '../../common/model';
import { motion } from 'framer-motion';
import './MealList.scss';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const MealList: React.FC<{}> = () => {
    const [meals, setMeals] = useState<Array<Meal>>([]);

    useEffect(() => {
        fetch('http://localhost:3000/meals')
            .then((res) => res.json())
            .then((r) => setMeals(r));
    }, []);

    return (
        <Card>
            <div className="meals-content">
                <div className="list-header">
                    <h1>🥗 Menu</h1>
                </div>
                <motion.div className="menu-list" variants={container} initial="hidden" animate="visible">
                    {meals ? (
                        meals.map((meal) => {
                            return <MenuItem key={meal.id} meal={meal} />;
                        })
                    ) : (
                        <p>Fetching...</p>
                    )}
                </motion.div>
            </div>
        </Card>
    );
};

export default MealList;
