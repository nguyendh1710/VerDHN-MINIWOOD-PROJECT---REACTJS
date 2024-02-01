import { styled } from "@mui/system";





export const Container = styled("div")`
  align-self: stretch;
  padding: 50px 0;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const LeftColumn = styled("div")`
 

  width: 50%;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const RightColumn = styled("div")`
 

  width: 50%;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const ItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  min-height: 478px;
  padding: 49px 56px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const LazyImage = styled("img")`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Subtitle = styled("div")`
  position: relative;
  color: #fefefe;
  margin-top: 312px;
  font: 700 20px/130% Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Description = styled("div")`
  position: relative;
  color: #1d1d1d;
  white-space: nowrap;
  background-color: #fefefe;
  align-self: start;
  margin-top: 8px;
  justify-content: center;
  padding: 8px 16px;
  font: 500 14px/129% Quicksand, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

