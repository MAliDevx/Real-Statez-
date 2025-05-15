import styled from "styled-components";
import backgroundImg from "../../assets/Images/Contactbg.jpg";

export const SingleAgentHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

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

export const AgentContentMainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledAgentInnerContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 70px 0px;
  /* align-items: center; */
`;

export const AgentDetailContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin: 100px 0px; */
`;

export const SingleAgentDetail = styled.div`
  width: 100%;
  display: flex;

  /* margin: 100px 0px; */
  .grid-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    align-items: start;
  }
`;

export const Card = styled.div`
  display: flex;
  background: #fff;

  overflow: hidden;
  border: 1px solid var(--border-color);

  cursor: pointer;
  /* max-width: 700px; */
  width: 100%;
  height: fit-content;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* display: block; */
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgb(0, 34, 71);
  box-shadow: rgba(94, 93, 99, 0.08) 1px 2px 1px,
    rgba(61, 60, 66, 0.12) 0px 1px 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  color: rgb(255, 255, 255);
  font-family: "Open Sans", sans-serif;
  padding: 3px 6px;
`;

export const Content = styled.div`
  padding: 10px 20px;
`;

export const Name = styled.h3`
  font-family: "Open Sans", serif;
  font-size: 18px;
  color: black;
  margin: 5px 0px;
  text-transform: capitalize;
`;

export const Title = styled.p`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: #495057;
  margin-bottom: 13px;
  line-height: 1.5;
  text-transform: capitalize;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 15px;
  color: #002247;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--blue);
  }

  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    padding: 4px;
    color: var(--dark-blue);
    background-color: var(--cyan);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  font-size: 20px;
  margin-top: 1rem;

  svg {
    color: var(--white-color);
    padding: 3px;
    border-radius: 0;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background: transparent !important;
    }
  }

  svg:nth-child(1):hover {
    color: rgb(59, 89, 153);
  }

  svg:nth-child(2):hover {
    color: rgb(85, 172, 238);
  }

  svg:nth-child(3):hover {
    color: rgb(0, 119, 181);
  }

  svg:nth-child(4):hover {
    color: rgb(217, 28, 172);
  }

  svg:nth-child(5):hover {
    color: rgb(204, 24, 30);
  }
`;
export const TabsButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  .TabButton-Container {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 10px;
    padding: 5px 20px;
    border: 1px solid var(--border-color);
    outline: none;
  }
  /* Default tab button */
  .Tab-Button {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 5px 0px;
    padding: 10px 18px;
    color: var(--primary-button);
    background-color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Active (selected) tab */
  .Tab-Button.react-tabs__tab--selected {
    background-color: var(--primary-button);
    color: white;
    border-radius: 0 !important;
    outline: none;
  }
  .para-container {
    border-top: 1px solid var(--border-color);
    display: flex;
    border-top: 1px solid var(--border-color);
    flex-direction: column;
    /* align-items: center; */

    p {
      font-size: 14px;
      font-family: "Open Sans", sans-serif;
      font-weight: 500;
      color: #495057;
      line-height: 1.5;
      margin: 6px 0px;
    }
    .descriptionButton {
      font-family: "Open Sans", sans-serif;
      width: fit-content;
      font-size: 16px;
      font-weight: 600;
      text-transform: capitalize;
      margin: 5px 0px;
      padding: 10px 18px;
      background-color: var(--primary-button);
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  }
  .button-Container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
`;

// components/PropertyCard.styled.js

export const CardContainer = styled.div`
  display: flex;
  height: fit-content;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  background: #fff;
  margin-top: 40px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 40%;
  /* min-width: 100%; */
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    border: 0;
    outline: none;
    padding: 6px 8px;
    background-color: var(--large-text);
    color: white;
    cursor: pointer;
  }
`;

export const SoldOutRibbon = styled.div`
  position: absolute;
  top: 77px;
  left: -28px;
  width: 151px;
  padding: 6px 40px;
  transform: rotate(-45deg);
  transform-origin: left top;
  font-size: 12px;
  font-weight: bold;
  background-color: var(--primary-button);
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1;

  outline: none;
`;

export const InfoSection = styled.div`
  display: flex;
  width: 40%;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  padding: 20px 15px;
`;

export const Tag = styled.span`
  border: none;
  width: fit-content;
  outline: none;
  padding: 6px 8px;
  color: var(--white-color);
  background-color: var(--primary-button);
  margin-bottom: 10px;
`;

export const AgentTitle = styled.h2`
  font-family: "Open Sans", serif;
  font-weight: 700;
  color: #002247;
  font-size: 18px;
`;

export const Location = styled.div`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: #495057;
  line-height: 1.5;
  /* margin-bottom: 10px; */
`;

export const DetailRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #333;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 14px;
    color: #495057;
    margin: 0;
    margin-top: 15px;
  }

  svg {
    margin-right: 4px;
  }
`;

export const RightSection = styled.div`
  width: 20%;
  padding: 16px;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const AgentCircle = styled.div`
  background-color: #ffce00;
  color: #222;
  font-weight: 700;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  border: 2px solid white;
  padding: 3px;
  /* vertical-align: middle */
`;

export const AgentName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #003b95;
`;

export const PropertyContainerMaindiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: sticky;
  top: 70px;
  align-self: flex-start; /* ✅ important inside flex */
`;

export const SearchagentConatiner = styled.div`
  width: 100%;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .heading-container {
    padding: 20px;
    /* border-bottom: 1px solid var(--border-color); */

    h4 {
      text-transform: capitalize;
      /* color: rgb(33, 37, 41); */
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      font-family: "Open Sans", serif;
      margin: 0;
      padding: 0;
    }
  }
  .InputContainer {
    width: 100%;
    padding: 15px;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    box-sizing: border-box;
  }
  .lable-input-div {
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    box-sizing: border-box;
    label {
      font-family: "Open Sans", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: rgb(33, 37, 41);
      line-height: 1.5;
    }
    input {
      height: 55px;
      font-size: 16px;
      /* padding: 0.75rem; */
      padding: 0px 20px;
      border: 1px solid var(--border-color);
      font-weight: 400;
      outline: none;
      color: rgb(33, 37, 41);

      transition: outline 0.3s ease, border-color 0.3s ease;

      &:focus {
        outline: 1px solid var(--primary-button);
      }
    }
  }
  textarea {
    /* height: 55px; */
    font-size: 16px;
    /* padding: 0.75rem; */
    padding: 0px 20px;
    border: 1px solid var(--border-color);
    font-weight: 400;
    outline: none;
    color: rgb(33, 37, 41);
    box-sizing: border-box;
    transition: outline 0.3s ease, border-color 0.3s ease;

    &:focus {
      outline: 1px solid var(--primary-button);
    }
  }

  .ButtonDiv {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0px;
    padding: 15px 18px;
    background-color: var(--primary-button);
    color: white;
    border: none;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    button {
      background-color: transparent;
      border: 0;
      outline: none;
      overflow: hidden;
      color: white;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
export const Subheading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
`;
export const Heading = styled.h4`
  text-transform: capitalize;
  /* color: rgb(33, 37, 41); */
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  padding: 20px 0px;
  margin: 0;
  /* border-bottom: 1px solid var(--border-color); */
  font-family: "Open Sans", serif;
`;

export const PropertyCetagoriesContainer = styled.div`
  width: 100%;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .property-category-div {
    width: 100%;
  }
  .property-category-item {
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }

    span {
      display: block;
      color: rgb(34, 34, 34);
      font-size: 16px;
      text-transform: capitalize;
      letter-spacing: 0.3px;
      line-height: 26px;
      font-family: "Open Sans", sans-serif;
      text-decoration: none;
      transition: transform 0.3s ease, color 0.3s ease;
      transform: translateX(0);
    }

    :hover span {
      transform: translateX(5px);
      color: var(--primary-color); /* Optional color change */
    }

    .property-count {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 26px;
      width: 26px;
      text-align: center;
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
      border-radius: 4px;
      padding: 6px;
      color: white;
      background-color: var(--primary-button);
    }
  }
`;
export const PropertyAttachmentDiv = styled.div`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  /* border: 1px solid var(--border-color); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button-container {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }

  .button-div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: transparent;
    border: 1px solid var(--border-color);
    cursor: pointer;
    transition: 0.5s;
    color: rgb(34, 34, 34);
    font-size: 16px;
    text-transform: capitalize;
    letter-spacing: 0.3px;
    line-height: 26px;
    padding: 15px 20px;
    margin: -1px 0px 0px;
    font-family: "Open Sans", sans-serif;

    /* Hover effect */
    &:hover {
      background-color: var(--primary-button);

      button {
        color: white;
      }

      svg {
        color: white;
      }
    }

    svg {
      font-size: 18px;
      transition: 0.3s;
      color: var(--text-dark); /* or default icon color */
    }
  }

  button {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    font-family: inherit;
    color: var(--text-dark);
    transition: 0.3s;
  }
`;
