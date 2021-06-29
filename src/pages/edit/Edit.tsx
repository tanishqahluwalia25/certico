import styled from "styled-components";
import { Flex } from "../../GlobalComponents";
import cert from "../../assets/cert.png";
import { useRef, useState } from "react";
import axios from "axios";
const Edit = () => {
  const [values, setValues] = useState<{
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
  }>({
    name: "John Doe",
    to: "Awarded to",
    of: "Certificate of Appreciation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod non quam vero consequatur ab modi fuga cupiditate numquam. Adipisci!",
    design1: "",
    design2: "",
    prez1: "",
    prez2: "",
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

  const handleSubmit = () => {
    const form = new FormData();
    form.append("logo", values.logo);
    form.append("sign", values.sign1);
    form.append("names", values.names);

    axios
      .post("http://localhost:4000/uploading-data", {
        data: form,
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((r) => alert("done"))
      .catch((e) => alert(e));
  };
  return (
    <div>
      <Flex>
        <div>
          {" "}
          <Button
            onClick={(e: any) => {
              logoRef.current && (logoRef.current as any).click();
            }}
            className="btn btn-outline-primary small"
          >
            <InputLogo
              type="file"
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
          <Button onClick={handleSubmit} className="btn btn-outline-warning">
            Request Certificates in Zip file
          </Button>
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

// const FileUploader = ({onFileSelect}:any) => {
//     const fileInput = useRef(null)

//     const handleFileInput = (e:any) => {
//         onFileSelect(e.target.files[0])
//     }

//     return (
//         <div className="file-uploader">
//             <input type="file" onChange={handleFileInput}/>
//             <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-outline-primary"/>
//         </div>
//     )
// }

const Button = styled.button`
  margin: 10px 10px;
`;
