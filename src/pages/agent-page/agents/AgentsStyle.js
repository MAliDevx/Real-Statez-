import styled from "styled-components";
// import backgroundImg from "../../assets/Images/Contactbg.jpg";
import backgroundImg from "../../../assets/Images/Contactbg.jpg";

export const AgentContainer = styled.div`
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
      margin-bottom: 10px;
      text-transform: capitalize;
      font-size: 32px;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 24px;
        text-align: center;
      }
    }
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 16px;
      text-transform: capitalize;
      font-weight: 400;

      @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
      }
    }
  }
`;

export const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
`;
export const AgentGridContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: -50px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  .grid-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 50px 0px;

    @media (max-width: 768px) {
      width: 90%;
      /* grid-template-columns: 1fr; */
      gap: 40px;
    }
    @media (max-width: 480px) {
      width: 90%;
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
`;
export const PropertyContainerMaindiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 100px;
  margin-bottom: 50px;
  top: 70px;
  position: sticky !important;

  @media (max-width: 1024px) {
    width: 80%;
    position: static !important;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
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
export const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "60px",
    padding: "0 10px",
    boxSizing: "border-box",
    border: `1px solid ${
      state.isFocused ? "var(--primary-button)" : "var(--border-color)"
    }`,
    boxShadow: "none",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "16px",
    display: "flex",
    alignItems: "center", // ✅ ensures vertical centering
    cursor: "pointer",
    transition: "border-color 0.3s ease",
    "&:hover": {
      borderColor: "var(--primary-button)",
    },
  }),

  singleValue: (provided) => ({
    ...provided,
    fontSize: "16px",
    color: "rgb(33, 37, 41)",
    fontFamily: '"Open Sans", sans-serif',
    display: "flex",
    alignItems: "center", // ✅ added
    height: "60px", // ✅ match control height
    lineHeight: "60px", // ✅ for vertical centering
  }),

  placeholder: (provided) => ({
    ...provided,
    fontSize: "16px",
    color: "#999",
    fontFamily: '"Open Sans", sans-serif',
    display: "flex",
    alignItems: "center", // ✅ added
    height: "60px", // ✅ match control height
    lineHeight: "60px", // ✅ vertical centering
  }),

  option: (provided, state) => ({
    ...provided,
    fontSize: "16px",
    backgroundColor: state.isFocused ? "var(--primary-button)" : "#fff",
    color: state.isFocused ? "#fff" : "rgb(33, 37, 41)",
    fontFamily: '"Open Sans", sans-serif',
    cursor: "pointer",
    display: "flex",
    alignItems: "center", // ✅ ensures centered options
    height: "40px", // ✅ adjust based on design
    lineHeight: "40px", // ✅ vertical centering
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};

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
  .attachment-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .button-container {
    width: 100%;
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
    padding: 15px 15px;
    margin: -1px 0px 0px;
    box-sizing: border-box;
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
    /* width: 100%; */
    border: 0;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    font-family: inherit;
    color: var(--text-dark);
    transition: 0.3s;
  }
`;

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  flex-wrap: wrap;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    display: block;
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
  padding: 3px 6px;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Name = styled.h3`
  font-size: 18px;
  color: black;
  margin: 5px 0px;
  text-transform: capitalize;
`;

export const Title = styled.p`
  font-size: 14px;
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
  font-weight: 400;
  line-height: 1.5;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--blue); /* Row turns blue on hover */
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

export const Email = styled.a`
  color: #000;
  text-decoration: none;
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
