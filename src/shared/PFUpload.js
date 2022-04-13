import React, { useState } from 'react';
import {Button, Image, Grid, Text, Modal, FileInput, DragDrop, ProfileBt } from "../elements"
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { ModalHeader, ModalBody, ModalFooter } from "../elements/Modal";

import AWS from "aws-sdk";



const PFUpload = (props) => {
    const profile = useSelector((state) => state);
    const dispatch = useDispatch();

    // const is_uploading = useSelector((state) => state.image.uploading);
    const preview = useSelector((state) => state.image.preview);
    const fileInput = React.useRef();
    const [showModal, setShowModal] = useState(false);

    const selectFile = (e) => {
      console.log("-- Run PFUpload")
      const reader = new FileReader();
      const file = fileInput.current.files[0];
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        dispatch(imageActions.setPreview(reader.result));
      };
    }

    const uploadFile = (e) => {
      console.log("-- Run uploadFile")
      const file = fileInput.current.files[0];
      
      AWS.config.update({
        region: "ap-northeast-2",
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId:
                "ap-northeast-2:8eb201de-6a66-4c4c-ad36-cddabf07cfe1",
        }),
      });
  
      const date = new Date();
  
      // console.log(date, file);
      if (!file) {
          window.alert("이미지 파일을 선택해주세요!");
          return;
      }
  
      const uploadToS3 = new AWS.S3.ManagedUpload({
          params: {
              Bucket: "my-fridge-image/profile",
              Key: file.name + date.getTime() + ".jpg",
              Body: file,
          },
      });
  
      const promise = uploadToS3.promise();
  
      promise.then(
          (data) => {
              console.log(data.Location);
          },
          (error) => {
              return window.alert("이미지 업로드 실패", error.message);
          }
      );

      setShowModal(false);
    }

    return (
      <React.Fragment>
        <Grid is_flex>
          <Image
            shape="circle"
            src={preview ? preview : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"}
          />
          <Button width="80px" text="업로드"_onClick={() => {return setShowModal(true);}} />
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
              <Button text="프로필 업로드" _onClick={uploadFile}>
              </Button>
            </ModalFooter>
          </Modal>
      </React.Fragment>
    )
}

export default PFUpload;