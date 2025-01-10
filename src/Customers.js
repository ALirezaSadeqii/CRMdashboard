import React, { useState } from "react";
import { Users, Star } from "lucide-react";

const Customers = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      isPotential: true,
      Deal: "Done",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      isPotential: false,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      isPotential: true,
      Deal: "Pending",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      isPotential: false,
    },
  ]);

  const potentialCustomers = contacts.filter((contact) => contact.isPotential);

  const getDeal = (deal) => {
    switch (deal) {
      case "Done":
        return "px-3 py-1 text-sm font-medium rounded-lg bg-green-100 text-green-600";
      case "Pending":
        return "px-3 py-1 text-sm font-medium rounded-lg bg-blue-100 text-blue-600";
      default:
        return "px-3 py-1 text-sm font-medium rounded-lg bg-gray-100 text-gray-600";
    }
  };
  return (
    <div className="flex">
      <div className="flex-1 p-10 bg-gray-50">
        <h1 className="text-3xl font-semibold text-gray-800">
          Potential Customers
        </h1>
        <p className="mt-2 text-gray-600">
          View and manage your potential customer relationships.
        </p>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 text-gray-600 font-medium">Name</th>
                <th className="p-4 text-gray-600 font-medium">Email</th>
                <th className="p-4 text-gray-600 font-medium">Status</th>
                <th className="p-4 text-gray-600 font-medium">Deal</th>
              </tr>
            </thead>
            <tbody>
              {potentialCustomers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{customer.name}</td>
                  <td className="p-4">{customer.email}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-lg bg-green-100 text-green-600">
                      Potential Customer
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={getDeal(customer.Deal)}>
                      {customer.Deal}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800">
            Customer Stats
          </h2>
          <div className="mt-4 flex items-center space-x-4">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">
              Total Potential Customers: {potentialCustomers.length}
            </span>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">
              Conversion Rate:{" "}
              {((potentialCustomers.length / contacts.length) * 100).toFixed(1)}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
