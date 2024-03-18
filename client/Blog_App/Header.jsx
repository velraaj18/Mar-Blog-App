import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" px-20 my-6">
      <header className="flex justify-between mb-16">
        <div>
          <Link to={"/"} className=" text-xl font-bold text-gray-900">
            My Blog
          </Link>
        </div>
        <div className=" flex gap-5">
          <Link to={"/login"} className=" text-xl font-semibold text-gray-600">
            Login
          </Link>
          <Link
            to={"/register"}
            className=" text-xl font-semibold text-gray-600"
          >
            Register
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
