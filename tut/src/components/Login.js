import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 5px;
  display: block;
  padding: 6px 10px;
  color: #fff;
  font-size: 18px;
  border-radius: 3px;
  background-color: black;
  border: 0;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputId = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    if (!email || !password) {
      alert("빈값이 있습니다.");
    }
    axios
      .post("http://210.223.18.224:8003/auth/local", {
        email: email,
        password: password,
      })
      .then(() => {
        alert("로그인 되었습니다.");
        Main();
      })
      .catch(() => {
        console.log("ERROR");
      });
  };

  const movePage = useNavigate();
  function Main() {
    movePage("/");
  }
  return (
    <div>
      <h2>Login</h2>
      ID :
      <Input type="text" name="email" value={email} onChange={handleInputId} />
      <br />
      PW :
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handleInputPw}
      />
      <br />
      <Button onClick={onClickLogin}>로그인</Button>
    </div>
  );
}

export default Login;
