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
      font-family: "Open Sans", serif;
      margin-bottom: 10px;
      text-transform: capitalize;
      font-size: 32px;
      font-weight: 700;
    }
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 16px;
      font-family: "Open Sans", sans-serif;
      text-transform: capitalize;
      font-weight: 400;
    }
  }
`;

export const ContactUsFormContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 55px;
  margin: 40px auto;

  h3 {
    font-family: "Open Sans", sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 0 !important;
  }

  form {
    display: flex;
    flex-direction: column;

    .input-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      /* margin-bottom: 30px; */
      margin-top: 25px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 36px;
.error {
  color: red;
  font-size: 0.75rem;
  margin-top: 4px;
          font-family: "Open Sans", serif;

}

      label {
        font-size: 16px;
        margin-bottom: 15px;
        font-family: "Open Sans", serif;
        font-weight: 600;
        text-transform: capitalize;
      }

      input,
      textarea {
        padding: 17px 14px;
        font-size: 15px;
        font-family: "Open Sans", sans-serif;
        border: 1px solid var(--border-color);
        /* border-radius: 4px; */
        font-weight: 400;
        outline: none;
        transition: outline 0.3s ease, border-color 0.3s ease;

        &:focus {
          outline: 1px solid var(--primary-button);
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
      }
    }
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    /* margin-bottom: 20px; */
  }
`;

export const InfoBox = styled.div`
  font-family: "Open Sans", sans-serif;
  span {
    font-size: 14px;
    display: flex;
    /* margin-bottom: 15px; */
    font-family: "Open Sans", sans-serif;
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
`;
export const LocationItemDiv = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  gap: 40px;
  / &:last-child {
    margin-bottom: 0;
  }
  .IconsBox {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    padding: 12px;
    /* width: 40px;
    height: 40px; */
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }
  .Icons {
    font-size: 20px;
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
`;
export const SocialIconDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 10px;
    margin-top: 0px !important;
  }
  .social-icon-container {
    display: flex;
    gap: 10px;
  }
  .SocialIcons {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--border-color);
    /* padding: 6px; */
    margin-top: 15px;
    border-radius: 4px;
    font-size: 17.5px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    width: 40px;
    height: 40px;
    text-align: center;

    line-height: 40px;
    /* 
    icon color */
  }

  /* Specific background colors */
  .SocialIcons.facebook {
    background-color: #3b5998; /* Facebook blue */
  }

  .SocialIcons.twitter {
    background-color: #1da1f2; /* Twitter blue */
  }

  .SocialIcons.whatsapp {
    background-color: #25d366; /* WhatsApp green */
  }

  .SocialIcons.telegram {
    background-color: #0088cc; /* Telegram blue */
  }

  .SocialIcons.linkedin {
    background-color: #0077b5; /* LinkedIn blue */
  }
`;
