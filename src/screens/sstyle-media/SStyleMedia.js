import React from 'react';
import { styled } from 'styled-components';

const SStyleMedia = () => {
  return (
    <div>
      SStyleMedia
      <Paragraph>
        テキストです
        <p>テキストです</p>
      </Paragraph>
    </div>
  );
};
// 入れ子のセレクタ指定、擬似クラス、メディアクエリは「&」をつける
const Paragraph = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: red;

  & p {
    font-size: 16px;
    font-weight: normal;
  }
  &:hover {
    color: blue;
  }
  @media (max-width: 767px) {
    & {
      font-size: 16px;
    }
  }
`;

export default SStyleMedia;
