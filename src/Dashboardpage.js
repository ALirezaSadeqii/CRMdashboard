import React from "react";
import {
  Users,
  DollarSign,
  BarChart2,
  TrendingUp,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import "./index.css";
const StatCard = ({ title, value, percentage, isIncrease, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between">
      <div className="bg-blue-100 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <span
        className={`flex items-center text-sm ${
          isIncrease ? "text-green-500" : "text-red-500"
        }`}
      >
        {isIncrease ? (
          <ArrowUp className="h-4 w-4 mr-1" />
        ) : (
          <ArrowDown className="h-4 w-4 mr-1" />
        )}
        {percentage}%
      </span>
    </div>
    <div className="mt-4">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  </div>
);

const Dashboardpage = () => {
  const stats = [
    {
      title: "Total Customers",
      value: "2,420",
      percentage: 12,
      isIncrease: true,
      icon: Users,
    },
    {
      title: "Total Revenue",
      value: "$48,250",
      percentage: 8,
      isIncrease: true,
      icon: DollarSign,
    },
    {
      title: "Active Projects",
      value: "89",
      percentage: 5,
      isIncrease: false,
      icon: BarChart2,
    },
    {
      title: "Conversion Rate",
      value: "28.5%",
      percentage: 4,
      isIncrease: true,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here's what's happening
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Download Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center space-x-4 border-b border-gray-100 pb-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">New customer signed up</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tasks/Upcoming */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold">Upcoming Tasks</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-gray-100 pb-4"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <div>
                      <p className="font-medium">
                        Follow up with Client #{item}
                      </p>
                      <p className="text-sm text-gray-500">Due in 2 days</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                    In Progress
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
