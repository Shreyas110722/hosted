import styled from "styled-components";
import tw from "twin.macro";
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  ${tw`flex items-center flex-col`}
 
`;
const Text = styled.div`
  color: rgb(255, 196, 0);
  font-size: 1.75rem;
`;
const TextOverlay = styled.div`
  display: none;
  color: white;

  ${Text}:hover & {
    display: flex;
    justify-content: center;
    flex-direction: column;
    bottom: 20px;
    flex-wrap: wrap;

    color: white;
    font-size: 18px;
  }
`;

const No = styled.div`
  color: white;
  font-size: 4.5rem;
`;
export { Content, Text, TextOverlay, No };
