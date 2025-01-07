import React from "react";
import {
  Users,
  DollarSign,
  Settings,
  BarChart2,
  Phone,
  FileText,
  Home,
} from "lucide-react";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "customers", icon: Users, label: "Customers" },
    { id: "sales", icon: DollarSign, label: "Sales" },
    { id: "reports", icon: BarChart2, label: "Reports" },
    { id: "contacts", icon: Phone, label: "Contacts" },
    { id: "documents", icon: FileText, label: "Documents" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className=" w-64 bg-white border-r border-gray-200 h-full min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">CRM System</h1>
      </div>
      <nav className="mt-6 flex flex-col">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 ${
                isActive
                  ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                  : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
