//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Favorites)
function Favorites() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">♥</span>
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
                Favorites
              </h2>
              <p className="text-sm text-gray-600">3 favorites</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <Link to={`/listDetails`} className="block">
                    <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
                        alt="Cozy studio near Pyynikki"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-sm font-semibold text-gray-900 shadow-sm">
                          € 118
                          <span className="text-gray-500 font-normal">
                            / night
                          </span>
                        </span>
                      </div>
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/95 text-xs font-semibold text-gray-900 shadow-sm">
                        Guest favorite
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={``}
                        href="../listing-detail.html"
                        className="flex-1 min-w-0"
                      >
                        <h3 className="font-semibold text-gray-900 truncate">
                          Cozy studio near Pyynikki
                        </h3>
                        <p className="text-sm text-gray-600 mt-0.5">
                          Tampere, Finland
                        </p>
                      </Link>
                      <button
                        className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 text-[#FF385C]"
                        title="Remove from favorites"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="#FF385C"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">4.85</span>
                      <span className="text-gray-500">(475 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <Link to={`/listDetails`} className="block">
                    <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                        alt="Modern apartment downtown"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-sm font-semibold text-gray-900 shadow-sm">
                          € 145
                          <span className="text-gray-500 font-normal">
                            / night
                          </span>
                        </span>
                      </div>
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/95 text-xs font-semibold text-gray-900 shadow-sm">
                        Guest favorite
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={``}
                        href="../listing-detail.html"
                        className="flex-1 min-w-0"
                      >
                        <h3 className="font-semibold text-gray-900 truncate">
                          Modern apartment downtown
                        </h3>
                        <p className="text-sm text-gray-600 mt-0.5">
                          Helsinki, Finland
                        </p>
                      </Link>
                      <button
                        className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 text-[#FF385C]"
                        title="Remove from favorites"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="#FF385C"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">4.92</span>
                      <span className="text-gray-500">(128 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <Link to={`/listDetails`} className="block">
                    <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop"
                        alt="Lake view cottage"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-sm font-semibold text-gray-900 shadow-sm">
                          € 210
                          <span className="text-gray-500 font-normal">
                            / night
                          </span>
                        </span>
                      </div>
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/95 text-xs font-semibold text-gray-900 shadow-sm">
                        Guest favorite
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={``}
                        href="../listing-detail.html"
                        className="flex-1 min-w-0"
                      >
                        <h3 className="font-semibold text-gray-900 truncate">
                          Lake view cottage
                        </h3>
                        <p className="text-sm text-gray-600 mt-0.5">
                          Espoo, Finland
                        </p>
                      </Link>
                      <button
                        className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 text-[#FF385C]"
                        title="Remove from favorites"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="#FF385C"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">4.98</span>
                      <span className="text-gray-500">(89 reviews)</span>
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
export default Favorites;
