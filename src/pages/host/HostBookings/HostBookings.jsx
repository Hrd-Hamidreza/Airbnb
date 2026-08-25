//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (HostBookings)
function HostBookings() {
  return (
    <>
      <div className="max-w-[1760px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Host</h1>
            <nav className="space-y-2">
              <Link
                to={`hostAbout`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">H</span>
                </div>
                <span>About me</span>
              </Link>
              <Link
                to={`hostConnections`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">👥</span>
                </div>
                <span>Connections</span>
              </Link>
              <Link
                to={`hostBookings`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">📅</span>
                </div>
                <span>Bookings</span>
              </Link>
              <Link
                to={`hostProperties`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">🏠</span>
                </div>
                <span>Add Property</span>
              </Link>
              <Link
                to={`review`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">⭐</span>
                </div>
                <span>Review</span>
              </Link>
            </nav>
          </aside>
          <main className="flex-1">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Bookings</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Booking #
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Property
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Guest
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Check-in / Check-out
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Nights
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          BK-2026-003
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <Link
                            to={`/listDetails`}
                            className="hover:text-[#FF385C] underline"
                          >
                            Cozy studio near Pyynikki
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Demo User
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          2026-02-01 → 2026-02-03
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">2</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          236 EUR
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            pending
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-green-100 text-green-800 rounded text-xs font-semibold hover:bg-green-200">
                              Confirm
                            </button>
                            <button className="px-3 py-1.5 bg-red-100 text-red-800 rounded text-xs font-semibold hover:bg-red-200">
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          BK-2026-001
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <Link
                            to={`/listDetails`}
                            className="hover:text-[#FF385C] underline"
                          >
                            Cozy studio near Pyynikki
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Demo User
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          2026-01-16 → 2026-01-18
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">2</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          236 EUR
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            confirmed
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">—</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          BK-2025-042
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <Link
                            to={`/listDetails`}
                            className="hover:text-[#FF385C] underline"
                          >
                            Modern apartment downtown
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Jane Smith
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          2025-11-10 → 2025-11-15
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">5</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          725 EUR
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            completed
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Page 1 of 1 · 3 bookings total
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default HostBookings;
