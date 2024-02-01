import React from "react";
import {Container,Content,LeftColumn,Logo,Separator,Description,Story,RightColumn,Background} from'./ContentMiniwood.style';

export default function ContentMiniwood (props) {
  return (
    <Container>
      <Content>
        <LeftColumn>
          <Logo>Miniwood Design</Logo>
          <Separator />
          <Description>
            Bạn có thể tìm thấy rất nhiều món đồ ở đây, miễn là nó thỏa mãn 2 tiêu chí: Đồ gỗ & Nhỏ. Miniwood có nghĩa là "Đồ gỗ nhỏ". Nhưng ước mơ và tham vọng của chúng tôi thì không bao giờ là nhỏ bé!
          </Description>
          <Story>Câu chuyện của Miniwood</Story>
        </LeftColumn>
        <RightColumn>
          <Background />
        </RightColumn>
      </Content>
    </Container>
  );
};

