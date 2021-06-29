import React from 'react';
import { SideTitleBox } from './styles';

type SideTitleProps = {
  value: string;
};
export default function SideTitle({ value }: SideTitleProps): JSX.Element {
  return (
    <SideTitleBox>
      <div className="line"></div>
      <h2>{value}</h2>
    </SideTitleBox>
  );
}
