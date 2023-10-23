import React, { ReactElement, createContext, useState } from 'react';
import { Meal, CartItem } from '../common/model';
import { PaymentMethodProps } from '../common/model';
import { PAYMENT_METHODS } from '../common/utils';

export enum OrderStep {
    SUMMARY,
    PAYMENT,
    ORDER_DATA,
    FINALIZATION,
}

export const CartContext = createContext({
    cartItemsCount: 0,
    paymentMethod: {},
    cartItems: [],
    orderStep: OrderStep.SUMMARY,
    handleAddItems: (item: any, amount: number) => {},
    handleRemoveItem: (id: number, isSubtraction?: boolean) => {},
    handleNextStep: () => {},
    handlePrevStep: () => {},
    handlePaymentMethodChange: (id: number) => {},
});

const CartProvider: React.FC<{ children: ReactElement | ReactElement[] }> = ({ children }) => {
    const [cartItems, setItems] = useState<Array<CartItem>>([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [orderStep, setOrderStep] = useState<OrderStep>(OrderStep.SUMMARY);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodProps>(PAYMENT_METHODS[0]);

    const handleAddItems = (item: Meal, amount: number) => {
        const presentedItem = cartItems.filter((i) => i.item.id === item.id)[0];

        if (!!presentedItem) {
            const modifiedItems = cartItems.map((i) => {
                if (i.item.id === item.id) {
                    return {
                        item,
                        amount: presentedItem.amount + Number(amount),
                        totalPrice: i.totalPrice + i.item.price * Number(amount),
                    };
                }
                return i;
            });
            setItems(modifiedItems);
        } else {
            setItems((prevItems) => [
                ...prevItems,
                {
                    item,
                    amount: Number(amount),
                    totalPrice: item.price * Number(amount),
                },
            ]);
        }
        setCartItemsCount((prev) => prev + Number(amount));
    };

    const handleRemoveItem = (id: number, isSubtraction?: boolean) => {
        if (isSubtraction && cartItems.find((i) => i.item.id === id)!.amount > 1) {
            const filteredItems = cartItems.map((i) => {
                if (i.item.id === id) {
                    return {
                        item: i.item,
                        amount: i.amount - 1,
                        totalPrice: i.totalPrice - Number(i.item.price),
                    };
                }
                return i;
            });
            setItems(filteredItems);
            setCartItemsCount((prev) => prev - 1);
        } else {
            const filteredItems = cartItems.filter((i) => i.item.id !== id);
            setItems(filteredItems);
            const currentDeletingItem = cartItems.find((item) => item.item.id === id);
            setCartItemsCount((prev) => (currentDeletingItem ? prev - currentDeletingItem.amount : prev));
        }
    };

    const handleNextStep = (): void => {
        if (orderStep !== OrderStep.FINALIZATION) {
            setOrderStep((prev) => prev + 1);
        }
    };

    const handlePaymentMethodChange = (id: number): void => {
        setPaymentMethod(PAYMENT_METHODS.filter((p) => p.id === id)[0]);
    };

    const handlePrevStep = (): void => {
        if (orderStep !== OrderStep.SUMMARY) {
            setOrderStep((prev) => prev - 1);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItemsCount,
                cartItems,
                orderStep,
                paymentMethod,
                handlePaymentMethodChange,
                handleAddItems,
                handleRemoveItem,
                handleNextStep,
                handlePrevStep,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
