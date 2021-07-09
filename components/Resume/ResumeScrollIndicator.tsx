import { ScrollBar } from './styles';

export default function ResumeScrollIndicator({ width }: { width: number }): JSX.Element {
  return <ScrollBar width={width}></ScrollBar>;
}
