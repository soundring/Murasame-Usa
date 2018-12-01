import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";

export default {
  getSiteData: () => ({
    title: "Murasame Usa's Site"
  }),
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "./src/components/pages/Page"
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html prefix="og: http://ogp.me/ns#">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="ムラサメのポートフォリオサイトです！"
            />
            <meta
              property="og:title"
              content="Murasame's Portfolio Site TopPage"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content="Twitterでムラサメの名前で活動している私のポートフォリオサイトです"
            />
            <meta
              property="og:url"
              content="https://fervent-spence-c49b3c.netlify.com/"
            />
            <meta property="og:site_name" content="Murasame's Portfolio Site" />
            <meta
              property="og:image"
              content="https://user-images.githubusercontent.com/14822782/49332592-19973c80-f5f3-11e8-8d38-926ea0a67f20.png"
            />
            <title>Murasame Usa's site</title>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
