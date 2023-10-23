module.exports = {
    orderValidator: function ({ customer_name, customer_city, customer_adress, customer_phone }) {
        if (
            customer_name.length < 1 ||
            customer_city.length < 1 ||
            customer_adress.length < 1 ||
            typeof customer_phone !== 'number' ||
            customer_phone.toString().length !== 9
        ) {
            return false;
        }
        return true;
    },
};
