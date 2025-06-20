import Svg, { Path } from "react-native-svg";

export default function SvgCurvaBackBottom({ color = "#0B4B6F" }) {
  return (
    <Svg width="360" height="80" viewBox="0 0 360 80" fill="none">
      <Path
        d="M0 80H360V20C320 0 80 0 0 20V80Z"
        fill={color}
      />
    </Svg>
  );
}
