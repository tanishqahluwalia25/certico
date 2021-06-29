import styled, { keyframes } from "styled-components";
import { Colors } from "../../resources/resources";
import { Flex } from "../../GlobalComponents";
const CertificateIllustration = () => {
  return (
    <>
      <Main>
        <Flex justify="space-between" align="center">
          <Flex justify="flex-start" flex={0.4}>
            <Left></Left>
          </Flex>
          <Flex
            flex={1}
            direction="column"
            justify="space-between"
            align="space-between"
          >
            <Heading delay={50} />
            <SubHeading width="20%" delay={50} />
            <SubHeading width="60%" delay={100} />
            <SubHeading delay={120} />
            <SubHeading delay={120} />

            <Flex flex={0.2} direction="row" justify="space-between">
              <SubHeading width="20%" delay={200}></SubHeading>
              <SubHeading width="20%" delay={210}></SubHeading>
              <SubHeading width="20%" delay={210}></SubHeading>
            </Flex>
            {/* <Heading /> */}
          </Flex>
        </Flex>
      </Main>
    </>
  );
};

export default CertificateIllustration;

const animate = keyframes`

    from{
        opacity:0;
        transform:translateY(-10px)  ;
    }

    to{
        opacity:0.6;
        transform:translateY(0px) ;
    }
`;

const animateLeft = keyframes`

    from{
        opacity:0;
        transform:scaleY(0.1) ;
    }

    to{
        opacity:0.6;
        transform:scaleY(1);
    }
`;

const Left = styled.div`
  border-radius: 5px;
  height: 95%;
  width: 100%;
  background: linear-gradient(160deg, ${Colors.primary2}, ${Colors.primary1});
  margin-left: 8px;
  opacity: 0.6;

  animation-name: ${animateLeft};
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: top;
  animation-direction: alternate;
`;

const Heading = styled.div<{ delay: number }>`
  background: linear-gradient(45deg, ${Colors.primary2}, ${Colors.primary1});
  width: 90%;
  border-radius: 2px;
  height: 12px;
  margin: 1rem;
  opacity: 0.6;

  animation-name: ${animate};
  animation-duration: ${(props) => 1000 + props.delay + "ms"};
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  /* animation-delay: ${(props) => props.delay + "ms"}; */
`;

const SubHeading = styled(Heading)<{ width?: string }>`
  width: ${(props) => props.width || "50%"};
`;

const Main = styled.div`
  height: 20rem;
  width: 30rem;
  background-color: white;
  border-radius: 9px;
  /* border: 4px solid ${Colors.primary2}; */
  box-shadow: 1px 1px 100px 100px #0000000d;
  /* opacity: 0.9; */
  overflow-y: hidden;
`;
