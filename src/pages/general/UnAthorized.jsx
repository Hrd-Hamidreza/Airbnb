//! ---------------------------------------- Import

import { Link } from "react-router-dom";

//! ---------------------------------------- Component (UnAthorized)
function UnAthorized() {
  return (
    <>
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-amber-50 text-amber-600">
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div className="text-center mt-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">
              401
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-800">
              Unauthorized
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              You do not have permission to access this page.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={``}
              href="javascript:history.back()"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              Go back
            </Link>
            <Link
              to={`/unAthorized`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF385C] text-white hover:bg-[#E61E4D] transition-colors"
            >
              Home
            </Link>
          </div>
          <p className="text-center mt-4 text-xs sm:text-sm text-gray-500">
            401 • Unauthorized
          </p>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default UnAthorized;
