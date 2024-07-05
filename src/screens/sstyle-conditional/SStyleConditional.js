import React, { useState } from 'react';
// npm i styled-components
import { styled } from 'styled-components';

const SStyleConditional = () => {
  const [error, setError] = useState(false);
  return (
    // $propsで渡して条件付きスタイル
    <Container $error={error}>
      SStyleBasic
      <Paragraph>ダミーテキストです</Paragraph>
    </Container>
  );
};

export default SStyleConditional;

const Container = styled.div`
  text-align: left;
  color: ${(props) => (props.$error ? 'red' : 'blue')};
  color: ${({ $error }) => ($error ? 'red' : 'blue')};
`;
const Paragraph = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
