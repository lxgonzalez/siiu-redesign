import Svg, { Path } from "react-native-svg";

export default function SvgCurvaBackTop({ color = "#0B4B6F" }) {
  return (
    <Svg width="360" height="80" viewBox="0 0 360 80" fill="none">
      <Path
        d="M0 0H360V60C320 80 80 80 0 60V0Z"
        fill={color}
      />
    </Svg>
  );
}
