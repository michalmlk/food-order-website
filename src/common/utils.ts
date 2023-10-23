import { faCreditCard, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { PaymentMethodProps } from "./model";

export const PAYMENT_METHODS: Array<PaymentMethodProps> = [
    {
        id: 0,
        icon: faCreditCard,
        paymentName: 'Credit Card',
    },
    {
        id: 1,
        icon: faMoneyBill,
        paymentName: 'Upon receipt',
    },
];