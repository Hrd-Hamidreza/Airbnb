//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Error401)
function Error401() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center p-5 w-fit mx-auto rounded-2xl text-5xl bg-amber-100 text-amber-600">
          <ProjectIcons type={`lock`} />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF385C] text-white hover:bg-amber-600 transition-colors"
          >
            Home
          </Link>
        </div>
        <p className="text-center mt-4 text-xs sm:text-sm text-gray-500">
          401 • Unauthorized
        </p>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Error401;
