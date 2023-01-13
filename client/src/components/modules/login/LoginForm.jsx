import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  /**
   * @method handleFormSubmit()
   * @arg e
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    // await useLogin(username, email, password);
  };

  return (
    <>
      <div className="bg-white rounded shadow-lg py-8 px-8">
        <form onSubmit={handleFormSubmit}>
          {/* form header */}
          <h2 className="text-3xl text-center">Login</h2>
          {/* form header */}
          <hr className="my-3" />
          {/* error message */}
          {error && (
            <p className="text-red-600 text-sm bg-red-100 p-3 rounded my-2">
              {error}
            </p>
          )}
          {/* error message */}
          {/* single row */}
          <div className="single_row mb-3">
            <label htmlFor="email" className="">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="mail@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block border border-gray-300 w-full p-2 rounded"
            />
          </div>
          {/* single row */}
          {/* single row */}
          <div className="single_row">
            <label htmlFor="email" className="">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="block border border-gray-300 w-full p-2 rounded"
            />
          </div>
          <p className="text-sm text-gray-500 mb-3 mt-1">
            Don't have any account then{" "}
            <Link to="/register" className="text-blue-500">
              register
            </Link>{" "}
            here.
          </p>
          {/* single row */}
          <button
            disabled={isLoading}
            className="bg-blue-500 disabled:bg-blue-400 px-10 py-2 rounded text-white hover:bg-blue-700 transition-all duration-300 ease-linear"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
