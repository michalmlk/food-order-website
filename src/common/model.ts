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
}