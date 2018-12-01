import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";
import styled from "styled-components";

const ContactDiv = styled("div")`
  color: #fff;
  background-color: rgba(95, 95, 95, 1);
  text-align: center;
  padding-bottom: 30px;
  > p {
    font-size: 20px;
    margin: 0;
  }
`;

const ContactTitle = styled(Typography)`
  && {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const Twitter = styled(Typography)`
  && {
    color: #fff;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 30px;
  }
`;

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ContactDiv>
        <ContactTitle>コンタクト</ContactTitle>
        <Twitter>Twitterでどうぞ</Twitter>
        <div style={{ marginBottom: 30 }}>
          <TwitterFollowButton screenName={"murasame_usa"} />
        </div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="murasame_usa"
          options={{ width: 600, height: 600 }}
        />
      </ContactDiv>
    );
  }
}

export default Contact;
