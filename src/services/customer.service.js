const Customer = require('../models/customer');

const createCustomer = async (customerData) => {
    try {
        return await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image,
        });
    } catch (err) {
        return null;
    }
}
module.exports = {createCustomer}