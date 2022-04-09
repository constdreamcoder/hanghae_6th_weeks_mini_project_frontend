import React from "react";

// components
import Card from "./Card";

// style
import styled from "styled-components";

const CardList = (props) => {
  return (
    <React.Fragment>
      <CardWarapper>
        <CardGrid>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardGrid>
      </CardWarapper>
    </React.Fragment>
  );
};

const CardWarapper = styled.div`
  // border: 1px solid red;
`;

const CardGrid = styled.div`
  // border: 1px solid green;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  @media screen and (max-width: 718px) {
    gap: 3px;
  }
`;
export default CardList;
