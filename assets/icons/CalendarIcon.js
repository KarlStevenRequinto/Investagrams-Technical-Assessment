import { Path, Svg } from "react-native-svg";

const CalendarIcon = ({ width, height, stroke }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 1.5V3.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 1.5V3.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.5 5.5H13.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CalendarIcon;
