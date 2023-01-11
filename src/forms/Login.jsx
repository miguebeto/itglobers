import React, { useState } from "react";
import "./Login.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="login --100vh --center-all rounded-3">
      <div className="--card --bg-light">
        <h2 className="--color-danger">Login</h2>
        <div className="--form-control">
          <input className="input" type="text" placeholder="Username" />
          <div className="password">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div className="icon" onClick={togglePassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <button className="--btn --btn-danger --btn-block">Login</button>
        </div>
      </div>
    </section>
  );
};
