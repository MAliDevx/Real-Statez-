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
    }
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 14px;
      font-family: "Open Sans", sans-serif;
      text-transform: capitalize;
    }
  }
`;

export const ContactUsFormContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin: 40px auto;

  h3 {
    font-family: "Open Sans", sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    .input-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;

      label {
        font-size: 16px;
        margin-bottom: 20px;
        font-family: "Open Sans", serif;
        font-weight: 600;
        text-transform: capitalize;
      }

      input,
      textarea {
        padding: 10px 14px;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        border: 2px solid gray;
        border-radius: 4px;
        outline: none;
        transition: outline 0.3s ease, border-color 0.3s ease;

        &:focus {
          outline: 2px solid var(--primary-button);
        }
      }

      textarea {
        resize: vertical;
        height: 120px;
      }
    }

    button {
      align-self: flex-end;
      padding: 12px 24px;
      color: var(--white-color);
      background-color: var(--primary-button);
      border: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      font-family: "Open Sans", sans-serif;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #1f3bb3;
      }
    }
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoBox = styled.div`
  border: 1px solid var(--border-color);
  /* padding: 20px; */
  font-family: "Open Sans", sans-serif;
`;

export const InfoItem = styled.div`
  display: flex;
  /* align-items: ${({ alignItems }) => alignItems || "between"}; */
  margin-bottom: 12px;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid gray;
  /* background-color: red; */

  &:last-child {
    margin-bottom: 0;
  }
`;
export const LocationItemDiv = styled.div`
  display: flex;
  /* align-items: ${({ alignItems }) => alignItems || "between"}; */
  margin-bottom: 8px;
  /* justify-content: space-between; */
  align-items: center;
  gap: 40px;
  /* padding: 10px 0px; */
  /* border-bottom: 1px solid gray; */
  /* background-color: red; */

  &:last-child {
    margin-bottom: 0;
  }
  .IconsBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    padding: 10px;
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
export const SocialIconDiv=styled.div`
width: 100%;
display: flex;
align-items: flex-end;
justify-content: space-between;
gap: 10px;
margin-top: 10px;

.SocialIcons{
       display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    padding: 10px;
}
`