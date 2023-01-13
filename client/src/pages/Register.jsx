import React from "react";
import RegisterForm from "../components/modules/register/RegisterForm";

const Register = () => {
  return (
    <>
      <section className="login_section bg-blue-100 min-h-screen flex items-center">
        <div className="container">
          <div className="row justify-center">
            <div className="col-5">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
