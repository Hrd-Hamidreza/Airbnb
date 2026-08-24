//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (HostConnections)
function HostConnections() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">👥</span>
                </div>
                <span>Connections</span>
              </Link>
              <Link
                to={`hostBookings`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">📅</span>
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
              <h2 className="text-2xl font-semibold text-gray-900">
                Connections
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-gray-900">
                        Demo User
                      </span>
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium capitalize bg-gray-100 text-gray-800">
                        open
                      </span>
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                        1 unread
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      demo@example.com
                    </p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-1">
                      Hi! What time is check-in?
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      2026-01-10 14:00
                    </p>
                  </div>
                  <Link
                    to={`hostConnectionsDetails`}
                    className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 font-medium text-gray-900 transition-colors"
                  >
                    Details
                  </Link>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-gray-900">
                        Jane Smith
                      </span>
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium capitalize bg-gray-100 text-gray-800">
                        open
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      jane@example.com
                    </p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-1">
                      Is parking available?
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      2026-01-08 11:20
                    </p>
                  </div>
                  <Link
                    to={`hostConnectionsDetails`}
                    className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 font-medium text-gray-900 transition-colors"
                  >
                    Details
                  </Link>
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
export default HostConnections;
