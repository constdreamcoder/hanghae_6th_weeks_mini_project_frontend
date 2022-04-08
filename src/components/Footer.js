import React from "react";

// elements
import { Grid, Text } from "../elements";

// style
import styled from "@emotion/styled";

const Main = (props) => {
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterInnerContainer>
          <FooterTitle>항해99 - 7조 miniproject</FooterTitle>
          <FooterBody>
            <FooterBodyLeft>
              <FooterBodyLeftFrontend>Frontend</FooterBodyLeftFrontend>
              <FooterBodyLeftGithubAddress>
                <FooterLink href="https://github.com/constdreamcoder/hanghae_6th_weeks_mini_project_frontend.git">
                  프론트엔드 깃허브로 바로가기
                </FooterLink>
                <br />
                강성지, 장수찬, 소민경
              </FooterBodyLeftGithubAddress>
            </FooterBodyLeft>

            <FooterBodyRight>
              <FooterBodyRightBackend>Backend</FooterBodyRightBackend>
              <FooterBodyRightGithubAddress>
                <FooterLink href="https://github.com/doremilan/Chap5_project.git">
                  백엔드 깃허브로 바로가기
                </FooterLink>
                <br />
                이미란, 정대규, 차성빈
              </FooterBodyRightGithubAddress>
            </FooterBodyRight>
          </FooterBody>
        </FooterInnerContainer>
      </FooterContainer>
    </React.Fragment>
  );
};

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: rgb(173, 216, 255);
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;

const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(25, 73, 116);
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: center;
  align-items: center;
  padding: 16px 0px;
  border-top: 1px solid rgb(126, 125, 125);
`;

const FooterBodyLeft = styled.div`
  display: flex;
  //   flex-direction: row;
  justify-content: center;
  align-items: start;
  margin-right: 50px;
`;

const FooterBodyRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  // z-index: 1;
`;

const FooterBodyLeftFrontend = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin-right: 13px;
`;

const FooterBodyLeftGithubAddress = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

const FooterBodyRightBackend = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin-right: 13px;
`;

const FooterBodyRightGithubAddress = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;
export default Main;
