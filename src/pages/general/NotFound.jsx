//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (NotFound)
function NotFound() {
  return (
    <>
      {/* 403 */}
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-red-50 text-red-500">
            <svg
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div className="text-center mt-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">
              403
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-800">
              Erişim Reddedildi
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Bu sayfaya erişim için gerekli yetkiye sahip değilsiniz.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={``}
              href="javascript:history.back()"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              Geri Dön
            </Link>
            <Link
              to={``}
              href="index.html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Ana Sayfa
            </Link>
          </div>
        </div>
        <p className="text-center mt-4 text-xs sm:text-sm text-gray-500">
          Kod: 403 • Access Forbidden
        </p>
      </div>
      {/* 404 */}
      <div className="max-w-xl w-full text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          to={``}
          href="index.html"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF385C] text-white hover:bg-[#E61E4D] transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default NotFound;
