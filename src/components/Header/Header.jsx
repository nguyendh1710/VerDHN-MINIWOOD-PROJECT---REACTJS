import React from "react";
import {Logo,Image} from './Header.style'
import {
    Container,
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
  } from "@mui/material";






export default function Header(props) {
  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              padding: "0 80px",
              "@media (max-width: 991px)": {
                flexWrap: "wrap",
                padding: "0 20px",
              },
            }}
          >
            <Logo
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/64d09bf304e7c3fd6735a1c6d93b29c0e3c8f43dba26de774df8356cd6d6a41b?apiKey=df620080bc12429aaae514dfc98385e7&"alt="Logo"
            />
            <Box
              sx={{
                display: "flex",
                alignSelf: "stretch",
                maxWidth: "100%",
              }}
            >
              <Button color="inherit">TỰ TAY THIẾT KẾ</Button>
              <Button color="inherit">SẢN PHẨM</Button>
              <Button color="inherit">BEST - SELLER</Button>
              <Button color="inherit">BÀI VIẾT</Button>
              <Button color="inherit">LIÊN HỆ</Button>
            </Box>




            <Box
        sx={{
          display: "flex",
          gap: "16px",
          margin: "auto 0",
        }}
      >
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e09aade2f7166e1c13e3ff992084a105c0f293c0aaeeb0fcb1052ebd7d689f1a?apiKey=df620080bc12429aaae514dfc98385e7&"
          alt="Image 1"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28180ac10bd23d5df6ccbfaea6b3956db316a73e5cff36479707e8357b2745b?apiKey=df620080bc12429aaae514dfc98385e7&"
          alt="Image 2"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93c0b86fb735f040e6aa15e916bfb5b1114325d0bd6abd90700c56557818ca6e?apiKey=df620080bc12429aaae514dfc98385e7&"
          alt="Image 3"
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa13e0170a1b796c089a966e4259ab5c4cec276fb28fd9c852e787b6d95ba0af?apiKey=df620080bc12429aaae514dfc98385e7&"
          alt="Image 4"
        />
      </Box>




          </Container>
        </Toolbar>
      </AppBar>
     
    </Box>
  );
}

