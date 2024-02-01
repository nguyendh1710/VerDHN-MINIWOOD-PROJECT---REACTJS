import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";

function Footer (props) {
  return (
    <Wrapper>
      <Title variant="h5">CONNECT WITH US</Title>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/302557def280ac84af4dc66ee9aa38327bb369f2bdd9fe21ca782d29af7b6359?apiKey=df620080bc12429aaae514dfc98385e7&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/844edc1586c892f60a30e3d6c793f61cde62c17cd71b369da51591a6b2e33af2?apiKey=df620080bc12429aaae514dfc98385e7&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aebd1ebf1c291cdea55bcc2762b4fbfee76cda28084f31e02e57627f35a6681?apiKey=df620080bc12429aaae514dfc98385e7&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae912b71f5c61e10e1bec0a99b282c606f87e86e8bed8568f116df3388f6b03c?apiKey=df620080bc12429aaae514dfc98385e7&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ecb16ae4badbe2c8ddca0205bf55725de892430cd9e6515e3078f00220c3b9?apiKey=df620080bc12429aaae514dfc98385e7&"
        />
      </ImageContainer>
      <Description>
        Miniwood Design provides meaningful corporate gifts, beautifully
        packaged and delivered with utmost care. <br />
        You can buy directly at the store or order gifts online to be delivered
        directly to the recipient{" "}
        <span style={{ fontWeight: "700" }}>on the same day</span> in{" "}
        <span style={{ fontWeight: "700" }}>Hanoi</span> and 2 to 5 days for
        other areas in Vietnam.
      </Description>
    </Wrapper>
  );
}

