import styled from "styled-components";
import footerpgImage from '../../../assets/Images/Contactbg.jpg'
export const FooterContainer = styled.footer`
  position: relative;
  color: white;
  padding-top: 3rem;
  background: url(${footerpgImage}) no-repeat center center/cover;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); 
    backdrop-filter: blur(2px); 
    z-index: -1;
  }
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    width: 90%;
    margin: 0 auto;
    padding: 0px 6rem 5rem;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 250px;

  h4 {
    margin-bottom: 1rem;
    font-weight: bold;
    color: #fff;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 14px;
      line-height: 1.6;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;

    span {
      color: #00aced;
      font-weight: lighter;
    }
  }
`;

export const Address = styled.div`
  margin-top: 1rem;

  p {
    margin: 0.2rem 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const QuickLinks = styled.div`
  columns: 2;
  column-gap: 2rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  font-size: 18px;
  margin: 1rem 0;

  svg {
    color: var(--white-color);
    padding: 10px;
    border-radius: 0;
    font-size: 15.5px;
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
    color:rgb(204, 24, 30); 
  }
`;

export const Newsletter = styled.div`
     margin-top: 1rem;
    width: 100%;
    overflow: hidden;

  p {
    font-size: 13px;
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
    width: 92%;
    padding: 15px;
    margin-bottom: 0.5rem;
    border: none;
    outline: none;
`;

export const SubscribeButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #1e3bd2;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1529a6;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: black;
  gap: 22rem;

  a {
    color: #00aced;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  .icons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
 
  }
`;

export const NavLink = styled.div`
    color: var(--white-color);
    cursor: pointer;
`