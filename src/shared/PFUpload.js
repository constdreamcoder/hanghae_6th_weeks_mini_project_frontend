import React, { useState } from 'react';
import {Button, Image, Grid, Text, Modal, FileInput, DragDrop, ProfileBt } from "../elements"
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { ModalHeader, ModalBody, ModalFooter } from "../elements/Modal";


const PFUpload = (props) => {
    const dispatch = useDispatch();
    // const is_uploading = useSelector((state) => state.image.uploading);
    const preview = useSelector((state) => state.image.preview);
    const fileInput = React.useRef();
    const [showModal, setShowModal] = useState(false);


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

    const [fileUrl, setFileUrl] = useState(null);
  

    return (
      <React.Fragment>
        <Grid is_flex>
          <Image
            shape="circle"
            src={preview ? preview : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"}
          />
          <Button width="80px" text="업로드" src={preview ? preview : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"} _onClick={() => {return setShowModal(true);}} />
          </Grid>
          <Modal show={showModal} setShow={setShowModal}>
            <ModalHeader>
                <h2>프로필 업로드하기</h2>
            </ModalHeader>
            <ModalBody>
              <Image
                shape="circle"
                src={preview ? preview : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"}/>
              <input type="file" onChange={selectFile} ref={fileInput} disabled={null}/>
            </ModalBody>
            <ModalFooter>
              <Button text="프로필 업로드" _onClick={
                () => setShowModal(false)
                }>
              </Button>
            </ModalFooter>
          </Modal>
      </React.Fragment>
    )
}

export default PFUpload;