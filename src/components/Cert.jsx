import styled from "styled-components";

const Cert = () => {
  return (
    <Main>
        <h2>hello</h2>
      <Heading> hi</Heading>
    </Main>
  );
};

export default Cert;

const Heading = styled.h3`
  color: white;
  padding: 0px;
  margin: 0px;
`;
const Main = styled.div`
  background-color: green;
  height: 100vh;
  width: 100vw;

  ${Heading}{
      color: blue;
  }
`;  

