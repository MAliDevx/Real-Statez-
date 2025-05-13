import styled from "styled-components";

export const AuthPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const FormCard = styled.div`
  padding: 2em;
  border-radius: 12px;
  width: min(95%, 400px);
  background-color: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);

  .form-title {
    text-align: center;
    margin-bottom: 1.5em;

    h2 {
      /* font-size: 1.25rem; */
      font-weight: 600;
      color: var(--large-text);
      margin: 0;
    }
  }
  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 1.2em;
  }
  .btn-primary-full {
      width: 100%;
      padding: 0.75em;
      background-color: var(--primary-button);
      color: #fff;
      border: none;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 12px;
    }

    .btn-primary-full:hover {
      background-color: #1c55c3;
    }

  .input-field {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.4em;
      font-weight: 500;
      color: #333;
    }

    .field-wrap {
      position: relative;

      input {
        width: 85%;
        padding: 1em;
        padding-right: 3em;
        border: 1px solid #ccc;
        font-size: 0.95rem;
        outline: none;
        transition: 0.3s ease;
      }

      input:focus {
        border-color: #0077b6;
      }
    }


  }
`;
