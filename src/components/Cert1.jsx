import React from "react";
import styled from "styled-components";
import { Flex } from "../GlobalComponents";
import ReactToPdf from "react-to-pdf";
import { useState } from "react";

const data = [
  {
    name: "Tanishq Ahluwalia",
  },
  {
    name: "Tanishq Ahluwalia2",
  },
  {
    name: "Tanishq Ahluwalia4",
  },
  {
    name: "Tanishq Ahluwalia5",
  },
  {
    name: "Tanishq Ahluwalia6",
  },
  {
    name: "Tanishq Ahluwalia7",
  },
  {
    name: "Tanishq Ahluwalia8",
  },
  {
    name: "Tanishq Ahluwalia9",
  },
];

const Cert1 = () => {
  const ref = React.createRef();
  const [index, setIndex] = useState(0);
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [6.25, 10],
  };

  return (
    <>
      {/* <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options}>
        {({ toPdf }) => {
          for (let i = 0; i < data.length; ++i) {
            toPdf();
            setIndex(i);
          }
        }}
      </ReactToPdf> */}
      <Wrapper ref={ref}>
        <Circle1 className="circle" />
        <Circle2 className="circle" />

        <Container>
          <Flex direction="column">
            <Flex direction="column" className="my-4">
              <Heading>Certificate</Heading>
              <SubHeading>of Internship</SubHeading>
            </Flex>

            <Flex direction="column" className="mt-5 mb-3">
              <Text>This acknowledges that</Text>
              <Name>{data[index]}</Name>
              <Text>
                has succesfully completed <Bold>graphic design internship</Bold>
              </Text>
              <Text>at Baku Design Academy</Text>
              <Text>
                <b>from 10.11.20 to 11.02.21</b>
              </Text>
            </Flex>

            <Flex justify="space-between" width="90%" className="my-5">
              <Text>Logo</Text>
              <Flex direction="column" className="d-inline">
                <Text>Sign</Text>
                <Text>Director General</Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Wrapper>
    </>
  );
};

export default Cert1;

const Bold = styled.b`
  font-weight: 600;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  font-weight: 100;
  margin: 0px;
  padding: 0px;
  font-size: 1.4rem;
`;

const Name = styled(Text)`
  font-weight: 600;
  font-size: 2.3rem;
`;

const Heading = styled.p`
  text-align: center;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 4.5rem;
  padding: 0px;
  padding-top: 10px;
  margin: 0px;
`;
const SubHeading = styled(Heading)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: -25px;
`;

const Container = styled.div`
  position: relative;
`;

const Circle1 = styled.div`
  background-color: #ee8040;
  height: 20rem;
  width: 20rem;
  right: -10rem;
  top: -8rem;
`;
const Circle2 = styled.div`
  background-color: #5082c0;
  height: 25rem;
  width: 25rem;
  left: -18rem;
  top: 5rem;
`;

const Wrapper = styled.div`
  background-color: #3b3b3b;
  font-family: "Poppins", sans-serif;
  position: relative;
  overflow: hidden;
  margin: auto;
  height: 600px;
  width: 1000px;
  margin: 3rem auto;
  padding: 1rem;
  .circle {
    position: absolute;
    border-radius: 100%;
  }
`;
