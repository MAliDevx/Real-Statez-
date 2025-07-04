import styled from "styled-components";
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
  padding: 30px 0px;
  .heading-container {
    /* padding: 20px; */

    h4 {
      text-transform: capitalize;
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      margin: 0;
      padding: 0;
    }
  }

  .lable-input-div {
    width: 100%;
    display: flex;
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
      font-size: 16px;
      padding: 1rem;
      border: 1px solid var(--border-color);
      font-weight: 400;
      outline: none;
      border-radius: 0px !important;
      color: rgb(33, 37, 41);
      transition: outline 0.3s ease, border-color 0.3s ease;

      &:focus {
        outline: 1px solid var(--primary-button);
      }

    }
         .error-text {
  color: red;
  font-size: 0.85rem;
  margin: 0;
}
          .css-1kpc6lj-control{
        border-radius: 0px !important;
        padding: 6px;
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
    // height: "60px",
    padding: "0 10px",
    boxSizing: "border-box",
    border: `1px solid ${state.isFocused ? "var(--primary-button)" : "var(--border-color)"
      }`,
    boxShadow: "none",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
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
    alignItems: "center",

  }),

  placeholder: (provided) => ({
    ...provided,
    fontSize: "16px",
    color: "#999",
    fontFamily: '"Open Sans", sans-serif',
    display: "flex",
    alignItems: "center",
    // height: "60px", 
    // lineHeight: "60px",
  }),

  option: (provided, state) => ({
    ...provided,
    fontSize: "16px",
    backgroundColor: state.isFocused ? "var(--primary-button)" : "#fff",
    color: state.isFocused ? "#fff" : "rgb(33, 37, 41)",
    fontFamily: '"Open Sans", sans-serif',
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    height: "40px",
    lineHeight: "40px",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  flex-wrap: wrap;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
.image-wrapper{
  position: relative;
  cursor: pointer;
  height: 300px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;




export const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--large-text);
  letter-spacing: 1px;
  font-size: 14px;
  color: rgb(255, 255, 255);
  padding: 3px 6px;
`;

export const Content = styled.div`
  padding: 16px;
  .agent-name{
  font-size: 18px;
  color: black;
  margin: 5px 0px;
  text-transform: capitalize;
  }
 .agent-information{

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
 }
`
export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #495057;
  margin-bottom: 13px;
  line-height: 1.5;
  text-transform: capitalize;
`;




