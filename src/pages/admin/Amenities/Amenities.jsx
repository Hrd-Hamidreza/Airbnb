//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Amenities)
function Amenities() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🌍</span>
                </div>
                <span>City / Country</span>
              </Link>
              <Link
                to={`amenities`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
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
                Amenities
              </h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Add amenity
                  </h3>
                  <form className="flex flex-wrap gap-3 items-end">
                    <div className="flex-1 min-w-[140px]">
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. WiFi"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="w-32">
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Category
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>basic</option>
                        <option>premium</option>
                        <option>safety</option>
                      </select>
                    </div>
                    <div className="w-36">
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Icon
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. wifi"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D]"
                    >
                      Add
                    </button>
                  </form>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-3 capitalize">
                      basic
                    </h4>
                    <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                      <li className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">
                            WiFi
                          </span>
                          <span className="text-xs text-gray-400">wifi</span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={``}
                            href="#edit-amenity-modal"
                            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
                          >
                            Edit
                          </Link>
                          <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded">
                            Delete
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">
                            Kitchen
                          </span>
                          <span className="text-xs text-gray-400">kitchen</span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={``}
                            href="#edit-amenity-modal"
                            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
                          >
                            Edit
                          </Link>
                          <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded">
                            Delete
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">
                            Parking
                          </span>
                          <span className="text-xs text-gray-400">parking</span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={``}
                            href="#edit-amenity-modal"
                            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
                          >
                            Edit
                          </Link>
                          <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded">
                            Delete
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">TV</span>
                          <span className="text-xs text-gray-400">tv</span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={``}
                            href="#edit-amenity-modal"
                            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
                          >
                            Edit
                          </Link>
                          <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded">
                            Delete
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">
                            Heating
                          </span>
                          <span className="text-xs text-gray-400">heating</span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={``}
                            href="#edit-amenity-modal"
                            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
                          >
                            Edit
                          </Link>
                          <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded">
                            Delete
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-3 capitalize">
                      safety
                    </h4>
                    <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                      <li className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">
                            Smoke alarm
                          </span>
                          <span className="text-xs text-gray-400">
                            smoke_alarm
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={``}
                            href="#edit-amenity-modal"
                            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
                          >
                            Edit
                          </Link>
                          <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded">
                            Delete
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">
                            Carbon monoxide alarm
                          </span>
                          <span className="text-xs text-gray-400">
                            co_alarm
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={``}
                            href="#edit-amenity-modal"
                            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
                          >
                            Edit
                          </Link>
                          <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded">
                            Delete
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Edit Amenity Modal */}
      <div id="edit-amenity-modal" className="modal-backdrop">
        <div className="modal-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Edit amenity
            </h3>
            <Link
              to={``}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
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
          <form className="space-y-4" action="amenities.html">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value="WiFi"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent">
                <option value="basic" selected>
                  basic
                </option>
                <option value="premium">premium</option>
                <option value="safety">safety</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Icon
              </label>
              <input
                type="text"
                value="wifi"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
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
export default Amenities;
