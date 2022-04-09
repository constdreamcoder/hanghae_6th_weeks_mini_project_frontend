import React from "react";
import {Button} from "../elements"
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";


const PFUpload = (props) => {
    const dispatch = useDispatch();
    // const is_uploading = useSelector((state) => state.image.uploading);
    const preview = useSelector((state) => state.image);
    const fileInput = React.useRef();

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        console.log(file)
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          console.log(reader.result);
        };
        console.log(fileInput.current.files[0]);
        
        reader.onloadend = () => {
          dispatch(imageActions.setPreview(reader.result))
        };
    }
    
    // const uploadFB = () => {
    //     if (!fileInput.current || fileInput.current.files.length === 0) {
    //       window.alert("파일을 선택해주세요!");
    //       return;
    //     }
    
    //     dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));
    //   };

    return (
      <React.Fragment>
        <input type="file" onChange={selectFile} ref={fileInput} disabled={null}/>
        <Button _onClick={null} text="이미지 업로드"></Button>
      </React.Fragment>
    )
}

export default PFUpload;