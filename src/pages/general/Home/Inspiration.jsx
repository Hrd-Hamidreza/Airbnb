//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Inspiration)
function Inspiration() {
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-5 p-10">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Inspiration for future getaways
          </h2>
          <div className="flex items-center gap-8 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-900 border-gray-900">
              Popular
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Arts &amp; culture
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Beach
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Mountains
            </button>
            <button className="text-sm font-semibold whitespace-nowrap pb-2 border-b-2 text-gray-500 border-transparent">
              Outdoors
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-4">
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Athens</div>
                <div className="text-sm text-gray-600">House rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">
                  Pocono Mountains
                </div>
                <div className="text-sm text-gray-600">Cabin rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Daytona Beach</div>
                <div className="text-sm text-gray-600">Villa rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Gulf Shores</div>
                <div className="text-sm text-gray-600">Condo rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Oahu</div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Barcelona</div>
                <div className="text-sm text-gray-600">Apartment rentals</div>
              </Link>
            </div>
            <div className="space-y-4">
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">
                  West Palm Beach
                </div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Madrid</div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Raleigh</div>
                <div className="text-sm text-gray-600">Condo rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Dallas</div>
                <div className="text-sm text-gray-600">Monthly Rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Amsterdam</div>
                <div className="text-sm text-gray-600">Vacation rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Kauai</div>
                <div className="text-sm text-gray-600">Monthly Rentals</div>
              </Link>
            </div>
            <div className="space-y-4">
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Whistler</div>
                <div className="text-sm text-gray-600">Condo rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Detroit</div>
                <div className="text-sm text-gray-600">Monthly Rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Albuquerque</div>
                <div className="text-sm text-gray-600">Apartment rentals</div>
              </Link>
              <Link to={`/`} className="block hover:underline">
                <div className="font-semibold text-gray-900">Charlotte</div>
                <div className="text-sm text-gray-600">House rentals</div>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              to={`/`}
              className="text-sm font-semibold text-gray-900 hover:underline flex items-center gap-1"
            >
              Show more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Inspiration;
