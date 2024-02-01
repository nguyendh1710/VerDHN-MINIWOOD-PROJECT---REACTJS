
import { styled } from "@mui/system";
import { Container, Box, Grid, Typography } from "@mui/material";












export const Wrap = styled("div")({
    display: "flex",
    flexDirection: "row",
      gap:"40px",
    });
export  const ContentLeft = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0 24px 50px 0",
  margin: "40px 40px 80px 40px",
  paddingRight: "20px",




  width: "326px",
  height: "454px",
  
  alignItems: "flex-start",
  gap: "24px",




});

export const Heading = styled("div")({
  color: "#1d1d1d",
  whiteSpace: "nowrap",
  font: "700 32px/128% Quicksand, sans-serif",
  whiteSpace: "initial",
});

export const Subheading = styled("div")({
  color: "#1d1d1d",
  margin: "24px 0 224px",
  font: "400 18px/23px Quicksand, sans-serif",
  marginBottom: "40px",
});

// {/* ProductList */}

export const CusCategoryBg = styled("div")({

  display: "flex",
  padding: "32px 32px 0 0",
  margin: " 40px 40px 40px 80px",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1 0 0",
  borderRadius: "10px",
  background: "linear-gradient(91deg, #FFECC8 0.57%, rgba(232, 170, 66, 0.80) 99.38%)",


});
export const ProductItem = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  flexDirection: "column",
  padding: "16px 8px 0",
  marginTop: { xs: "16px", lg: "0" },

}));

export const ProductImage = styled("img")({
  aspectRatio: "1.2",
  objectFit: "contain",
  objectPosition: "center",
  width: "180px",
  overflow: "hidden",
  maxWidth: "100%"
});

export const ProductName = styled(Typography)(({ theme }) => ({
  alignSelf: "stretch",
  color: "#1d1d1d",
  textAlign: "center",
  marginTop: "8px",
  whiteSpace: "nowrap",
  fontFamily: "Quicksand, sans-serif",
  fontWeight: "bold",
  fontSize: "18px"
}));
