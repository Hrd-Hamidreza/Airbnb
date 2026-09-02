//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Error500)
function Error500() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center p-5 w-fit mx-auto rounded-2xl text-5xl bg-purple-100 text-purple-700">
          <ProjectIcons type={`server`} />
        </div>
        <div className="text-center mt-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">
            500
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-gray-800">
            Internal Server Error
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            The server is Being updated.
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
            to={`/`}
            href="index.html"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-600 text-white hover:bg-purple-700 transition-colors"
          >
            Home
          </Link>
        </div>
        <p className="text-center mt-4 text-xs sm:text-sm text-gray-500">
          500 • Internal Server Error
        </p>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Error500;
