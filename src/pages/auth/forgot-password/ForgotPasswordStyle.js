import styled from "styled-components";

export const AuthPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
`;

export const FormCard = styled.div`
  padding: 2rem;
  width: 70%;
  background-color: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.2rem;
  }

  .form-title {
    text-align: center;
    margin-bottom: 1.5rem;

    h2 {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--large-text);
      margin: 0;

      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }
  }

  #rememberMe {
    accent-color: var(--primary-button);
  }

  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
  }

  .input-field {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.4rem;
      font-weight: 500;
      color: #333;
      font-size: 0.95rem;
    }

    .field-wrap {
      position: relative;

      input {
        width: 100%;
        padding: 1rem;
        padding-right: 3rem;
        border: 1px solid var(--border-color);
        font-size: 0.95rem;
        outline: none;
        transition: border-color 0.3s ease;
        box-sizing: border-box;
      }

      input:focus {
        border-color: #0077b6;
      }

      input:hover {
        border-color: #999;
      }

      .icon {
        position: absolute;
        top: 50%;
        right: 0.75rem;
        transform: translateY(-50%);
        cursor: pointer;
        color: #666;
        font-size: 1rem;
      }
    }
  }

  .forget-password {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 1rem;
    font-size: 0.9rem;
    flex-wrap: wrap;

    .left {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      label {
        cursor: pointer;
        color: #444;
      }
    }

    .right {
      cursor: pointer;
      color: #0077b6;
      font-weight: 500;
      transition: color 0.3s;
    }

    .right:hover {
      color: #005f8a;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  .btn-primary-full {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--primary-button);
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 1rem;
  }

  .btn-primary-full:hover {
    background-color: #1c55c3;
  }

  .sign-up {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    margin-top: 1rem;
    text-align: center;
    flex-wrap: wrap;

    a {
      color: var(--primary-button);
      cursor: pointer;
      margin-left: 0.5rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .error-input {
    border: 1px solid red !important;
  }
`;
