import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { ScrollDownBtnBox } from './styles';

export default function ScrollDown(): JSX.Element {
  return (
    <ScrollDownBtnBox>
      <p>SCROLL DOWN</p>
      <RiArrowDownSLine />
    </ScrollDownBtnBox>
  );
}
