import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const ProductDiv = styled('div')`
  color: #fff;
  background-color: rgba(95, 95, 95, 1);
`;

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
`;

const ProductTitle = styled(Typography)`
  && {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    padding-top: 30px;
  }
`;

const CardBorder = styled(Card)`
  && {
    max-width: 300px;
    background-color: #c0c0c0;
    margin: auto;
  }
`;

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ProductDiv>
        <ProductTitle>Product</ProductTitle>
        <ProductCard>
          {/* 1つ目 */}
          <CardBorder
            onClick={() =>
              window.open('https://github.com/soundring/flutter_todo_list')
            }
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Flutter Todo List"
                height="140"
                image="./image/flutter_todo.png"
                title="Flutter Todo List"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flutterで作ったTodoリスト
                </Typography>
                <Typography component="p">
                  sqliteを使用しているためデータは永続化します。
                  <link>
                    <a href="https://twitter.com/murasame_usa/status/1253490547093696512?s=20">
                      デモ動画
                    </a>
                  </link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardBorder>

          {/* 2つ目 */}
          <CardBorder
            onClick={() =>
              window.open(
                'https://twitter.com/murasame_usa/status/1206191749170790403?s=20'
              )
            }
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Flutterで画面作成"
                height="140"
                image="./image/gochiusa_flutter.png"
                title="Flutterで画面作成"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flutterで画面作成
                </Typography>
                <Typography component="p">
                  「ご注文はうさぎですか？」に出てくる「ラビットハウス」を地図アプリ調べて開いた時を想定
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardBorder>

          {/* 3つ目 */}
          <CardBorder
            onClick={() =>
              window.open('https://github.com/soundring/search_recent_book_bot')
            }
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="最新の書籍を出すLINE Bot"
                height="140"
                image="./image/LINEBot.png"
                title="最新の書籍を出すLINE Bot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  LINE Botを作成
                </Typography>
                <Typography component="p">
                  書籍名を入力すると、その書籍の最新巻の情報を返してくれる。
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardBorder>

          {/* 4つ目 */}
          <CardBorder
            onClick={() =>
              window.open('https://codepen.io/soundring/pen/wbjgQM')
            }
          >
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
    );
  }
}

export default Product;
