//! ---------------------------------------- Import

import { Link } from "react-router-dom";

//! ---------------------------------------- Component (Users)
function Users() {
  return (
    <>
      {/* Main */}
      <div className="max-w-[1760px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Admin Panel
            </h1>
            <nav className="space-y-2">
              <Link
                to={`users`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">👥</span>
                </div>
                <span>Users</span>
              </Link>
              <Link
                to={`adminProperties`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏠</span>
                </div>
                <span>Properties</span>
              </Link>
              <Link
                to={`adminBookings`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📅</span>
                </div>
                <span>Booking</span>
              </Link>
              <Link
                to={`locations`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🌍</span>
                </div>
                <span>City / Country</span>
              </Link>
              <Link
                to={`amenities`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✨</span>
                </div>
                <span>Amenities</span>
              </Link>
              <Link
                to={`support`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💬</span>
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
                <Link
                  to={``}
                  href="#add-user-modal"
                  className="px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D]"
                >
                  Add New User
                </Link>
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
                        <Link
                          to={``}
                          href="#edit-user-modal"
                          className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold hover:bg-blue-200"
                        >
                          Edit
                        </Link>
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
                        <Link
                          to={``}
                          href="#edit-user-modal"
                          className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold hover:bg-blue-200"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Admin User
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        admin@example.com
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        super_admin
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        2024-01-01
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded text-xs font-semibold"
                          title="Super Admin accounts are protected"
                        >
                          Protected
                        </span>
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
                        <Link
                          to={``}
                          href="#edit-user-modal"
                          className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold hover:bg-blue-200"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Add User Modal */}
      <div id="add-user-modal" className="modal-backdrop">
        <div className="modal-panel">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Add New User
            </h3>
            <Link
              to={``}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>
          <form className="space-y-4" action="users.html">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                minlength="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                minlength="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent">
                <option value="1">Admin (role_id=1)</option>
                <option value="4" selected>
                  User (role_id=4)
                </option>
                <option value="5">Host (role_id=5)</option>
              </select>
            </div>
            <div className="flex gap-3 pt-2">
              <Link
                to={``}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 text-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D]"
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Edit User Modal */}
      <div id="edit-user-modal" className="modal-backdrop">
        <div className="modal-panel">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Edit User</h3>
            <Link
              to={``}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>
          <form className="space-y-4" action="users.html">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value="John Doe"
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value="john@example.com"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New password (leave blank to keep current)
              </label>
              <input
                type="password"
                placeholder="••••••••"
                minlength="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm new password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                minlength="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent">
                <option value="1">Admin (role_id=1)</option>
                <option value="4" selected>
                  User (role_id=4)
                </option>
                <option value="5">Host (role_id=5)</option>
              </select>
            </div>
            <div className="flex gap-3 pt-2">
              <Link
                to={``}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 text-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Users;
