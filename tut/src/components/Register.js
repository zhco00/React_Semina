import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const InputEmail = (e) => {
    setEmail(e.target.value);
  };

  const InputPw = (e) => {
    setPassword(e.target.value);
  };

  const onClickRegister = () => {
    axios
      .post("http://210.223.18.224:8003/auth/local", {
        email: email,
        password: password,
      })
      .then(() => {
        alert("회원가입 완료");
        Main();
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  const movePage = useNavigate();
  function Main() {
    movePage("/");
  }
  return (
    <div>
      <h2>Register</h2>
      Email :
      <input type="text" value={email} onChange={InputEmail} />
      <br />
      PW :
      <input type="password" value={password} onChange={InputPw} />
      <br />
      <button type="button" onClick={onClickRegister}>
        회원가입
      </button>
    </div>
  );
}

export default Register;
