// src/pages/NotFound.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ErrorCode>404</ErrorCode>
      <Message>Oops! Page Not Found</Message>
      <Description>
        The page you're looking for doesn't exist or has been moved.
      </Description>
      <HomeButton onClick={() => navigate("/")}>Go to Homepage</HomeButton>
    </Wrapper>
  );
};

export default NotFoundPage;

// Styled Components
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f6f8;
  text-align: center;
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  color: #3f51b5;
  margin: 0;
`;

const Message = styled.h2`
  font-size: 32px;
  margin: 10px 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 500px;
  color: #666;
  margin-bottom: 30px;
`;

const HomeButton = styled.button`
  background: #3f51b5;
  color: #fff;
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #303f9f;
    transform: scale(1.05);
  }
`;
