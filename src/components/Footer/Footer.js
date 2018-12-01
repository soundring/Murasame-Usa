import React from "react";
import styled from "styled-components";

const FooterSelect = styled("footer")`
  color: white;
  background-color: rgba(77, 77, 77, 1);
  height: 20px;
  text-align: center;
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FooterSelect>
        <small>&copy; Murasame Usa All Rights Reserved.</small>
      </FooterSelect>
    );
  }
}

export default Footer;
