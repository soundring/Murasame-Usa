import React from "react";
import MenuBar from "../MenuBar/MenuBar";

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
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const BackGround = styled("div")`
  background-color: rgba(45, 45, 45, 1);
`;

// フッター

const Footer = styled("footer")`
  color: white;
  background-color: rgba(77, 77, 77, 1);
  height: 200px;
`;

// ヘッダー

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
  }
`;

// 自己紹介
const Intro = styled("div")`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const IntroTitle = styled(Typography)`
  && {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
  }
`;

const IntroImage = styled("div")``;

const IntroContents = styled("div")`
  width: 650px;
  height: 600px;
  background: white;
  opacity: 0.8;
  font-weight: 600;
  font-size: 18px;
  margin-top: 50px;
  margin-left: 20px;
  padding: 10px;
  border-radius: 10px;
  overflow: auto;
`;

//スキル
const Skill = styled("div")`
  color: #fff;
  background-color: rgba(95, 95, 95, 1);
  padding-bottom: 30px;
`;

const SkillTitle = styled(Typography)`
  && {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    padding-top: 30px;
  }
`;

// コンタクト
const Contact = styled("div")`
  color: #fff;
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

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BackGround>
        <MenuBar />
        <a id="top" />
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

        {/* 自己紹介のセクション */}
        <a id="intro" />
        <IntroTitle>Introduction</IntroTitle>
        <Intro>
          <IntroImage>
            <img
              src="./image/murasame.png"
              height="700"
              className="backgroundImage"
            />
          </IntroImage>
          <IntroContents>
            <h3>私について</h3>
            <p>福岡県生まれ。</p>
            <p>
              法学部の学生時代に福岡大学で開催されたIT系のカンファレンスにたまたま参加し、IT業界面白そうだなと興味を持つ。
            </p>
            <p>
              その後、独学でプログラミングを勉強しながら、勉強会にも多々参加。
            </p>
            <p>
              現在、エンジニア界隈の人たちとの人脈を作りながらスキルを高めている。
            </p>
            <h3>経歴</h3>
            <p>・福岡大学 法学部 法律学科卒</p>
            <p>・リモートワークでデータ作成のバイト</p>
            <p>・リモートワークでAndroidエンジニアとしてバイト</p>
            <p>・株式会社ディーゼロにてフロントエンドエンジニアとしてバイト</p>
          </IntroContents>
        </Intro>

        {/* スキルのセクション */}
        <a id="skill" />
        <Skill>
          <SkillTitle>Skill</SkillTitle>
        </Skill>

        {/* コンタクトのセクション */}
        <a id="contact" />
        <Contact>
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
        </Contact>
        <Footer>フッター</Footer>
      </BackGround>
    );
  }
}

export default Page;
