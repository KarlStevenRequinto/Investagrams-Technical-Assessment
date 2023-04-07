import { Path, Svg } from "react-native-svg";

const Clock = ({ width, height, stroke }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 4.5V8H11.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Clock;
