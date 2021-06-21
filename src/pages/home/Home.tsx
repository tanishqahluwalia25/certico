import Form from "../../components/Form";
import Cert from "../../components/Cert";
import Cert1 from "../../components/Cert1";
import Hero from "./Hero";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Hero />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.main`
  width: 100vw;
  overflow: hidden;
  height: auto;
`;
