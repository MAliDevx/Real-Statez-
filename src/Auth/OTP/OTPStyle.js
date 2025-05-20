import styled from "styled-components";

export const AuthPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f5f5f5;
`;

export const FormCard = styled.div`
  padding: 2em;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);

  .form-title {
    text-align: center;
    margin-bottom: 1.5em;

    h3 {
      font-weight: 600;
      color: var(--large-text, #333);
      margin: 0;
      font-size: 1.5rem;
    }
  }

  .btn-primary-full {
    width: 100%;
    padding: 0.75em;
    background-color: var(--primary-button, #0077b6);
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 12px;
    border-radius: 6px;
  }

  .btn-primary-full:hover {
    background-color: #1c55c3;
  }

  .sign-up {
    margin-top: 1em;
    text-align: center;
    font-size: 0.95rem;
    color: #555;
  }

  a {
    color: var(--primary-button, #0077b6);
    cursor: pointer;
    margin-left: 8px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5em;
  }

  @media (max-width: 480px) {
    padding: 1em;

    .form-title h3 {
      font-size: 1.2rem;
    }

    .btn-primary-full {
      font-size: 0.95rem;
    }
  }
`;

export const OtpInputStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  input {
    width: 2.5em !important;
    height: 2.5em;
    font-size: 1.2rem;
    margin: 0 0.4em;
    text-align: center;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 6px;


    &:focus {
      border-color: #0077b6;
    }

    @media (max-width: 480px) {
      width: 1.8em !important;
      height: 1.8em;
      font-size: 1rem;
      margin: 0 0.25em;
    }
  }
`;
