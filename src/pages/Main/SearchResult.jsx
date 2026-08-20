//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (SearchResult)
function SearchResult() {
  return (
    <>
      <div className="flex h-[calc(100vh-80px)]">
        <div className="w-1/2 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">24 homes</h1>
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-900">
                Show list
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <Link to={`/listDetails`} className="group cursor-pointer">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
                    alt="Cozy studio near Pyynikki"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md text-xs font-semibold">
                    Guest favorite
                  </div>
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline truncate">
                      Cozy studio near Pyynikki
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      <span className="text-[15px] font-semibold">★ 4.85</span>
                      <span className="text-[15px] text-gray-600">(475)</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 line-clamp-1">
                    Entire rental unit in Tampere
                  </p>
                  <p className="text-[15px] text-gray-600">1 bedroom · 1 bed</p>
                  <p className="text-[15px] text-gray-600">Individual host</p>
                  <p className="text-[15px] font-semibold text-gray-900 mt-1">
                    € 118
                    <span className="font-normal text-gray-600">
                      for 1 night
                    </span>
                  </p>
                </div>
              </Link>
              <Link
                to={`/listDetails`}
                href="listing-detail.html"
                className="group cursor-pointer"
              >
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                    alt="Modern apartment downtown"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md text-xs font-semibold">
                    Guest favorite
                  </div>
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline truncate">
                      Modern apartment downtown
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      <span className="text-[15px] font-semibold">★ 4.92</span>
                      <span className="text-[15px] text-gray-600">(128)</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 line-clamp-1">
                    Entire rental unit in Helsinki
                  </p>
                  <p className="text-[15px] text-gray-600">
                    2 bedrooms · 2 beds
                  </p>
                  <p className="text-[15px] text-gray-600">Business host</p>
                  <p className="text-[15px] font-semibold text-gray-900 mt-1">
                    € 145{" "}
                    <span className="font-normal text-gray-600">
                      for 1 night
                    </span>
                  </p>
                </div>
              </Link>
              <Link to={`/listDetails`} className="group cursor-pointer">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop"
                    alt="Lake view cottage"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline truncate">
                      Lake view cottage
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      <span className="text-[15px] font-semibold">★ 4.98</span>
                      <span className="text-[15px] text-gray-600">(89)</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 line-clamp-1">
                    Entire home in Espoo
                  </p>
                  <p className="text-[15px] text-gray-600">
                    3 bedrooms · 4 beds
                  </p>
                  <p className="text-[15px] text-gray-600">Individual host</p>
                  <p className="text-[15px] font-semibold text-gray-900 mt-1">
                    € 210{" "}
                    <span className="font-normal text-gray-600">
                      for 1 night
                    </span>
                  </p>
                </div>
              </Link>
              <Link to={`/listDetails`} className="group cursor-pointer">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop"
                    alt="Stylish loft in Turku"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md text-xs font-semibold">
                    Guest favorite
                  </div>
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline truncate">
                      Stylish loft in Turku
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      <span className="text-[15px] font-semibold">★ 4.76</span>
                      <span className="text-[15px] text-gray-600">(203)</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 line-clamp-1">
                    Entire rental unit in Turku
                  </p>
                  <p className="text-[15px] text-gray-600">1 bedroom · 1 bed</p>
                  <p className="text-[15px] text-gray-600">Individual host</p>
                  <p className="text-[15px] font-semibold text-gray-900 mt-1">
                    € 95{" "}
                    <span className="font-normal text-gray-600">
                      for 1 night
                    </span>
                  </p>
                </div>
              </Link>
              <Link to={`/listDetails`} className="group cursor-pointer">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
                    alt="Family home with garden"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline truncate">
                      Family home with garden
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      <span className="text-[15px] font-semibold">★ 4.88</span>
                      <span className="text-[15px] text-gray-600">(56)</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 line-clamp-1">
                    Entire home in Oulu
                  </p>
                  <p className="text-[15px] text-gray-600">
                    4 bedrooms · 5 beds
                  </p>
                  <p className="text-[15px] text-gray-600">Business host</p>
                  <p className="text-[15px] font-semibold text-gray-900 mt-1">
                    € 175{" "}
                    <span className="font-normal text-gray-600">
                      for 1 night
                    </span>
                  </p>
                </div>
              </Link>
              <Link to={`/listDetails`} className="group cursor-pointer">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                    alt="Riverside apartment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md text-xs font-semibold">
                    Guest favorite
                  </div>
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white hover:bg-gray-100">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline truncate">
                      Riverside apartment
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      <span className="text-[15px] font-semibold">★ 4.91</span>
                      <span className="text-[15px] text-gray-600">(167)</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 line-clamp-1">
                    Entire rental unit in Tampere
                  </p>
                  <p className="text-[15px] text-gray-600">
                    2 bedrooms · 2 beds
                  </p>
                  <p className="text-[15px] text-gray-600">Individual host</p>
                  <p className="text-[15px] font-semibold text-gray-900 mt-1">
                    € 132{" "}
                    <span className="font-normal text-gray-600">
                      for 1 night
                    </span>
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-900 text-white font-semibold">
                1
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 font-semibold">
                2
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 font-semibold">
                3
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative border-l border-gray-200">
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.6%2C61.4%2C24.0%2C61.6&amp;layer=mapnik&amp;marker=61.4978%2C23.7610"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default SearchResult;
