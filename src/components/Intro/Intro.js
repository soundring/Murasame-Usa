import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const IntroDiv = styled('div')`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`

const IntroTitle = styled(Typography)`
  && {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
  }
`

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
`

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
`

class Intro extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
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
              【自己紹介】 2018年に福岡大学 法学部を卒業しました。
              法学部3年の時にたまたま参加したITのカンファレンスでIT分野のエンジニア、デザイナーの人たちのお話を聞いて、モノづくりが面白そうと魅力を感じ、この人たちの仲間になりたい、お話できるようになりたい、理解したいと思いました。
              それから休学をして1年独学でプログラミングの勉強を始めました。
              その当時から知見を得るとともにエンジニアさんと関わるために勉強会への積極的な参加もし始めました。
              復学して卒業した後は、エンジニアとして1年複数の会社さんでバイトをしました。
              Androidアプリの開発のお手伝いでKotlinを勉強させていただいたり、フロントエンドエンジニアとしてReactを教わりながらバイトをしたりしました。
              現在は自分にビジネスサイドの知見が全くないことを課題に感じ、今度は正社員としてメガベンチャーに企画職として就職しました。
              もっと知見を得ることも目的で東京にでてきました。
              もちろんこちらでも勉強会に積極的に参加しています。
              エンジニアさんやデザイナーさんと関わるのがすきなので、将来は職種としてエンジニア兼プロダクトマネージャーになりたいと思っています。
              【趣味】 ・読書 ・Vtuberさんを見ること ・アニメを見ること ・VRChat ・勉強会への参加
              ビジネス書、技術書問わず興味を持ったことに関する書籍を読むのが好きです。
              新しいもの好きです。 VRが好きで自分で機材を買ってプレイしています。(主にVRChat )
              【ポートフォリオサイトについて】
              バイトでReactを触っていたので、自分の力試しで自己紹介のサイトを作ってみました。
              静的なサイト作成にはReact Staticがオススメされていたのでそれで開発しました。
              Netlifyを使って公開しています。
            </p>

            <h3>経歴</h3>
            <p>・TECH::CAMPにてプログラミング入門者にRailsを教えるメンター業務のインターン</p>

            <p>・福岡大学 法学部 法律学科卒</p>
            <p>
              ・リモートワークでバイト1:Node.jsを使ったAPI開発のお手伝い、CSVテストデータ作成しHTMLに書き出す作業
            </p>
            <p>・リモートワークでバイト2:Androidアプリの開発をお手伝い。Kotlin使用</p>
            <p>
              ・株式会社ディーゼロにてフロントエンドエンジニアとしてバイト。React+TypeScriptでコンポーネント作成。
            </p>
            <p>
              ・ユアドクにてフロントエンドエンジニアとしてバイト。React+TypeScriptでコンポーネント作成
            </p>
          </IntroContents>
        </IntroDiv>
      </div>
    )
  }
}

export default Intro
