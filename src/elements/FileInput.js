import React from "react";
import styled from "styled-components";
import Dropzone from 'react-dropzone';
import {DragDrop } from "../elements"


const FileInput = (props) => {
  // new : bg, padding


  const styles = {

  };

  return (
    <React.Fragment>
      <DragDrop />
      {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <InputArea {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone> */}
    </React.Fragment>
  );
};

FileInput.defaultProps = {
  _onClick: () => {},
};

const Label = styled.label`
  cursor: pointer;
  background-color: red;
  width: 100%;
  height: 200px;
  display: inline-block;
  
`;

const InputArea = styled.input`
  cursor: pointer;
  background-color: red;
  width: 100%;
  height: 200px;
  display: inline-block;
  
`;


export default FileInput;
