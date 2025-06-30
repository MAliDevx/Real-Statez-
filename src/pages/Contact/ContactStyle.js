import styled from "styled-components";
import backgroundImg from "../../assets/Images/Contactbg.jpg";

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .imageContainer {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${backgroundImg}) center/cover no-repeat;
    color: var(--white-color);

    h2 {
      margin-bottom: 10px;
      text-transform: capitalize;
      font-size: 32px;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 26px;
        text-align: center;
      }

      @media (max-width: 480px) {
        font-size: 22px;
      }
    }
  }
`;

export const ContactUsFormContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 55px;
  margin: 40px auto;

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
    margin-top: 0 !important;

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
      .error-text {
  color: red;
  font-size: 0.85rem;
  margin-top: 5px;
}
@media (max-width: 768px) {
  margin-bottom: 10px;
}



      .error {
        color: red;
        font-size: 0.75rem;
        margin-top: 4px;
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
        font-weight: 400;
        outline: none;
        transition: outline 0.3s ease, border-color 0.3s ease;

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
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: fit-content;
        margin-top: 15px;

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
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoBox = styled.div`

  span {
    font-size: 14px;
    display: flex;
    font-weight: 500;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const LocationItemDiv = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  gap: 40px;

  .IconsBox {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    padding: 12px;
    text-align: center;
    font-size: 18px;
  }

  .Icons {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    /* flex-direction: column; */
    /* align-items: flex-start; */
    gap: 10px;
  }
`;

export const InfoIcon = styled.span`
  color: var(--primary-button);
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const span = styled.span`
  flex: 1;
`;

export const MapPlaceholder = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;

  @media (max-width: 480px) {
    height: 150px;
    font-size: 14px;
    text-align: center;
    padding: 10px;
  }
`;

export const SocialIconDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 10px;
    margin-top: 0px !important;

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
    /* border: 1px solid var(--border-color); */
    margin-top: 15px;
    font-size: 17.5px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    color: black;
    background-color: var(--white-color) !important;
    outline: 1px solid var(--border-color);
  }
  }

  .SocialIcons.facebook {
    background-color: #3b5998;
  }

  .SocialIcons.twitter {
    background-color: #1da1f2;
  }

  .SocialIcons.whatsapp {
    background-color: #25d366;
  }

  .SocialIcons.telegram {
    background-color: #0088cc;
  }

  .SocialIcons.linkedin {
    background-color: #0077b5;
  }
`;
