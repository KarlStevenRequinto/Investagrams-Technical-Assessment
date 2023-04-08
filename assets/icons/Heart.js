import Svg, { Path } from "react-native-svg";

function Heart({ width, height, stroke, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 96 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M75.1226 2.14107C72.2773 1.1947 69.2848 0.775654 66.2876 0.775654C59.6851 0.728571 53.2773 2.8944 48.0001 6.89178C47.5726 6.56691 47.0501 6.2797 46.5751 6.0019C46.1001 5.7147 45.2451 5.01315 44.5326 4.63649L42.7276 3.83607C41.7776 3.31815 40.7848 2.94149 39.7351 2.6072C39.6401 2.51774 39.4976 2.41886 39.3076 2.3294H39.0273C36.2201 1.38303 33.3226 0.865112 30.3301 0.775654H29.8076C28.4776 0.775654 27.1523 0.865112 25.8176 1.05815H25.2476C23.8226 1.24178 22.4023 1.57136 21.0248 2.0422C3.30258 7.79107 -3.01492 26.8598 2.35258 43.5273C5.39258 52.0447 10.2898 59.7711 16.6548 66.1226C25.9126 74.9743 36.0348 82.7901 46.9076 89.476L48.1426 90.234L49.3301 89.523C60.1648 82.7901 70.2301 74.9743 79.4023 66.1697C85.8101 59.8182 90.7026 52.0447 93.6951 43.5273C98.9723 26.8598 92.6548 7.79107 75.1226 2.14107Z"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Heart;