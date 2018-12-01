import axios from "axios";
import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return [
      {
        path: "/",
        component: "./src/components/pages/Page"
      },
      {
        path: "/blog",
        component: "src/containers/Blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
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
