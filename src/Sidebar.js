import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  DollarSign,
  Settings,
  BarChart2,
  Phone,
  FileText,
  Home,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard", path: "/dashboard" },
    { id: "customers", icon: Users, label: "Customers", path: "/customers" },
    { id: "sales", icon: DollarSign, label: "Sales", path: "/sales" },
    { id: "reports", icon: BarChart2, label: "Reports", path: "/reports" },
    { id: "contacts", icon: Phone, label: "Contacts", path: "/contacts" },
    { id: "documents", icon: FileText, label: "Documents", path: "/documents" },
    { id: "settings", icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">CRM System</h1>
      </div>
      <nav className="mt-6 flex flex-col">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 ${
                isActive
                  ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                  : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
