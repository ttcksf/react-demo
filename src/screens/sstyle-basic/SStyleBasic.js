import React from 'react';
// npm i styled-components
import { styled } from 'styled-components';

const SStyleBasic = () => {
  return (
    <Container>
      SStyleBasic
      <Paragraph>ダミーテキストです</Paragraph>
    </Container>
  );
};

export default SStyleBasic;

// オブジェクト型ではない+JSX記法ではないので注意
const Container = styled.div`
  text-align: left;
  color: blue;
`;
// インラインCSSよりも再利用性があって通常のCSSと違って干渉する心配がない
const Paragraph = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
