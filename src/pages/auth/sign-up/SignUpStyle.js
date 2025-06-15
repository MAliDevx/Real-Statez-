import styled from "styled-components";

export const AuthPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
`;

export const FormCard = styled.div`
  padding: 2em;
  width: 40%;
  background-color: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.5em;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1em;
  }

  .error-border {
    border: 1px solid red !important;
  }

  .input-field {
    width: 50%;
    padding: 10px 0px;

    input,
    select {
      width: 100%;
      padding: 10px 4px;
      outline: none;
      border: 1px solid var(--input-border);

      &:focus {
        outline: 1px solid #9cace9;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .form-row {
    display: flex;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  #email-field {
    width: 100%;

    input {
      width: 100%;
    }

    label {
      display: block;
    }
  }

  #location {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
    }

    select {
      width: 106%;
    }

    label {
      display: block;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      select {
        width: 100%;
      }
    }
  }

  .select-gender {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }

  .password-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--input-border);
    width: 104%;

    input {
      border: 0;
      outline: none !important;
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .icon {
    margin-right: 10px;
  }

  .btn-primary-full {
    width: 102.4%;
    padding: 0.75em;
    background-color: var(--primary-button);
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .btn-primary-full:hover {
    background-color: #1C55C3;
  }

  .sign-up {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14.5px;
    margin-top: 15px;
    flex-wrap: wrap;
    text-align: center;

    a {
      color: var(--primary-button);
      cursor: pointer;
      margin-left: 8px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
