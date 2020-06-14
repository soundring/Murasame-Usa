import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const IntroDiv = styled('div')`
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

const IntroImage = styled('div')`
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

const IntroContents = styled('div')`
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
            <p>2020/06/14更新</p>
            <h3>出身</h3>
            <p>福岡県</p>

            <h3>趣味</h3>
            <p>
              アニメ、Vtuber、VRChat、読書、勉強会への参加、「ご注文はうさぎですか？」というコンテンツを追いかけること。
            </p>

            <h3>現在の仕事で使ってる技術</h3>
            <p>サーバーサイドはRails、フロントがFlutter</p>

            <h3>IT分野に興味を持ったきっかけ</h3>
            <p>
              法学部3年の時に参加したITのカンファレンスでIT分野のエンジニア、デザイナーの人たちのお話を聞いて、この分野面白そうとなったのがきっかけです。
            </p>

            <h3>将来的に</h3>
            <p>
              現在の肩書はエンジニアですが、デザインも好きなので、エンジニア兼デザイナーを目指してます。
              仕事で若干デザイン業務にも携わっています。
            </p>

            <h3>ポートフォリオサイトについて</h3>
            <p>
              React Staticで開発しました。 Netlifyを使って公開しています。
              https化済み。
            </p>

            <h3>経歴</h3>
            <p>福岡大学 法学部 法律学科卒</p>
            <p>東京のメガベンチャーでサービスデザイン職として新卒就職</p>
            <p>体を壊したので福岡へ戻りしばし休養</p>
            <p>福岡市でエンジニアとして就職</p>
          </IntroContents>
        </IntroDiv>
      </div>
    );
  }
}

export default Intro;
