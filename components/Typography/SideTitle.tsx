import React from 'react';
import { SideTitleBox } from './styles';

type SideTitleProps = {
  value: string;
};
export default function SideTitle({ value }: SideTitleProps): JSX.Element {
  return (
    <SideTitleBox className="side__title">
      <div className="line"></div>
      <h2>{value}</h2>
    </SideTitleBox>
  );
}
