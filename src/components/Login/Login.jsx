import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Login = () => {
  return (
    <div className="login">
      <form className="login-form">
        <Input name="Логин" placeholder="Login" type="text" />
        <Input name="Пароль" placeholder="Password" type="password" />

        <Button text={"Sign In"} />
      </form>
    </div>
  );
};

export default Login;
