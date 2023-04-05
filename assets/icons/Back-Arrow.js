import { StyleSheet, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

const BackArrow = ({fill,width,height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4987 0.657459L11.9336 2.09229L3.58555 10.4403L11.9336 18.7883L10.4987 20.2231L0.717285 10.4417L10.4987 0.657459Z"
        fill={fill}
      />
    </Svg>
  );
};

export default BackArrow;

const styles = StyleSheet.create({});
