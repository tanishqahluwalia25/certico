import styled from "styled-components";
import { Flex } from "../../GlobalComponents";
import cert from "../../assets/cert.png";
import { useRef, useState } from "react";
import axios from "axios";

interface valuesInterface {
  logo: any;
  name: string;
  names: any;
  to: string;
  of: string;
  design1: string;
  content: string;
  design2: string;
  prez1: string;
  prez2: string;
  sign1: any;
  sign2: any;
}

const Edit = () => {
  const [values, setValues] = useState<valuesInterface>({
    name: "John Doe",
    to: "Awarded to",
    of: "Certificate of Appreciation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod non quam vero consequatur ab modi fuga cupiditate numquam. Adipisci!",
    design1: "prez",
    design2: "prez",
    prez1: "Tan",
    prez2: "Tan",
    logo: "",
    sign1: "",
    sign2: "",
    names: "",
  });

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (evt) => {
      setValues({ ...values, [e.target.id]: evt.target?.result });
    };
    console.log(values);
  };

  const logoRef = useRef(null);
  const sign1Ref = useRef(null);
  const sign2Ref = useRef(null);
  const csvRef = useRef(null);
  const [response, setResponse] = useState<string>("");
  const [formData, setFormData] = useState(new FormData());
  const [download, setDownload] = useState(false);
  const handleSubmit = () => {
    const formData = new FormData();
    const logo = document.querySelector("#logo");
    const sign1 = document.querySelector("#sign1");
    const sign2 = document.querySelector("#sign2");
    const names = document.querySelector("#names");

    formData.append("logo", (logo as any)?.files[0]);
    formData.append("sign1", (sign1 as any)?.files[0]);
    formData.append("sign2", (sign2 as any)?.files[0]);
    formData.append("names", (names as any)?.files[0]);

    formData.append("of", values.of);
    formData.append("to", values.to);
    formData.append("design1", values.design1);
    formData.append("design2", values.design2);
    formData.append("prez1", values.prez1);
    formData.append("prez2", values.prez2);
    formData.append("content", values.content);
    formData.append("userID", "tan");

    formData.forEach((item) => console.debug(item));
    axios
      .post("https://whispering-cliffs-75293.herokuapp.com/pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((r) => {
        setResponse(r.data);
        setDownload(true);
        // alert("Kindly Download the Certificates");
      })
      .catch((e) => alert(e));
  };
  return (
    <div>
      <Flex>
        <div>
          {" "}
          {download && response ? (
            <a href={response} className="btn btn-success px-5 my-2 mx-5" download>
              Download Certificates
            </a>
          ) : (
            <>
              <Button
                onClick={(e: any) => {
                  logoRef.current && (logoRef.current as any).click();
                }}
                className="btn btn-outline-primary small"
              >
                <InputLogo
                  type="file"
                  name="logo"
                  onChange={(e) => {
                    console.log(e.target.files);
                    handleFileChange(e);
                  }}
                  id="logo"
                  ref={logoRef}
                />
                Upload Logo
              </Button>
              <Button
                onClick={(e: any) => {
                  sign1Ref.current && (sign1Ref.current as any).click();
                }}
                className="btn btn-outline-primary small"
              >
                <InputLogo
                  type="file"
                  name="sign"
                  onChange={(e) => {
                    console.log(e.target.files);
                    handleFileChange(e);
                  }}
                  id="sign1"
                  ref={sign1Ref}
                />
                Upload Signature 1
              </Button>
              <Button
                onClick={(e: any) => {
                  sign2Ref.current && (sign2Ref.current as any).click();
                }}
                className="btn btn-outline-primary small"
              >
                <InputLogo
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files);
                    handleFileChange(e);
                  }}
                  id="sign2"
                  ref={sign2Ref}
                />
                Upload Signature 2
              </Button>
              <Button
                onClick={(e: any) => {
                  csvRef.current && (csvRef.current as any).click();
                }}
                className="btn btn-outline-success small"
              >
                <InputLogo
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files);
                    handleFileChange(e);
                  }}
                  id="names"
                  ref={csvRef}
                />
                Upload CSV File of Names
              </Button>
              <Button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-outline-warning"
              >
                Request Certificates in Zip file
              </Button>
            </>
          )}
          <Design>
            <Img src={cert} />

            <Logo src={values.logo} />

            <Content>
              <InputOf
                onChange={(e) => handleChange(e)}
                value={values.of}
                id="Certificate of"
                placeholder="Certificate of"
              />
              <InputTo
                onChange={(e) => handleChange(e)}
                placeholder="Awarded to"
                id="to"
                value={values.to}
              />
              <InputName
                onChange={(e) => handleChange(e)}
                placeholder="Name"
                id="name"
                name="name"
                value={values.name}
              />
              <p className="text-info px-4 mt-n2 mb-5">
                Names will ne taken from csv file
              </p>
              <InputContent
                onChange={(e) => handleChange(e)}
                placeholder="Content goes here"
                id="content"
                value={values.content}
              />
            </Content>
            <Signs>
              <Flex direction="column">
                <Sign src={values.sign1} alt="signature" />
                <InputPrez
                  onChange={(e) => handleChange(e)}
                  value={values.prez1}
                  placeholder="Name"
                  id="prez1"
                />
                <InputDesig
                  onChange={(e) => handleChange(e)}
                  value={values.design1}
                  id="design1"
                  placeholder="Designation"
                />
              </Flex>
              <Flex direction="column">
                <Sign />
                <Sign src={values.sign2} alt="signature" />
                <InputPrez
                  id="prez2"
                  onChange={(e) => handleChange(e)}
                  value={values.prez2}
                  placeholder="Name"
                />
                <InputDesig
                  id="design2"
                  onChange={(e) => handleChange(e)}
                  value={values.design2}
                  placeholder="Designation"
                />
              </Flex>
            </Signs>
          </Design>
        </div>
      </Flex>
    </div>
  );
};

export default Edit;

const Content = styled.div`
  position: absolute;
  top: 0px;
  left: 32.33%;
  top: 10%;
  width: 700px;
`;
const Form = styled.div``;
const Design = styled.div`
  border: 2px solid gray;
  border-radius: 10px;
  margin: 15px;
  padding: 0.5rem;
  position: relative;
  input:focus {
    border: 1px solid gray;
  }

  input,
  textarea {
    /* color: black; */
    border: 1px solid transparent;
    display: block;
    width: 100%;
    background-color: transparent;
  }
`;
const Img = styled.img`
  height: 90vh;
  position: relative;
  /* width: 100vw; */
`;

const InputName = styled.input`
  font-size: 600%;
  text-transform: uppercase;
  font-family: serif;
`;
const InputOf = styled.input`
  font-size: 200%;
  /* color: gray; */
  font-weight: 600;
`;
const InputContent = styled.textarea`
  color: gray;
  font-size: 150%;
  width: 100%;

  max-height: 200px;
  height: 200px;
  min-height: 200px;
`;
const InputTo = styled.input`
  font-size: 150%;
  color: gray;
`;
const InputDesig = styled.input`
  text-align: center;
  color: gray;
  font-size: 90%;
`;
const InputPrez = styled.input`
  text-align: center;
  font-size: 120%;
`;
const InputSign = styled.input``;
const InputLogo = styled.input`
  height: 0px;
  width: 0px;
`;

const Signs = styled(Flex)`
  position: absolute;
  bottom: 10%;
  left: 32.33%;
  width: 700px;

  align-items: flex-end;
`;

const Logo = styled.img`
  position: absolute;
  left: 0%;
  top: 0%;
  /* padding: 10%; */
  margin: 5%;
  width: 166px;
  min-height: 100px;
  object-fit: contain;
  /* border: 10px solid black; */
`;
const Sign = styled.img`
  width: 100px;
`;

const Button = styled.button`
  margin: 10px 10px;
`;
