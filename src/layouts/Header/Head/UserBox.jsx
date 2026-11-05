//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { useAuth } from "@/hooks";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//! ---------------------------------------- Component (userBox)
function userBox() {
  //! ---------------------------------------- Hooks
  const [menu, setMenu] = useState(false);
  const [logOutError, setLogOutError] = useState(null);
  //! --------------------
  const menuRef = useRef(null);
  //! --------------------
  const { pathname } = useLocation();
  //! --------------------
  const navigate = useNavigate();
  //! --------------------
  const { user, logOutFn } = useAuth();
  //! ---------------------------------------- Functions
  //! --------------------
  function handleMenu(event) {
    setMenu((pre) => !pre);
  }
  //! --------------------
  async function logOutHandler() {
    const { success, message } = await logOutFn();
    if (success) {
      navigate("/");
      setMenu(false);
    } else {
      setLogOutError({
        error: true,
        message: message,
      });
    }
  }
  //! ---------------------------------------- Hooks
  useEffect(() => {
    setMenu(false);
  }, [pathname]);
  //! --------------------
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex justify-center items-center gap-5">
        {logOutError?.error && (
          <div className="fixed right-10 top-10 p-5 bg-red-500 text-white rounded-xl text-center z-51">
            {logOutError?.message ?? "Registeration Failed"}
          </div>
        )}
        {user?.userInfo ? (
          <Link
            to={user?.userInfo?.role === "guest" ? "/profile" : "/host"}
            className="flex gap-1"
          >
            <strong>
              {String(user?.userInfo?.role).slice(0, 1).toUpperCase() +
                String(user?.userInfo?.role).slice(1)}
              :
            </strong>
            <h2>{user?.userInfo?.name}</h2>
          </Link>
        ) : (
          <Link
            to={`/register`}
            className="hidden md:block rounded-full hover:bg-gray-100 transition-colors font-semibold text-gray-900"
          >
            Become a host
          </Link>
        )}

        <button
          type="button"
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
          aria-label="Language"
        >
          <ProjectIcons type={"globe"} />
        </button>
        <div ref={menuRef} className="relative" data-header-menu>
          <button
            onClick={handleMenu}
            type="button"
            data-header-menu-toggle
            className={`p-2 rounded-full ${menu ? "bg-gray-300" : "bg-gray-200"}  cursor-pointer hover:bg-gray-300 transition-colors text-xl`}
            aria-label="Menu"
            aria-expanded={menu}
          >
            <ProjectIcons type={"menu"} />
          </button>
          {/* Menu */}
          {menu && (
            <div
              data-header-menu-panel
              className={`absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50`}
            >
              {user?.userInfo && (
                <>
                  <div className="px-4 py-3">
                    <h3 className="font-semibold text-gray-900">
                      {`Welcome ${user?.userInfo?.name}`}
                    </h3>
                  </div>
                  <hr className="border-gray-300" />
                </>
              )}
              <div className="px-4 py-3">
                <h3 className="font-semibold text-gray-900">Help Center</h3>
              </div>
              <hr className="border-gray-300" />
              <div className="py-2">
                <Link
                  to={`/host`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <ProjectIcons type={"user-2"} className={"w-8/12 h-8/12"} />
                  </div>
                  <span className="text-sm text-gray-900">Become a host</span>
                </Link>
                <Link
                  to={`/host`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <ProjectIcons
                      type={"increase-2"}
                      className={"w-8/12 h-8/12"}
                    />
                  </div>
                  <span className="text-sm text-gray-900">Refer a Host</span>
                </Link>
                <Link
                  to={`/host`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <ProjectIcons
                      type={"users-2"}
                      className={"w-8/12 h-8/12"}
                    />
                  </div>
                  <span className="text-sm text-gray-900">Find a co-host</span>
                </Link>
                <Link
                  to={`/host`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <ProjectIcons type={"gift"} className={"w-8/12 h-8/12"} />
                  </div>
                  <span className="text-sm text-gray-900">Gift cards</span>
                </Link>
                <hr className="border-gray-300" />

                {user?.userInfo && (
                  <Link
                    to={`/profile`}
                    onClick={() => {
                      setMenu(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors "
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <ProjectIcons
                        type={"user-1"}
                        className={"w-7/12 h-7/12"}
                      />
                    </div>
                    <span className="text-sm text-gray-900">Profile</span>
                  </Link>
                )}

                {user?.userInfo ? (
                  <div
                    onClick={logOutHandler}
                    className="group/logout flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="group-hover/logout:bg-red-300 w-10 h-10 rounded-full  flex items-center justify-center flex-shrink-0">
                      <ProjectIcons
                        type={"logout"}
                        className={"w-8/12 h-8/12"}
                      />
                    </div>
                    <span className="group-hover/logout:font-semibold text-sm text-gray-900">
                      Log out
                    </span>
                  </div>
                ) : (
                  <Link
                    to={`/login`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <ProjectIcons
                        type={"login"}
                        className={"w-8/12 h-8/12"}
                      />
                    </div>
                    <span className="text-sm text-gray-900">
                      Log in or sign up
                    </span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default userBox;
