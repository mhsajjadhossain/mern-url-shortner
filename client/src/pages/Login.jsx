import React from "react";
import LoginForm from "../components/modules/login/LoginForm";

const Login = () => {
  return (
    <>
      <section className="login_section bg-blue-100 min-h-screen flex items-center">
        <div className="container">
          <div className="row justify-center">
            <div className="col-5">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
