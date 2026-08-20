//! ---------------------------------------- Import

//! ---------------------------------------- Component (HostProperties)
function HostProperties() {
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
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">H</span>
                </div>
                <span>About me</span>
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
              <Link
                to={``}
                href="bookings.html"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="">📅</span>
                </div>
                <span>Bookings</span>
              </Link>
              <Link
                to={`hostProperties`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-gray-100 text-gray-900 font-medium"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF385C] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">🏠</span>
                </div>
                <span>Add Property</span>
              </Link>
              <Link
                to={``}
                href="reviews.html"
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
                  My Properties
                </h2>
                <Link
                  to={``}
                  href="#add-property-modal"
                  className="px-4 py-2 bg-[#FF385C] text-white rounded-lg font-semibold hover:bg-[#E61E4D] transition-colors"
                >
                  Add Property
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
                      alt="Cozy studio"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/95 text-sm font-semibold text-gray-900 shadow-sm">
                      € 89 / night
                    </span>
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold capitalize bg-green-100 text-green-800">
                      active
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 truncate">
                      Cozy studio near Pyynikki
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Tampere, Finland
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Link
                        to={``}
                        href="../listing-detail.html"
                        className="flex-1 text-center py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </Link>
                      <button className="flex-1 py-2 rounded-lg border border-red-200 text-sm font-semibold text-red-600 hover:bg-red-50">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                      alt="Modern apartment"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/95 text-sm font-semibold text-gray-900 shadow-sm">
                      € 145 / night
                    </span>
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold capitalize bg-green-100 text-green-800">
                      active
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 truncate">
                      Modern apartment downtown
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Helsinki, Finland
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Link
                        to={``}
                        href="../listing-detail.html"
                        className="flex-1 text-center py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </Link>
                      <button className="flex-1 py-2 rounded-lg border border-red-200 text-sm font-semibold text-red-600 hover:bg-red-50">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                      alt="Lake view cabin"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/95 text-sm font-semibold text-gray-900 shadow-sm">
                      € 120 / night
                    </span>
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold capitalize bg-green-100 text-green-800">
                      active
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 truncate">
                      Lake view cabin
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Tampere, Finland
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Link
                        to={``}
                        href="../listing-detail.html"
                        className="flex-1 text-center py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </Link>
                      <button className="flex-1 py-2 rounded-lg border border-red-200 text-sm font-semibold text-red-600 hover:bg-red-50">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Page 1 of 1 · 3 properties total
              </p>
            </div>
          </main>
        </div>
      </div>
      {/* add Property Modal */}
      <div id="add-property-modal" className="modal-backdrop">
        <div className="modal-panel modal-xl">
          <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Add New Property
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
          <form className="space-y-6 pt-4" action="properties.html">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                  placeholder="Cozy studio near Pyynikki"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]">
                  <option value="1">Entire place</option>
                  <option value="2">Private room</option>
                  <option value="3">Shared room</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="3"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                placeholder="Describe your property…"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                >
                  <option value="">Select country</option>
                  <option value="1" selected>
                    Finland
                  </option>
                  <option value="2">Sweden</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                >
                  <option value="">Select city</option>
                  <option value="1" selected>
                    Tampere
                  </option>
                  <option value="2">Helsinki</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Latitude
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="61.498"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Longitude
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="23.761"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max guests
                </label>
                <input
                  type="number"
                  min="1"
                  value="2"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <input
                  type="number"
                  min="0"
                  value="1"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Beds
                </label>
                <input
                  type="number"
                  min="0"
                  value="1"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms
                </label>
                <input
                  type="number"
                  min="0"
                  value="1"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price per night (€)
                </label>
                <input
                  type="number"
                  min="0"
                  value="89"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cleaning fee (€)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="Optional"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service fee (€)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="Optional"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amenities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    className="w-4 h-4 text-[#FF385C] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">wifi</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    className="w-4 h-4 text-[#FF385C] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">kitchen</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#FF385C] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">parking</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    className="w-4 h-4 text-[#FF385C] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">tv</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    className="w-4 h-4 text-[#FF385C] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">heating</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#FF385C] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">washer</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Images
              </label>
              <p className="text-sm text-gray-600 mb-2">
                Add image URLs for your listing.
              </p>
              <div className="flex flex-wrap gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C]"
                />
                <label className="flex items-center gap-2 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#FF385C] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Primary image</span>
                </label>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800"
                >
                  Add image
                </button>
              </div>
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
                Add Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default HostProperties;
