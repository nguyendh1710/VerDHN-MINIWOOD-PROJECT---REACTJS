import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import {CusFooterBg,CusContentBg,Wrapper,Title,ImageContainer,LazyImage,Description,CusContentRightBg,InfoContainer,Info,ContactInfo,CusContactRightBg,ContactRightImage,ContactRightLogo,ContactRightContent,ContactRightText,ContactRightText2,MenuItem} from './Footer.style';

export default  function Footer(props) {
  return (
<CusFooterBg>
<CusContentBg >
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


{/* ContentRight */}
        
      <CusContentRightBg >
      <MenuItem>HỖ TRỢ</MenuItem>
      <MenuItem>About Us</MenuItem>
      <MenuItem>Warranty Policy</MenuItem>
      <MenuItem>Return Policy</MenuItem>
      <MenuItem>Payment Policy</MenuItem>
      <MenuItem>Shipping Policy</MenuItem>
      <MenuItem>Privacy Policy</MenuItem>
      <MenuItem>Articles - News</MenuItem>
    </CusContentRightBg>


</CusContentBg>

<InfoContainer>

 {/* ContactLeft */}
      <Info>
        Công ty cổ phần sản xuất thương mại và dịch vụ Hoàng Minh Việt Nam
        <br />
        Giấy chứng nhận đăng ký kinh doanh số 0109361357
        <br />
        Do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp ngày 26/01/2021
        <br />
        Trụ sở chính: 40 ngõ 379 Đội cấn, Liễu Giai, Ba Đình, Hà Nội, Việt Nam


        <br />

        <ContactInfo>
        <Typography variant="subtitle1">SĐT</Typography>
      </ContactInfo>
      <ContactInfo>
        <Typography variant="subtitle1">Email</Typography>

      </ContactInfo>

      </Info>
     



{/* ContactRight */}

      <CusContactRightBg>
      <ContactRightImage
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4f7b81526e08837fb0f862b85fd4217a86c8183cef207e02664eefa8cb05b1e?apiKey=df620080bc12429aaae514dfc98385e7&"alt="Footer Image"
      />
      <ContactRightContent>
        <ContactRightLogo
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7bbe37d2792656d8fde5820b79358f8f7f21f543c17cf7dc877c9b0b9c4c039?apiKey=df620080bc12429aaae514dfc98385e7&"
          alt="Footer Logo"
        />
        <ContactRightText>Việt Nam</ContactRightText>
      </ContactRightContent>
      <ContactRightText2>
        Copyright © 2022 Miniwood Design
      </ContactRightText2>
    </CusContactRightBg>














    </InfoContainer>















</CusFooterBg>
  );
}






