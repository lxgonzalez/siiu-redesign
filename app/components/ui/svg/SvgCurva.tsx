import Svg, { Path } from "react-native-svg";

interface SvgProps {
  color?: string;
  opacity?: number;
}

export default function SvgCurva({
  color = "#0099ff",
}: SvgProps) {
  return (
    <Svg width="352" height="199" viewBox="0 0 352 199" fill="none">
      <Path
        d="M352 0H0V141.49C192.392 278.667 288.157 124.235 352 141.49V0Z"
        fill={color}
      />
    </Svg>
  );
}
