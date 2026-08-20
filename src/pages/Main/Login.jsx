//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Login)
function Login() {
  return (
    <>
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center">
          <Link
            to={``}
            href="index.html"
            className="flex items-center space-x-2"
          >
            <svg
              className="w-8 h-8 text-[#FF385C]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-bold text-[#FF385C]">airbnb</span>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">Log in to your account</p>
          </div>
          <form className="space-y-6" action="index.html">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Email"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Password"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-sm font-medium rounded-lg text-white bg-[#FF385C] hover:bg-[#E61E4D] transition-colors"
            >
              Log in
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link
              to={``}
              className="text-sm text-[#FF385C] hover:text-[#E61E4D] font-medium"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>
            By continuing, you agree to Airbnb's{" "}
            <Link to={``} className="text-[#FF385C] hover:underline">
              Terms of Service
            </Link>
            and{" "}
            <Link to={``} className="text-[#FF385C] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Login;
