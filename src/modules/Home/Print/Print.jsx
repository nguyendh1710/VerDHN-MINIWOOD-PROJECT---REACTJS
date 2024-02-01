import React from "react";
import { Box, Typography, Button} from "@mui/material";
import {Header,Content,CusPrintButton} from'./Print.style';







export default function Print(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: { xs: 2, md: 4 },
        gap: "24px",
      }}
    >
      <Header  align="center" sx={{ marginTop: 2 }}>
        IN HÌNH THEO YÊU CẦU - CÁ NHÂN HÓA
      </Header>
      <Content variant="h5" color="text.primary" align="center" sx={{ marginTop: 2 }}>
        In hình ốp lưng điện thoại theo yêu cầu - Thiết kế riêng theo phong cách của bạn
      </Content>

      <Button >
      <CusPrintButton align="center" sx={{ marginTop: 2 }}>

             TỰ TAY THIẾT KẾ        
      
      </CusPrintButton>
      </Button>
    </Box>
  );
}


