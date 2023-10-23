import React from 'react';
import MenuItemForm from './MenuItemForm/MenuItemForm';
import { Meal } from '../../../common/model';
import { motion } from 'framer-motion';
import './MenuItem.scss';

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const MenuItem: React.FC<{ meal: Meal }> = ({ meal }) => {
    return (
        <motion.div className="menu-item" variants={item}>
            <div className="details">
                <h2>{meal.name}</h2>
                <div className="details">{meal.description}</div>
            </div>
            <MenuItemForm item={meal} />
        </motion.div>
    );
};

export default MenuItem;
