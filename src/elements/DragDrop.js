import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];


function DragDrop(props) {
  // const fileInput = React.useRef();
  // const [file, setFile] = useState(null);
  // setFile(props.fileUrl)

  const handleChange = (file) => {
    // setFile(file);
    console.log(file);
  };

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
  );
}

export default DragDrop;