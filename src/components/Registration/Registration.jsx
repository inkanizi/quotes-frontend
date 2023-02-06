import React from "react";
import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input";

const Registration = () => {
  return (
    <div className="registration">
      <form className="registration-form">
        <Input name="Login" id="login"/>
        <Input name="Password" id="pass"/>
        <Button text={"Sign In"} />
      </form>
    </div>
  );
};

export default Registration;
