// import { FormGroup, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import styled from "styled-components";

import * as d3 from "d3";
import XLSX from "xlsx";
const Form = () => {
  const [file, setFile] = useState();
  const [data, setData] = useState();
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setData(XLSX.utils.sheet_to_json(file));
    console.log(data);
  };

  //   useEffect(() => {
  //     if (file?.name) {
  //       d3.csv(file)
  //         .then(function (data) {
  //           console.log(data);
  //         })
  //         .catch(function (err) {
  //           throw err;
  //         });
  //     }
  //   }, [file]);

  return (
    <Main>
      <input type="file" onChange={onFileChange} />
      <br />
      {JSON.stringify(data)}
    </Main>
  );
};

export default Form;

const Main = styled.div``;
