import React from "react";

// style
import styled from "@emotion/styled";

const Body = (props) => {
  return (
    <React.Fragment>
      <BannerImage>
        <BannerText>
          <BannerSpan>냉장고를 부탁해</BannerSpan>
        </BannerText>
      </BannerImage>
    </React.Fragment>
  );
};

const BannerImage = styled.div`
  width: 100vw;
  height: 20rem;
  border-radius: 0px;
  background-image: url(https://my-speak-app.s3.ap-northeast-2.amazonaws.com/camp.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 25px;
`;

const BannerText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  z-index: 1;
`;

const BannerSpan = styled.span`
  font-size: 5rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  text-align: center;
  text-shadow: black 1px 1px 1px;
`;

export default Body;
