import styled from "styled-components";
import React from "react";
import { width } from "@mui/system";

const ProfileBtn = (props) => {
  // new : margin, display, paddingTop
  const { shape, _onClick, src, size, display, margin, paddingTop, border } = props;

  const styles = {
    src: src,
    size: 200,
    display: display, // new
    margin: margin, // new
    paddingTop: paddingTop, // new
    border: border,
  };


  return (
  <AspectOutter onClick={_onClick}>
    <AspectInner {...styles}>
      <UploadIcon>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c"><g><path d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"></path><path d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"></path></g></svg>
      </UploadIcon>
    </AspectInner>
    
  </AspectOutter>
  )
};

Image.defaultProps = {
  src: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
};

const AspectOutter = styled.button`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: none;
  border: none;

`;

const AspectInner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center; // new
  background-repeat: no-repeat;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 100%;
  &:hover {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("${(props) => props.src}");
    cursor: pointer;
  }
`;

const UploadIcon = styled.svg`
 position: absolute;
 width: ${(props) => props.size}px;
 top: calc(50% - 200px);
`;

export default ProfileBtn;
