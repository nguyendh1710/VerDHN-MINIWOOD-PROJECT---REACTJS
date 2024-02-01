import styled from "styled-components";



export const Container = styled.div`
  align-self: stretch;
  background-color: #efefef;
  padding: 50px 80px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  color: #1d1d1d;
  text-align: center;
  font: 700 46px/130% Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export const Separator = styled.div`
  background-color: #1d1d1d;
  align-self: center;
  margin-top: 15px;
  width: 99px;
  height: 1px;
`;

export const Description = styled.div`
  color: #1d1d1d;
  text-align: center;
  margin-top: 16px;
  font: 400 18px/23px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Story = styled.span`
  color: #fefefe;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Button-Button---Primary, #db8125);
  align-self: center;
  margin-top: 16px;
  padding: 16px;
  font: 700 20px/130% Quicksand, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Background = styled.div`
  align-self: stretch;
  background-color: rgba(9, 44, 76, 0.16);
  display: flex;
  width: 622px;
  max-width: 100%;
  height: 258px;
  flex-direction: column;
  margin: auto;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

