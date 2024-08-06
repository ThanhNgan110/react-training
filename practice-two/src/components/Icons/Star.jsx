const Star = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 15 15`}
    >
      <path
        d="M11.0226 4.87512L7.66797 7.27597L8.65291 11.1776L5.39326 8.82106L1.92362 11.0527L3.2635 7.19445L0.134819 4.6729L4.22237 4.64506L5.75821 0.85498L6.94405 4.69558L11.0226 4.87512Z"
        fill={color}
      />
    </svg>
  );
};

export default Star;
