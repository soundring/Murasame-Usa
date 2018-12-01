import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardMedia, CardTitle } from "material-ui/Card";
import styled from "styled-components";

const ImageMedia = styled(CardMedia)`
  && {
    height: 100vh;
    ::before {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: " ";
    }
  }
`;

const HeaderCharacter = styled(Typography)`
  && {
    color: #fff;
    font-size: 64px;
    font-weight: 300;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    text-align: center;
    @media only screen and (max-width: 750px) {
      font-size: 36px;
    }
  }
`;

class Headers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageMedia
        overlay={
          <CardTitle
            title="scroll ↓"
            subtitle=""
            style={{ textAlign: "center" }}
          />
        }
      >
        <HeaderCharacter>Murasame s' Portfolio Site</HeaderCharacter>
        <img
          src="./image/back_image.jpg"
          className="backgroundImage"
          style={{ height: "100vh" }}
        />
      </ImageMedia>
    );
  }
}

export default Headers;
