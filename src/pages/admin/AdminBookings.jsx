//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (AdminBookings)
function AdminBookings() {
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
                to={`users`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
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
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Booking
                </h2>
                <div className="flex flex-wrap gap-3">
                  <input
                    type="number"
                    placeholder="Property ID"
                    className="px-3 py-2 border border-gray-300 rounded-lg w-28"
                  />
                  <select className="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Created at</option>
                    <option>Check-in date</option>
                    <option>Total price</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Desc</option>
                    <option>Asc</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="">All status</option>
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Booking #
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Property
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Guest
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Check-in / Check-out
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Nights
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Total
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Payment
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          BK-2026-001
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Cozy studio near Pyynikki, Tampere
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Demo User
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          2026-01-16 / 2026-01-18
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">2</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                          EUR 236
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full capitalize bg-green-100 text-green-800">
                            confirmed
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full capitalize bg-green-100 text-green-800">
                            paid
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          BK-2025-042
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Modern apartment downtown, Helsinki
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          John Doe
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          2025-11-10 / 2025-11-15
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">5</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                          EUR 725
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full capitalize bg-gray-100 text-gray-800">
                            completed
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full capitalize bg-green-100 text-green-800">
                            paid
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          BK-2026-008
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Lake view cottage, Espoo
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Jane Smith
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          2026-02-01 / 2026-02-05
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">4</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                          EUR 840
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full capitalize bg-amber-100 text-amber-800">
                            pending
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full capitalize bg-amber-100 text-amber-800">
                            pending
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default AdminBookings;
