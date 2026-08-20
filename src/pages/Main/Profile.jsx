//! ---------------------------------------- Import

import { Link } from "react-router-dom";

//! ---------------------------------------- Component (Profile)
function Profile() {
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
                to={`mainProfile`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">F</span>
                </div>
                <span>About me</span>
              </Link>
              <Link
                to={`trips`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">🧳</span>
                </div>
                <span>Past trips</span>
              </Link>
              <Link
                to={`favorites`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">♥</span>
                </div>
                <span>Favorites</span>
              </Link>
              <Link
                to={`profileConnections`}
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
                <button className="text-sm font-semibold text-gray-900 hover:underline">
                  Edit
                </button>
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
                        <dt className="text-gray-600">Languages</dt>
                        <dd className="font-medium text-gray-900">en, fi</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Verified</dt>
                        <dd className="font-medium text-gray-900">Yes</dd>
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
                        <dt className="text-gray-600">Bookings confirmed</dt>
                        <dd className="font-semibold text-gray-900">3</dd>
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
                  You haven't written any reviews yet.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Profile;
