//! ---------------------------------------- Import

//! ---------------------------------------- Component (ProfileAbout)
function ProfileAbout() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
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
                    <div className="w-24 h-24 rounded-full bg-[#FF385C] flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-semibold text-white">
                        D
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Demo User
                    </h3>
                    <p className="text-sm text-gray-600">demo@example.com</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Joined Jan 2024
                    </p>
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
                          +358 40 123 4567
                        </dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bio</dt>
                        <dd className="font-medium text-gray-900">
                          Travel enthusiast from Finland
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
                        <dd className="font-medium text-gray-900">No</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Verified</dt>
                        <dd className="font-medium text-gray-900">Yes</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Languages</dt>
                        <dd className="font-medium text-gray-900">en, fi</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Statistics
                    </h3>
                    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <dt className="text-gray-600">Total bookings</dt>
                        <dd className="font-semibold text-gray-900">5</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bookings pending</dt>
                        <dd className="font-semibold text-gray-900">1</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bookings confirmed</dt>
                        <dd className="font-semibold text-gray-900">3</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Bookings completed</dt>
                        <dd className="font-semibold text-gray-900">1</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Total reviews</dt>
                        <dd className="font-semibold text-gray-900">2</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Average rating</dt>
                        <dd className="font-semibold text-gray-900">4.9</dd>
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
      {/* Edit Profile Modal (CSS :target — no JavaScript) */}
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
                value="Demo User"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value="demo@example.com"
                placeholder="your@email.com"
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
                placeholder="https://example.com/avatars/you.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <input
                type="tel"
                value="+358 40 123 4567"
                placeholder="e.g. +358 40 123 4567"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About (bio)
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about yourself"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              >
                Travel enthusiast from Finland
              </textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages
              </label>
              <input
                type="text"
                value="en, fi"
                placeholder="e.g. en, fi, fa"
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
export default ProfileAbout;
