


import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import {Wrap,ContentLeft,Heading,Subheading,ProductItem,ProductImage,ProductName,CusCategoryBg} from'./Category.style';







export default function Category (props) {
  return (
   
    <Wrap>

{/* ContentLeft */}
    <ContentLeft>
      <Heading>Miniwood có gì?</Heading>
      <Subheading>
        Cùng nhau khám phá những dòng sản phẩm độc đáo từ Miniwood
      </Subheading>
    </ContentLeft>


{/* ProductList */}
<CusCategoryBg>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "20px"
        }}
      >
        <Grid container spacing={{ xs: 2, lg: 0 }}>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/effb897dcc8ddfc4f46a0e0f2acfb37550329cd243b574fd35341424ec8342cc?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd011dd2d1cd2b274191a92fb57e448c389d892f81435a8f56f103b0059f0f9?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd9a3d03950ce4aef6237a918c9edf21f5f8d9a6b68972bb1ed128691998100e?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee955962f94bfc2e795c65dff51707f931497f1f22c560e06a64166918c77836?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e170107400f8d521b7101628dcb9e7d6e947ec7fdc041d84b5b15dc66ca96f63?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49bdebe87386fb07302a7f94ca912d3c6b57341d03e5c7e3407b0bf11c0490e4?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43e4a1913f0ba77de42d8c7a0087018abef2033014e1a765f282b9aec45ed0a4?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal"
              }}
            >
              <ProductItem>
                <ProductImage
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/306de8b1139350d15686aec5ede8c638e5259cc8545eb301258c1930b7e38a3f?apiKey=df620080bc12429aaae514dfc98385e7&"/>
                <ProductName>Văn phòng phẩm</ProductName>
              </ProductItem>
            </Box>
          </Grid>
        </Grid>
      </Box>
  

    </CusCategoryBg>



    </Wrap>
   
  );
};



