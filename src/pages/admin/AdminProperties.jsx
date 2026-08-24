//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (AdminProperties)
function AdminProperties() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
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
              <h2 className="text-2xl font-semibold text-gray-900">
                Properties
              </h2>
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[16/10] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
                      alt="Cozy studio near Pyynikki"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        Cozy studio near Pyynikki
                      </h3>
                      <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                        Entire rental unit
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Tampere, Finland
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">
                          ★ 4.85
                        </span>
                        <span className="text-sm text-gray-500">(475)</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        €118/night
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                      <span className="text-sm text-gray-600">Oskar</span>
                      <span className="text-xs font-medium text-[#FF385C]">
                        Superhost
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      Status: active · Created 2024-03-10
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[16/10] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                      alt="Modern apartment downtown"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        Modern apartment downtown
                      </h3>
                      <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                        Entire rental unit
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Helsinki, Finland
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">
                          ★ 4.92
                        </span>
                        <span className="text-sm text-gray-500">(128)</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        €145/night
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                      <span className="text-sm text-gray-600">Maria</span>
                      <span className="text-xs font-medium text-[#FF385C]">
                        Superhost
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      Status: active · Created 2024-03-10
                    </div>
                  </div>
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
export default AdminProperties;
