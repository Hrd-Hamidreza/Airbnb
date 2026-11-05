//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { useAuth } from "@/hooks";
import { loginValidation } from "@/validations/auth.validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
//! ---------------------------------------- Component (Login)
function Login() {
  //! ---------------------------------------- Hooks
  //! -------------------- customHook
  const { loginFn } = useAuth();
  //! -------------------- navigate
  const navigate = useNavigate();
  //! --------------------
  const [loginError, setLoginError] = useState(null);
  //! --------------------
  useEffect(() => {
    if (!loginError) return;
    const timer = setTimeout(() => {
      setLoginError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [loginError]);
  //! ---------------------------------------- Variables
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginValidation),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //! ---------------------------------------- Functions
  //! --------------------- onSubmit
  async function onSubmit(form) {
    setLoginError(null);
    const { success, message, role } = await loginFn(form);
    if (success) {
      if (role === "guest") {
        navigate("/profile", { replace: true });
      } else {
        navigate("/host", { replace: true });
      }
    } else {
      setLoginError({ error: true, message });
    }
  }
  //! ---------------------
  function handleErrors(message) {
    return <p className="text-sm text-red-500">{message}</p>;
  }
  //! ---------------------------------------- Return
  return (
    <>
      <div className="max-w-md w-full m-auto space-y-8">
        {loginError?.error && (
          <div className="fixed right-10 top-10 p-5 bg-red-500 text-white rounded-xl text-center z-51">
            {loginError?.message ?? "Login failed"}
          </div>
        )}
        <div className="flex justify-center">
          <Link to={`/`} className="flex-center gap-2">
            <ProjectIcons type={"logo"} className={"w-10 h-10 text-rose-500"} />
            <span className="text-2xl font-bold text-rose-500">Airbnb</span>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">Log in to your account</p>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            action="index.html"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Email"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              {errors?.email && handleErrors(errors?.email?.message)}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                placeholder="Password"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              {errors?.password && handleErrors(errors?.password?.message)}
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-sm font-medium rounded-lg text-white bg-rose-500 hover:bg-rose-700 transition-colors cursor-pointer"
            >
              {isSubmitting ? "Please Wait..." : "Login"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link
              to={`/register`}
              className="text-sm text-rose-500 hover:text-rose-700 font-medium"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>
            By continuing, you agree to Airbnb's
            <Link to={``} className="text-rose-500 hover:underline">
              {" "}
              Terms of Service
            </Link>
            and
            <Link to={``} className="text-rose-500 hover:underline">
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
