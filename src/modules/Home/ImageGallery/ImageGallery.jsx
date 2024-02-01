

import React from "react";
import { Box, Typography } from "@mui/material";

export default function ImageGallery (props) {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        padding: "40px 0",
      }}
    >
      <Typography
        sx={{
          color: "#000",
          textAlign: "center",
          width: "100%",
          typography: "h2",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            fontSize: "40px",
          },
        }}
      >
        Image Gallery
      </Typography>
      <Box
        sx={{
          marginTop: "24px",
          width: "100%",
          padding: "32px 80px",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            padding: "0 20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            lineHeight: "normal",
            marginTop: "-40px",
            "& > *": {
              flexBasis: {
                xs: "100%",
                md: "33%",
              },
              marginLeft: "0",
              marginLeft: {
                md: "40px",
              },
            },
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              backgroundColor: "#d9d9d9",
              display: "flex",
              width: "412px",
              maxWidth: "100%",
              height: "408px",
              flexDirection: "column",
              margin: "0 auto",
              "@media (max-width: 991px)": {
                marginTop: "40px",
              },
            }}
          />
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexGrow: "1",
              flexDirection: "column",
              marginTop: "40px",
              "@media (max-width: 991px)": {
                marginTop: "40px",
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#d9d9d9",
                display: "flex",
                height: "200px",
                flexDirection: "column",
              }}
            />
            <Box
              sx={{
                backgroundColor: "#d9d9d9",
                display: "flex",
                height: "200px",
                flexDirection: "column",
              }}
            />
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              backgroundColor: "#d9d9d9",
              display: "flex",
              width: "412px",
              maxWidth: "100%",
              height: "408px",
              flexDirection: "column",
              margin: "0 auto",
              "@media (max-width: 991px)": {
                marginTop: "40px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};


