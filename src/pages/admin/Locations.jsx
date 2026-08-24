//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Locations)
function Locations() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📅</span>
                </div>
                <span>Booking</span>
              </Link>
              <Link
                to={`locations`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
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
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                City / Country
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Countries
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <form className="flex flex-wrap gap-3">
                      <input
                        type="text"
                        placeholder="Country name"
                        className="px-3 py-2 border border-gray-300 rounded-lg flex-1 min-w-[120px]"
                      />
                      <input
                        type="text"
                        placeholder="Code (e.g. FI)"
                        className="px-3 py-2 border border-gray-300 rounded-lg w-24"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D]"
                      >
                        Add Country
                      </button>
                    </form>
                    <ul className="divide-y divide-gray-200 max-h-[320px] overflow-y-auto">
                      <li className="flex items-center justify-between py-3 px-2 rounded-lg bg-[#FF385C]/10">
                        <span className="font-medium text-gray-900">
                          Finland
                        </span>
                        <span className="text-xs text-gray-500 uppercase">
                          FI
                        </span>
                        <span className="text-xs text-gray-500">
                          24 properties
                        </span>
                      </li>
                      <li className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-50">
                        <span className="font-medium text-gray-900">
                          Estonia
                        </span>
                        <span className="text-xs text-gray-500 uppercase">
                          EE
                        </span>
                        <span className="text-xs text-gray-500">
                          12 properties
                        </span>
                      </li>
                      <li className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-50">
                        <span className="font-medium text-gray-900">
                          Sweden
                        </span>
                        <span className="text-xs text-gray-500 uppercase">
                          SE
                        </span>
                        <span className="text-xs text-gray-500">
                          8 properties
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Cities (Finland)
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <form className="flex gap-3">
                      <input
                        type="text"
                        placeholder="City name"
                        className="px-3 py-2 border border-gray-300 rounded-lg flex-1"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D]"
                      >
                        Add City
                      </button>
                    </form>
                    <ul className="divide-y divide-gray-200 max-h-[320px] overflow-y-auto">
                      <li className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">
                          Helsinki
                        </span>
                        <span className="text-xs text-gray-500">
                          10 properties
                        </span>
                      </li>
                      <li className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">
                          Tampere
                        </span>
                        <span className="text-xs text-gray-500">
                          8 properties
                        </span>
                      </li>
                      <li className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Turku</span>
                        <span className="text-xs text-gray-500">
                          4 properties
                        </span>
                      </li>
                      <li className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Espoo</span>
                        <span className="text-xs text-gray-500">
                          2 properties
                        </span>
                      </li>
                    </ul>
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
export default Locations;
