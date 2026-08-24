//! ---------------------------------------- Import

import { Link } from "react-router-dom";

//! ---------------------------------------- Component (Host)
function Host() {
  return (
    <>
      <div className="max-w-[1760px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Host Panel
            </h1>
            <nav className="space-y-2">
              <Link
                to={`/host`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">H</span>
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
                <span>Properties</span>
              </Link>
              <Link
                to={`review`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">⭐</span>
                </div>
                <span>Reviews</span>
              </Link>
            </nav>
          </aside>
          <main className="flex-1">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">About me</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Oskar"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">Oskar</h3>
                  <p className="text-sm text-gray-600">oskar@example.com</p>
                  <span className="inline-block mt-2 text-xs font-medium text-[#FF385C]">
                    Superhost
                  </span>
                </div>
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Host statistics
                  </h3>
                  <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                      <dt className="text-gray-600">Properties</dt>
                      <dd className="font-semibold text-gray-900">3</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Total bookings</dt>
                      <dd className="font-semibold text-gray-900">42</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Response rate</dt>
                      <dd className="font-semibold text-gray-900">100%</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Average rating</dt>
                      <dd className="font-semibold text-gray-900">4.92</dd>
                    </div>
                  </dl>
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
export default Host;
