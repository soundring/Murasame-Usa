import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const IntroDiv = styled("div")`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
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

const IntroImage = styled("div")`
  .pcBackgroundImage {
    height: 700px;
  }
  .spBackgroundImage {
    display: none;
  }
  @media only screen and (max-width: 750px) {
    .pcBackgroundImage {
      display: none;
    }
    .spBackgroundImage {
      display: block;
      width: 120px;
    }
  }
`;

const IntroContents = styled("div")`
  max-width: 40%;
  height: 600px;
  background: white;
  opacity: 0.8;
  font-weight: 600;
  font-size: 18px;
  margin-top: 50px;
  margin-left: 5%;
  padding: 10px;
  border-radius: 10px;
  overflow: auto;
  @media only screen and (max-width: 750px) {
    max-width: 300px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 300;
    font-size: 16px;
  }
`;

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <IntroTitle>Introduction</IntroTitle>
        <IntroDiv>
          <IntroImage>
            <img src="./image/murasame.png" className="pcBackgroundImage" />
            <img src="./image/icon.png" className="spBackgroundImage" />
          </IntroImage>
          <IntroContents>
            <h3>私について</h3>
            <p>福岡県生まれ。</p>
            <p>
              趣味は、アニメ鑑賞、バビ肉おじさんの配信を見ること、VRChat、読書、「ご注文はうさぎですか？」というコンテンツを追いかけること、エンジニア的なこと。
            </p>
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
            <p>
              ・TECH::CAMPにてプログラミング入門者にRailsを教えるメンター業務のインターン
            </p>

            <p>・福岡大学 法学部 法律学科卒</p>
            <p>
              ・リモートワークでバイト1:Node.jsを使ったAPI開発のお手伝い、CSVテストデータ作成しHTMLに書き出す作業
            </p>
            <p>
              ・リモートワークでバイト2:Androidアプリの開発をお手伝い。Kotlin使用
            </p>
            <p>
              ・株式会社ディーゼロにてフロントエンドエンジニアとしてバイト。ReactでUI作成。
            </p>
          </IntroContents>
        </IntroDiv>
      </div>
    );
  }
}

export default Intro;
