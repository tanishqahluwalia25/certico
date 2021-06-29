import styled from "styled-components";
import bg_lg from "../../assets/hero_bg_lg.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Colors, Images } from "../../resources/resources";
import cert_illus from "../../assets/cert_illus.svg";
import CertificateIllustration from "../../components/home/CertificateIllustration";

const Hero = () => {
  return (
    <>
      <Header>
        <BgIllustration src={bg_lg} />

        <Container fluid>
          <Row className="mt-5 pt-5">
            <Col md={1} />
            <Col md={4}>
              <Welcome>Welcome to Certi.co</Welcome>
              <Heading>Certificates in one click</Heading>
              <Description>
                Forget the change and save method, get all your certificates
                cretaed by certi.co
              </Description>
              <ButtonPrimary>More About Us</ButtonPrimary>
            </Col>

            <Col md={5}>
              {/* <CertIllustration src={cert_illus} /> */}
              <CertificateIllustration />
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  );
};

export default Hero;

const Header = styled.header`
  color: white;
  padding-top: 5rem;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
`;
const Welcome = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;
const Description = styled.h4`
  font-weight: 600;
  font-size: 1rem;
`;

const ButtonPrimary = styled.button`
  text-decoration: none;
  color: ${Colors.primary1};
  background-color: white;
  text-align: center;
  border: 2px solid transparent;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  font-weight: 700;
  transition-duration: 400ms;
  &:hover {
    background-color: transparent;
    border: 2px solid white;
    color: white;
  }
`;

const BgIllustration = styled.img`
  object-fit: contain;
  position: absolute;
  top: 0px;
  height: 100vh;
`;

const CertIllustration = styled.img`
  /* object-fit: contain; */
  /* height: 10rem; */
  position: absolute;
  top: -7rem;
  width: 100%;
`;
