import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboardpage from "./Dashboardpage";
import Contacts from "./Contacts";
import Customers from "./Customers";
import "./index.css";

function App() {
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
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboardpage />} />
            <Route
              path="/contacts"
              element={
                <Contacts
                  contacts={contacts}
                  togglePotentialStatus={togglePotentialStatus}
                />
              }
            />
            <Route
              path="/customers"
              element={<Customers contacts={contacts} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
