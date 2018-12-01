import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Product from "../Product/Product";
import Skill from "../Skill/Skill";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import styled from "styled-components";

const BackGround = styled("div")`
  background-color: rgba(45, 45, 45, 1);
`;

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BackGround>
        {/* ナビゲーションバー */}
        <MenuBar />
        {/* ヘッダー */}
        <a id="top" />
        <Header />
        {/* 自己紹介のセクション */}
        <a id="intro" />
        <Intro />
        {/* プロダクトのセクション */}
        <a id="product" />
        <Product />
        {/* スキルのセクション */}
        <a id="skill" />
        <Skill />
        {/* コンタクトのセクション */}
        <a id="contact" />
        <Contact />
        {/* フッター */}
        <Footer />
      </BackGround>
    );
  }
}

export default Page;
