import React from 'react';
import { PageTitleBox } from './styles';

type PageTitleProps = {
  children: React.ReactNode;
  width?: number;
  height?: number;
};
export default function PageTitle({
  children,
  width = 0,
  height = 0,
}: PageTitleProps): JSX.Element {
  return (
    <PageTitleBox width={width} height={height} className="page__title">
      {children}
    </PageTitleBox>
  );
}
