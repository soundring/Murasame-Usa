import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const ProductDiv = styled('div')`
  color: #fff;
  background-color: rgba(95, 95, 95, 1);
`

const ProductCard = styled(Card)`
  && {
    background-color: rgba(95, 95, 95, 1);
    display: flex;
    margin: 0 auto;
    margin-top: 30px;
    justify-content: center;
    padding-bottom: 30px;
    flex-wrap: wrap;
  }
`

const ProductTitle = styled(Typography)`
  && {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    padding-top: 30px;
  }
`

const CardBorder = styled(Card)`
  && {
    max-width: 300px;
    background-color: #c0c0c0;
    margin: auto;
  }
`

class Product extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <ProductDiv>
        <ProductTitle>Product</ProductTitle>
        <ProductCard>
          {/* 1つ目 */}
          <CardBorder onClick={() => window.open('https://soundring.github.io/kirara_website/')}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Kirara Website"
                height="140"
                image="./image/kirara_website.png"
                title="Kirara Website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Kirara Website
                </Typography>
                <Typography component="p">
                  「まんがタイムきらら」の作品3つの紹介サイトです。ちなみに「ご注文はうさぎですか？」が様々な作品の中で一番好きです。HTML,CSS,jQuery。
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardBorder>

          <CardBorder
            onClick={() =>
              window.open('https://twitter.com/murasame_usa/status/991747302862635008')
            }
          >
            {/* 2つ目 */}
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ドミネーター"
                height="140"
                image="./image/dominator_vr.png"
                title="Kirara Website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ドミネーターVR
                </Typography>
                <Typography component="p">
                  Unityで作ったVRアプリで、3Dアバターの視点を合わせるとUIの表示と音声が流れます。アニメ「SYCHO-PASS
                  サイコパス」に憧れて作りました。
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardBorder>

          {/* 3つ目 */}
          <CardBorder onClick={() => window.open('https://soundring.github.io/MyPortfolioSite/')}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ポートフォリオサイト"
                height="140"
                image="./image/portfolio_withbook.png"
                title="ポートフォリオサイト"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  本を参考に作成したポートフォリオサイト
                </Typography>
                <Typography component="p">
                  本を参考にして自分用に改造して作成したシングルページサイト。HTML,CSSのみ。
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardBorder>

          {/* 4つ目 */}
          <CardBorder onClick={() => window.open('https://codepen.io/soundring/pen/wbjgQM')}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ConoHaのコンパネ"
                height="140"
                image="./image/conoha.png"
                title="ConoHaの簡易的なコンパネのフロント部分"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ConoHaの簡易的なコンパネのフロント部分
                </Typography>
                <Typography component="p">
                  ConoHaの簡易的なコンパネのフロント部分です。HTML,CSS,jQuery。
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardBorder>
        </ProductCard>
      </ProductDiv>
    )
  }
}

export default Product
