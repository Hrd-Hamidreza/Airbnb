//! ---------------------------------------- Import
//! ---------------------------------------- Component (Admin)
function Admin() {
  return (
    <>
      <div className="max-w-[1760px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Admin Panel
            </h1>
            <nav className="space-y-2">
              <Link
                to={``}
                href="admin.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">👥</span>
                </div>
                <span>Users</span>
              </Link>
              <Link
                to={``}
                href="admin-properties.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">🏠</span>
                </div>
                <span>Properties</span>
              </Link>
              <Link
                to={``}
                href="admin-bookings.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">📅</span>
                </div>
                <span>Booking</span>
              </Link>
              <Link
                to={``}
                href="admin-locations.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">🌍</span>
                </div>
                <span>City / Country</span>
              </Link>
              <Link
                to={``}
                href="admin-amenities.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">✨</span>
                </div>
                <span>Amenities</span>
              </Link>
              <Link
                to={``}
                href="admin-support.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">💬</span>
                </div>
                <span>Support</span>
              </Link>
            </nav>
          </aside>
          <main className="flex-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Users Management
                </h2>
                <button className="px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D]">
                  Add New User
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Created
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        John Doe
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        john@example.com
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">guest</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        2024-01-15
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Jane Smith
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        jane@example.com
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">host</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        2024-02-20
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Admin User
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        admin@example.com
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">admin</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        2024-01-01
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Oskar Host
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        oskar@example.com
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">host</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        2024-03-10
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Admin;
