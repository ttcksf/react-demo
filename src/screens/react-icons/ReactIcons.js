import React from 'react';
import { FaAffiliatetheme } from 'react-icons/fa6';
import { Md3P } from 'react-icons/md';
import { IconContext } from 'react-icons';
// npm install react-icons --save
// https://react-icons.github.io/react-icons/
const ReactIcons = () => {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '1rem' }}>
      <div>
        {/* IconContextで囲むとpropsの一括指定ができる */}
        <FaAffiliatetheme />
        {/* IconContextで囲んでも直接指定で上書きができる */}
        <FaAffiliatetheme color="red" size="10rem" />
        <Md3P color="blue" size="10rem" />
      </div>
    </IconContext.Provider>
  );
};

export default ReactIcons;
