//! ---------------------------------------- Import

import { Link } from "react-router-dom";

//! ---------------------------------------- Component (Support)
function Support() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✨</span>
                </div>
                <span>Amenities</span>
              </Link>
              <Link
                to={`support`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
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
                  Support Messages
                </h2>
                <select className="px-4 py-2 border border-gray-300 rounded-lg">
                  <option value="">All Status</option>
                  <option value="open">Open</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Payment issue
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        From: John Doe
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Open
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    I have a problem with my payment. The amount was charged
                    twice.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2024-01-18</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-green-100 text-green-800 hover:bg-green-200">
                        Mark as Resolved
                      </button>
                      <Link
                        to={``}
                        href="#reply-modal"
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold hover:bg-blue-200"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Booking cancellation
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        From: Jane Smith
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Resolved
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    I need to cancel my booking due to a family emergency.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2024-01-17</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                        Reopen
                      </button>
                      <Link
                        to={``}
                        href="#reply-modal"
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold hover:bg-blue-200"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Account problem
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        From: Bob Johnson
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Open
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    I cannot access my account after resetting my password.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2024-01-16</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-green-100 text-green-800 hover:bg-green-200">
                        Mark as Resolved
                      </button>
                      <Link
                        to={``}
                        href="#reply-modal"
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold hover:bg-blue-200"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Reply Modal */}
      <div id="reply-modal" className="modal-backdrop">
        <div className="modal-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Reply to support message
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
          <p className="text-sm text-gray-600 mb-4">
            Payment issue — From: John Doe
          </p>
          <textarea
            placeholder="Type your reply…"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C] focus:border-transparent resize-y mb-4"
          ></textarea>
          <div className="flex gap-2 justify-end">
            <Link
              to={``}
              className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-[#FF385C] text-white font-medium hover:bg-[#E61E4D]"
            >
              Send reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Support;
