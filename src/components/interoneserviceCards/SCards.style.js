import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  height: 8rem;
  row-gap: 2.5rem;
  border: 1px solid rgb(255, 196, 0);
  border-radius: 10px;
  padding: 2.5rem;
  background-color: black;
  box-shadow: 0 20px 50px rgba(34 33 33 / 80%);
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 0 20px 50px rgb(219 208 208);
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
  color: rgb(255, 196, 0);
  transition: all 0.2s ease;
  &:hover {
    margin-top: -20px;
    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media (max-width: 768px) {
    :hover{
      
    transition:  none;
    }
  }
  @media (max-width: 520px) {
    :hover{
    transition:  none;
    }
  }
`;
const Logo = styled.img`
  width: 15%;
  height: 50px;
  color: white;
`;
const HeaderText = styled.div`
  line-height: 2px;
  font-size: 1.3rem;
  &:hover {
    font-weight: bolder;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  transition: 0.5s;
  cursor: pointer;
  padding-bottom: 15px;
  &:hover {
    height: 8em;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media (max-width: 768px) {
    :hover{
      
    transition:  none;
    }
  }
  @media (max-width: 520px) {
    :hover{
     
    transition:  none;
    }
  }
`;
const ContentText = styled.div`
  color: white;
  height: 0;
  opacity: 0;
  visibility: visible;
  margin: 5px;

  font-weight: 400;

  &:hover {
    color: white;
    height: 2rem;
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease;
  }
  @media (max-width: 768px) {
    :hover{
      opacity: 1;
    visibility: visible;
    transition:  none;
    }
  }
  @media (max-width: 520px) {
    :hover{
      opacity: 1;
    visibility: visible;
    transition:  none;
    }
  }
`;
export { Card, CardHeader, Logo, HeaderText, CardContent, ContentText };
