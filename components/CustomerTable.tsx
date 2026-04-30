'use client';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function CustomerTable({
  customers,
  onDelete,
}: {
  customers: Customer[];
  onDelete: (id: number) => void;
}) {
  if (!customers.length) {
    return (
      <div className="mt-8 bg-white rounded-2xl p-6 text-center text-gray-500 shadow">
        No customers found
      </div>
    );
  }

  return (
    <div className="mt-8">
      
      <div className="grid gap-4 md:hidden">
        {customers.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow p-4 border"
          >
            <div className="space-y-2">
              <div>
                <p className="text-xs text-gray-400">
                  Name
                </p>
                <p className="font-semibold">
                  {item.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Email
                </p>
                <p className="break-all">
                  {item.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Mobile
                </p>
                <p>{item.phone}</p>
              </div>

              <button
                onClick={() =>
                  onDelete(item.id)
                }
                className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="text-left px-6 py-4">
                Name
              </th>
              <th className="text-left px-6 py-4">
                Email
              </th>
              <th className="text-left px-6 py-4">
                Mobile
              </th>
              <th className="text-center px-6 py-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {item.name}
                </td>

                <td className="px-6 py-4">
                  {item.email}
                </td>

                <td className="px-6 py-4">
                  {item.phone}
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() =>
                      onDelete(item.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}