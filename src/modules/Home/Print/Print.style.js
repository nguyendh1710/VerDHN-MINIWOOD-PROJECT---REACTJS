import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";








export const CustomImage = styled("img")`
  padding: 10px,
`;


export const Header = styled("div")({
   
alignSelf: "stretch",
color: "#F19426",
textAlign: "center",
fontFamily: "Quicksand",
fontSize: "32px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "41px", /* 128.125% */
  });


export const Content = styled("div")({
   
    alignSelf: "stretch",
    color: "#1D1D1D",
    textAlign: "center",
    fontFamily: "Quicksand",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "23px", /* 127.778% */
    });




    export const CusPrintButton = styled('Box')({
        display: "flex",
        width: "214px",
 
        justifyContent: "center",
        alignItems: "center",
        color:" #fefefe",
  whiteSpace: "nowrap",

  backgroundColor: "#f19426",
  padding: "16px 43px",
  font: "700 16px/125% Quicksand, sans-serif",
        });





