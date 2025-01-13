import React from "react";
import { Users, Star } from "lucide-react";

const Contacts = ({ contacts, togglePotentialStatus }) => {
  return (
    <div className="flex">
      <div className="flex-1 p-10 bg-gray-50">
        <h1 className="text-3xl font-semibold text-gray-800">Contacts</h1>
        <p className="mt-2 text-gray-600">
          Manage your contacts and identify potential customers.
        </p>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 text-gray-600 font-medium">Name</th>
                <th className="p-4 text-gray-600 font-medium">Email</th>
                <th className="p-4 text-gray-600 font-medium">Potential</th>
                <th className="p-4 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{contact.name}</td>
                  <td className="p-4">{contact.email}</td>
                  <td className="p-4">
                    {contact.isPotential ? (
                      <span className="text-green-600 font-medium">Yes</span>
                    ) : (
                      <span className="text-gray-600">No</span>
                    )}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => togglePotentialStatus(contact.id)}
                      className={`px-3 py-1 text-sm font-medium rounded-lg ${
                        contact.isPotential
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {contact.isPotential ? "Remove" : "Mark"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800">Quick Stats</h2>
          <div className="mt-4 flex items-center space-x-4">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">
              Total Contacts: {contacts.length}
            </span>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">
              Potential Customers:{" "}
              {contacts.filter((contact) => contact.isPotential).length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
