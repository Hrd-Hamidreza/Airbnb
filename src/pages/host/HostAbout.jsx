//! ---------------------------------------- Import

//! ---------------------------------------- Component (HostAbout)
function HostAbout() {
  return (
    <>
      {/* Main */}
      <div className="max-w-[1760px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Host</h1>
            <nav className="space-y-2">
              <Link
                to={`hostAbout`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
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
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">
                  About me
                </h2>
                <Link
                  to={``}
                  href="#edit-profile-modal"
                  className="text-sm font-semibold text-gray-900 hover:underline"
                >
                  Edit
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                      alt="Oskar"
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Oskar
                    </h3>
                    <p className="text-sm text-gray-600">oskar@example.com</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Joined Mar 2024
                    </p>
                    <span className="inline-block mt-2 text-xs font-medium text-[#FF385C]">
                      Superhost
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Profile
                    </h3>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <dt className="text-gray-600">Phone</dt>
                        <dd className="font-medium text-gray-900">
                          +358 50 987 6543
                        </dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bio</dt>
                        <dd className="font-medium text-gray-900">
                          Experienced host in Tampere and Helsinki.
                        </dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Response time</dt>
                        <dd className="font-medium text-gray-900">
                          within an hour
                        </dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Response rate</dt>
                        <dd className="font-medium text-gray-900">100%</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Superhost</dt>
                        <dd className="font-medium text-gray-900">Yes</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Verified</dt>
                        <dd className="font-medium text-gray-900">Yes</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Languages</dt>
                        <dd className="font-medium text-gray-900">
                          en, fi, sv
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Statistics
                    </h3>
                    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <dt className="text-gray-600">Total properties</dt>
                        <dd className="font-semibold text-gray-900">3</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Total bookings</dt>
                        <dd className="font-semibold text-gray-900">42</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bookings pending</dt>
                        <dd className="font-semibold text-gray-900">2</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bookings confirmed</dt>
                        <dd className="font-semibold text-gray-900">28</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bookings completed</dt>
                        <dd className="font-semibold text-gray-900">10</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bookings cancelled</dt>
                        <dd className="font-semibold text-gray-900">2</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Total reviews</dt>
                        <dd className="font-semibold text-gray-900">18</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Average rating</dt>
                        <dd className="font-semibold text-gray-900">4.92</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Reviews I've written
                </h3>
                <p className="text-sm text-gray-600">
                  You haven't written any reviews yet. Reviews you write will
                  appear here.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Edit Profile Model */}
      <div id="edit-profile-modal" className="modal-backdrop">
        <div className="modal-panel modal-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Edit profile
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
          <form className="space-y-4" action="about.html">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value="Oskar"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value="oskar@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New password
              </label>
              <input
                type="password"
                placeholder="Leave blank to keep current password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                autocomplete="new-password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Avatar URL
              </label>
              <input
                type="url"
                value="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <input
                type="tel"
                value="+358 50 987 6543"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About (bio)
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              >
                Experienced host in Tampere and Helsinki.
              </textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages
              </label>
              <input
                type="text"
                value="en, fi, sv"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="bg-[#FF385C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#E61E4D] transition-colors"
              >
                Save
              </button>
              <Link
                to={``}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors inline-flex items-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default HostAbout;
