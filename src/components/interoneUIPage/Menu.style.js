import styled from "styled-components";

const MenuItems = styled.div`
  &#slideOutMenu.hide {
    transform: translate3d(0, -10%, 0);
  }
  &#slideOutMenu.show {
    transform: translate3d, (0, 0%, 0);
    /* overflow: hidden; */
  }
  width: 100%;
  z-index: -1;
  background-color: white;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  z-index: 100;
`;
const MenuText = styled.div`
  margin-left: 15px;
  background-color: white;
  text-decoration: none;
  &:hover {
    color: rgb(255, 196, 0);
  }
`;

export { MenuItems, MenuText };
