import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRegisterUser from "../../../hooks/useRegisterUser";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading, error } = useRegisterUser();

  /**
   * @method handleFormSubmit()
   * @arg e
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await register(username, email, password);
  };

  return (
    <>
      <div className="bg-white rounded shadow-lg py-8 px-8">
        <form onSubmit={handleFormSubmit}>
          {/* form header */}
          <h2 className="text-3xl text-center">Register</h2>
          <hr className="my-3" />
          {/* form header */}

          {/* error message */}
          {error && (
            <p className="text-red-600 text-sm bg-red-100 p-3 rounded my-2">
              {error}
            </p>
          )}
          {/* error message */}
          {/* single row */}
          <div className="single_row mb-3">
            <label htmlFor="username" className="">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your Username"
              className="block border border-gray-300 w-full p-2 rounded"
            />
          </div>
          {/* single row */}
          {/* single row */}
          <div className="single_row mb-3">
            <label htmlFor="email" className="">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@example.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="block border border-gray-300 w-full p-2 rounded"
            />
          </div>
          <p className="text-sm text-gray-500 mb-3 mt-1">
            Already have an account? Then{" "}
            <Link to="/login" className="text-blue-500">
              login
            </Link>{" "}
            here.
          </p>
          {/* single row */}
          <button
            disabled={isLoading}
            className="bg-blue-500 disabled:bg-blue-400 px-10 py-2 rounded text-white hover:bg-blue-700 transition-all duration-300 ease-linear"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
