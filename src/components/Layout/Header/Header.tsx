import React from 'react';
import CartButton from './components/CartButton';
import useModal from '../../../hooks/useModal';
import CartModal from '../../Modal/CartModal/CartModal';
import './Header.scss';

const Header: React.FC<{}> = () => {
    const { isShowing, toggle } = useModal();

    return (
        <>
            {isShowing && (
                <CartModal
                    isShowing={isShowing}
                    onHide={() => {
                        toggle();
                        console.log(document.documentElement.scrollTop);
                    }}
                />
            )}
            <header className="header">
                <h1>TypycalReactMeals 🌯🍕</h1>
                <CartButton onClick={toggle} />
            </header>
        </>
    );
};

export default Header;
