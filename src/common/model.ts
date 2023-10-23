export interface Meal {
    id: number;
    name: string;
    description: string;
    price: number;
    alergens: Array<string>;
}

export interface CartItem {
    totalPrice: number;
    item: Meal;
    amount: number;
}

export interface PaymentMethodProps {
    id: number;
    icon: any;
    paymentName: string;
}