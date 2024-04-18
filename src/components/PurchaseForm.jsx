import React, { useState } from 'react';

const PurchaseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
    product: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your logic here for processing the form submission
    console.log(formData);
  };

  return (
    <div className="xl:w-auto max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-violet-500">Purchase Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* More fields for email, address, etc. */}
        {/* Credit Card Information */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creditCardNumber">
            Credit Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creditCardNumber"
            type="text"
            name="creditCardNumber"
            value={formData.creditCardNumber}
            onChange={handleChange}
            required
          />
        </div>
        {/* More fields for expiration date and CVV */}
        {/* Product Information */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
            Product
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded "
            type="submit"
          >
            Buy Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
