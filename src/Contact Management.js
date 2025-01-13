import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Contacts";
import Customers from "./Customers";

const ContactManagement = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 5,
      name: "Chris Brown",
      email: "chris@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 6,
      name: "Laura Wilson",
      email: "laura@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 7,
      name: "David Taylor",
      email: "david@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 8,
      name: "Sophia Anderson",
      email: "sophia@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 9,
      name: "James Thomas",
      email: "james@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 10,
      name: "Olivia Martin",
      email: "olivia@example.com",
      isPotential: false,
      Deal: null,
    },
    {
      id: 11,
      name: "William Moore",
      email: "william@example.com",
      isPotential: false,
      Deal: null,
    },
  ]);

  const togglePotentialStatus = (id) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id
          ? {
              ...contact,
              isPotential: !contact.isPotential,
              Deal: !contact.isPotential ? "Pending" : null,
            }
          : contact
      )
    );
  };

  return (
    <Routes>
      <Route
        path="/contacts"
        element={
          <Contacts
            contacts={contacts}
            togglePotentialStatus={togglePotentialStatus}
          />
        }
      />
      <Route path="/customers" element={<Customers contacts={contacts} />} />
    </Routes>
  );
};

export default ContactManagement;
