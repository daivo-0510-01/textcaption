import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localUserServ } from "../../service/localUserService";
import { AiOutlineBars } from "react-icons/ai";

export default function Header() {
  let userInfoNav = useSelector((state) => {
    return state.UserReducer.userInfo;
  });
  let renderUserInfo = () => {
    if (userInfoNav) {
      return (
        <header className="p-4 dark:bg-gray-800 text-white">
          <div className=" flex items-center justify-between h-14 mx-auto">
            <NavLink to={"/"}>
              <img
                className="xs:w-20"
                src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              />
            </NavLink>

            <div className="sm:hidden">
              <p>{userInfoNav.hoTen}</p>
              <div className=" flex items-center justify-center mx-auto">
                <p
                  onClick={localUserServ.remove}
                  className="bg-white rounded text-black px-1 cursor-pointer"
                >
                  Sign out
                </p>

                <NavLink to={"/signup"}>
                  <p className="bg-white rounded text-black px-1 ml-3">
                    Sign up
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header className="p-4 dark:bg-gray-800 text-white">
          <div className=" flex justify-between h-14 mx-auto">
            <NavLink to={"/"}>
              <img
                className="xs:w-20"
                src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              />
            </NavLink>

            <div className="items-center flex-shrink-0 hidden sm:flex lg:flex">
              <button className="self-center px-3 py-1 rounded font-semibold text-lg text-white border-white border-2">
                <NavLink to={"/login"}>Sign in</NavLink>
              </button>
              <button className="self-center ml-3 px-3 py-1 font-semibold rounded text-lg text-white border-white border-2 ">
                <NavLink to={"/signup"}>Sign up</NavLink>
              </button>
            </div>

            <div className="sm:hidden">
              <div className=" flex items-center justify-center mx-auto">
                <NavLink to={"/login"}>
                  <p className="bg-white rounded text-black px-1 cursor-pointer">
                    Sign in
                  </p>
                </NavLink>

                <NavLink to={"/signup"}>
                  <p className="bg-white rounded text-black px-1 ml-3">
                    Sign up
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
      );
    }
  };
  return (
    <div className="container   " style={{ backgroundImage: "url()" }}>
      <div
        className="fixed bg-opacity-50 rounded bg-sky-950 z-10 "
        style={{ top: "0", left: "5%", right: "5%" }}
      >
        {renderUserInfo()}
      </div>
    </div>
  );
}
