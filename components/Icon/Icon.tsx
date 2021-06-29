import { iconData } from 'data/IconData';

export type IconName = keyof typeof iconData;

type IconProps = {
  name: IconName;
};
export default function Icon({ name }: IconProps): JSX.Element {
  return (
    <svg
      role="img"
      fill={iconData[name].color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{iconData[name].name}</title>
      <path d={iconData[name].path} />
    </svg>
  );
}
