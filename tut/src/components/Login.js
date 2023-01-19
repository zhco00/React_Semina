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
  
  // const [user, setUser] = useState({email : "", password : ""});
  /*
    const onChange = (evnet) => {
      const {name, value} = event.target;
      setUser({
        ...user,
        [name] : value
      });
    }
  */
  /*
    const onClick = async () => {
      if(!user.email) return alert("이메일을 입력하세요.");
      if(!user.password) return alert("비밀번호를 입력하세요.");
      try{
        const {data} = await axios.post("http://210.223.18.224:8003/auth/local", user)
        if(!data) return alert("로그인 실패")
        alert("로그인 성공")
        movePage("/");
      } catch(e){
        console.log(e)
        alert("Error 발생")
      }
    }
  */
  
  /*
    <input onChange={onChange} name="email"/>
    <input onChange={onChange} name="password"/>
  */

  const handleInputId = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    // 여기 부분 빈값이 있어도 axios 실행됨.. return이 없음
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
