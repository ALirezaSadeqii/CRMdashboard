import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardPage from "./Dashboardpage";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      // Add cases for other pages here
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex  min-h-screen">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-6 bg-gray-50">{renderPage()}</main>
    </div>
  );
}

export default App;
