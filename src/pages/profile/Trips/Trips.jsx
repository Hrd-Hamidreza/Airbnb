//! ---------------------------------------- Import

//! ---------------------------------------- Component (Trips)
function Trips() {
  return (
    <>
      {/* Main */}
      <div className="max-w-[1760px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Profile
            </h1>
            <nav className="space-y-2">
              <Link
                to={``}
                href="about.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">F</span>
                </div>
                <span>About me</span>
              </Link>
              <Link
                to={``}
                href="trips.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">🧳</span>
                </div>
                <span>Past trips</span>
              </Link>
              <Link
                to={``}
                href="favorites.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">♥</span>
                </div>
                <span>Favorites</span>
              </Link>
              <Link
                to={``}
                href="connections.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">👥</span>
                </div>
                <span>Connections</span>
              </Link>
            </nav>
          </aside>
          <main className="flex-1">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Past trips
              </h2>
              <p className="text-sm text-gray-600">
                Page 1 of 1 · 2 trips total
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0 w-full sm:w-48 h-36 rounded-xl bg-gray-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
                      alt="Cozy studio"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">
                      Cozy studio near Pyynikki
                    </p>
                    <p className="text-sm text-gray-600">Tampere, Finland</p>
                    <p className="text-sm text-gray-700 mt-2">
                      2026-01-16 → 2026-01-18 · 2 nights
                    </p>
                    <p className="text-sm text-gray-600">
                      Booking #BK-2026-001 ·{" "}
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold capitalize bg-green-100 text-green-800">
                        confirmed
                      </span>
                    </p>
                    <p className="text-base font-semibold text-gray-900 mt-2">
                      236 EUR
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={``}
                      href="#message-host-modal"
                      className="px-4 py-2 rounded-xl border border-gray-300 bg-white font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Message Host
                    </Link>
                    <Link
                      to={``}
                      href="#review-modal"
                      className="px-4 py-2 rounded-xl border border-gray-300 bg-white font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Review
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0 w-full sm:w-48 h-36 rounded-xl bg-gray-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                      alt="Modern apartment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">
                      Modern apartment downtown
                    </p>
                    <p className="text-sm text-gray-600">Helsinki, Finland</p>
                    <p className="text-sm text-gray-700 mt-2">
                      2025-11-10 → 2025-11-15 · 5 nights
                    </p>
                    <p className="text-sm text-gray-600">
                      Booking #BK-2025-042 ·{" "}
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold capitalize bg-gray-100 text-gray-800">
                        completed
                      </span>
                    </p>
                    <p className="text-base font-semibold text-gray-900 mt-2">
                      725 EUR
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-md">
                      You already commented on this!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Message Host Modal */}
      <div id="message-host-modal" className="modal-backdrop">
        <div className="modal-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Message Host
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
            Cozy studio near Pyynikki
          </p>
          <textarea
            placeholder="Type your message…"
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
              Send
            </button>
          </div>
        </div>
      </div>
      {/* Review Modal */}
      <div id="review-modal" className="modal-backdrop">
        <div className="modal-panel modal-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Write a review
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
            Cozy studio near Pyynikki
          </p>
          <form className="space-y-4" action="trips.html">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Overall rating (1–5)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C]">
                <option value="5" selected>
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comment
              </label>
              <textarea
                placeholder="Share your experience…"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C] resize-y"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cleanliness (1–5)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C]">
                <option value="5" selected>
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Communication (1–5)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C]">
                <option value="5" selected>
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-in (1–5)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C]">
                <option value="5" selected>
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accuracy (1–5)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C]">
                <option value="5" selected>
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location (1–5)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C]">
                <option value="5" selected>
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Value (1–5)
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF385C]">
                <option value="5" selected>
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <Link
                to={``}
                className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#FF385C] text-white font-medium hover:bg-[#E61E4D]"
              >
                Submit review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Trips;
