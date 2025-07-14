import styled from "styled-components";
import backgroundImg from "../../assets/Images/Contactbg.jpg";

export const StyledContactPage = styled.div`
  width: 100%;
  background-color: var(--white-color);
  color: var(--large-text);

  .mainheading-div {
    text-align: center;
    padding: 10px 0;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imageContainer {
    width: 100%;
    height: 300px;
    background: url(${backgroundImg}) center/cover no-repeat;
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 32px;
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 26px;
        text-align: center;
      }

      @media (max-width: 480px) {
        font-size: 22px;
      }
    }
  }

  .contact-form-container {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 55px;
    padding: 28px 0px;

    @media (max-width: 1024px) {
      width: 90%;
      gap: 35px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      .input-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 25px;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
      }

      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 36px;

        @media (max-width: 768px) {
          margin-bottom: 10px;
        }

        label {
          font-size: 16px;
          margin-bottom: 15px;
          font-weight: 600;
          text-transform: capitalize;

          @media (max-width: 480px) {
            font-size: 14px;
          }
        }

        input,
        textarea {
          padding: 17px 14px;
          font-size: 15px;
          border: 1px solid var(--border-color);
          outline: none;
          font-weight: 400;
          transition: outline 0.3s ease;

          &:focus {
            outline: 1px solid var(--primary-button);
          }

          @media (max-width: 480px) {
            font-size: 14px;
            padding: 14px 12px;
          }
        }

        textarea {
          resize: vertical;
          height: 120px;
        }

        .error-text {
          color: red;
          font-size: 0.85rem;
          margin-top: 5px;
        }
      }

      .buttonDiv {
        display: flex;
        justify-content: flex-end;

        button {
          padding: 10px 18px;
          background-color: var(--primary-button);
          color: white;
          border: none;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          width: fit-content;
          margin-top: 15px;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #1f3bb3;
          }

          @media (max-width: 480px) {
            width: 100%;
            justify-content: center;
          }
        }
      }
    }

    .image-container {
    width: 90%;
    height: 90%;
    border-radius: 11px;
    overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info-section {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .info-box {
        span {
          font-size: 14px;
          font-weight: 500;
          display: flex;
        }
      }

      .info-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid var(--border-color);
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 480px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }
      }

      .location-item {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 15px;

        .IconsBox {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          padding: 12px;
          font-size: 18px;
        }

        .Icons {
          font-size: 20px;
        }

        @media (max-width: 480px) {
          gap: 10px;
        }
      }

      .social-icon-div {
        h3 {
          margin-bottom: 10px;

          @media (max-width: 480px) {
            font-size: 18px;
          }
        }
      }
    }
  }
  .image-container{
    width: 100%;
    height: 100%;
    
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    .whatsapp-btn{
    border: 0;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: var(--white-color);
    text-decoration: none;
  }
`;


export const StyledSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 20px;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .social-icon-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .SocialIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 17px;
    color: white;
    border-radius: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &.facebook {
      background-color: #3b5998;
    }

    &.twitter {
      background-color: #1da1f2;
    }

    &.whatsapp {
      background-color: #25d366;
    }

    &.telegram {
      background-color: #0088cc;
    }

    &.linkedin {
      background-color: #0077b5;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      background-color: var(--white-color);
      color: black;
      outline: 1px solid var(--border-color);
    }
  }

`;

