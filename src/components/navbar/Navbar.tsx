import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Colors } from "../../resources/resources";

const Navbar = () => {
  return (
    <>
      <Container fluid>
        <Nav>
          <NavHeading>Certi.co</NavHeading>
          <ButtonSecondary>Login &nbsp;&nbsp;&nbsp;{"   >"}</ButtonSecondary>
        </Nav>
      </Container>
    </>
  );
};

export default Navbar;
const NavHeading = styled.h3`
  color: white;
  font-weight: 700;
`;
const ButtonSecondary = styled.button`
  color: white;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  background: linear-gradient(45deg, ${Colors.primary1}, ${Colors.primary2});
  border: 2px solid transparent;
  transition-duration: 400ms;
  transition-timing-function: ease-in-out;
  &:hover {
    background: white;
    color: ${Colors.primary2};
    border: 2px solid ${Colors.primary2};
  }
`;
const NavItem = styled.div``;
const Nav = styled.nav`
  display: flex;
  position: absolute;
  top: 0px;
  z-index: 1;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 4rem;
`;
