import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  padding: 1.75rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 3rem;
  color: rgb(255, 196, 0);
  font-weight: bolder;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export { Container, Header, CardWrapper };
