const Sales = ({ sales }) => {
  return (
    <div className="flex">
      <div className="flex-1 p-10 bg-gray-50">
        <h1 className="text-3xl font-semibold text-gray-800">Sales</h1>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 text-gray-600 font-medium">Name</th>
                <th className="p-4 text-gray-600 font-medium">Email</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{sale.name}</td>
                  <td className="p-4">{sale.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sales;
