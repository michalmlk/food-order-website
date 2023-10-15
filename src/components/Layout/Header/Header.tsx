import React from 'react';
import './Header.scss';
import CartButton from './components/CartButton';

interface HeaderProps {
    onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
    return (
        <header className="header">
            <h1>TypycalReactMeals 🌯🍕</h1>
            <CartButton onClick={onCartOpen} itemsCount={0} />
        </header>
    );
};

export default Header;
