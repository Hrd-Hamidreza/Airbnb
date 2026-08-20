//! ---------------------------------------- Import

//! ---------------------------------------- Component (ProfileConnectionsDetails)
function ProfileConnectionsDetails() {
  return (
    <>
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">🧳</span>
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">👥</span>
                </div>
                <span>Connections</span>
              </Link>
            </nav>
          </aside>
          <main className="flex-1">
            <div className="space-y-4">
              <Link
                to={``}
                href="connections.html"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to list
              </Link>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Conversation details
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Status:{" "}
                      <span className="capitalize font-medium">open</span>
                      <span className="ml-3">Booking # BK-2026-001</span>
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-xl border border-gray-300 bg-white font-medium text-gray-900 hover:bg-gray-50">
                    Close Ticket
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="font-semibold text-gray-900">
                        Demo User
                      </span>
                      <span className="text-xs text-gray-500">
                        2026-01-10 14:00
                      </span>
                    </div>
                    <p className="text-gray-800 text-sm">
                      Hi! What time is check-in?
                    </p>
                    <p className="text-xs text-gray-500">
                      To: Oskar (oskar@example.com)
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="font-semibold text-gray-900">Oskar</span>
                      <span className="text-xs text-gray-500">
                        2026-01-10 14:30
                      </span>
                    </div>
                    <p className="text-gray-800 text-sm">
                      Check-in is from 3:00 PM. I'll send you the door code
                      before arrival.
                    </p>
                    <p className="text-xs text-gray-500">
                      To: Demo User (demo@example.com)
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex gap-3">
                      <textarea
                        placeholder="Type your message…"
                        rows="3"
                        className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#FF385C] focus:border-transparent resize-y min-h-[80px]"
                      ></textarea>
                      <button className="self-end px-5 py-3 rounded-xl bg-[#FF385C] text-white font-semibold hover:bg-[#E61E4D]">
                        Send
                      </button>
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
export default ProfileConnectionsDetails;
