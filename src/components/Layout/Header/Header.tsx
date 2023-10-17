import React from 'react';
import './Header.scss';
import CartButton from './components/CartButton';
import useModal from '../../../hooks/useModal';
import CartModal from '../../Modal/CartModal/CartModal';

const Header: React.FC<{}> = () => {
    const { isShowing, toggle } = useModal();

    return (
        <>
            {isShowing && (
                <CartModal isShowing={isShowing} onHide={toggle} onOrder={() => console.log('ordering...')} />
            )}
            <header className="header">
                <h1>TypycalReactMeals 🌯🍕</h1>
                <CartButton onClick={toggle} />
            </header>
        </>
    );
};

export default Header;
