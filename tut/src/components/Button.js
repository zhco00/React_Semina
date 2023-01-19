import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-weight: 600;
  color: #fff;
`;

const Button = (props) => {
  return <Title>{props.title}</Title>;
};

export default Button;
