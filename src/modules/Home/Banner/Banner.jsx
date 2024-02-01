import React from "react";
import {Container,LeftColumn,ItemContainer,LazyImage,Subtitle,Description,RightColumn} from './Banner.style';

export default function Banner(props) {
  return (
    <Container>
      <LeftColumn>
        <ItemContainer>
          <LazyImage srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/daaede8f707b32ff8c731039c6346aabebe13e647805b5ee7ab390f8ca5b070e?apiKey=df620080bc12429aaae514dfc98385e7&"/>
          <Subtitle>ĐỘC ĐÁO</Subtitle>
          <Description>Bật lửa Zorro</Description>
        </ItemContainer>
      </LeftColumn>
      <RightColumn>
        <ItemContainer>
          <LazyImage srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/961533ffa8f139ea2d8f352012d22830dc302841241c1bdbfc7ec7a29146228a?apiKey=df620080bc12429aaae514dfc98385e7&"/>
          <Subtitle>THANH LỊCH</Subtitle>
          <Description>Hộp đựng thẻ</Description>
        </ItemContainer>
      </RightColumn>
    </Container>
  );
}

