import React, { ReactElement, createContext, useState } from 'react';
import { Meal } from '../common/model';

export const CartContext = createContext({
    cartItemsCount: 0,
    cartItems: [],
    handleAddItems: (item: any, amount: number) => {},
    handleRemoveItem: (id: number) => {},
});

interface CartItem {
    totalPrice: number;
    item: Meal;
}

const CartProvider: React.FC<{ children: ReactElement | ReactElement[] }> = ({ children }) => {
    const [cartItems, setItems] = useState<Array<CartItem>>([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const handleAddItems = (item: Meal, amount: number) => {
        setItems((prevItems) => [
            ...prevItems,
            {
                item,
                totalPrice: item.price * amount,
            },
        ]);
        setCartItemsCount((prev) => prev + Number(amount));
    };

    const handleRemoveItem = (id: number) => {
        const filteredItems = cartItems.filter((i) => i.item.id !== id);
        setItems(filteredItems);
    };

    return (
        <CartContext.Provider
            value={{
                cartItemsCount,
                cartItems,
                handleAddItems,
                handleRemoveItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
