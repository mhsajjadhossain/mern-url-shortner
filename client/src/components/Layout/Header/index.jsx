import React from "react";
import useAuthContext from "../../../hooks/useAuthContext";
import useLogout from "../../../hooks/useLogout";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <>
      <header className="absolute w-full left-0 top-0 z-[999]">
        <div className="container">
          <div className="row items-center py-3">
            <div className="col-3">
              <h1 className="text-3xl font-bold">Short.ly</h1>
            </div>
            {user && (
              <div className="col-9 text-right">
                <button
                  className="bg-blue-500 text-white px-7 inline-block py-2 rounded"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <hr className="bg-gray-300" />
      </header>
    </>
  );
};

export default Header;
