import styled from "styled-components";
import { Grid } from "../elements";

const Form = (props) => {
  // new : margin, display, paddingTop
  const {children, padding, width, margin} = props;

  const styles = {
    padding: padding,
    width: width,
    margin: margin,
  };


  return (
  <FormContainer {...styles}>
    <FormContents {...styles}>
      {children}
    </FormContents>
  </FormContainer>
  )
};

Form.defaultProps = {
  width: "480px",
  padding: "80px 0px 120px",
  margin: "0 auto",
};

const FormContainer = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const FormContents = styled.div`
  
  padding: ${(props) => props.padding};
`;

export default Form;
