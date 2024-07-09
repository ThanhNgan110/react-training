const Star = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        d="M12.574 4.26834L8.95408 6.7417L10.0169 10.7611L6.49949 8.33345L2.75555 10.6325L4.20133 6.65772L0.825317 4.06001L5.23606 4.03132L6.89329 0.12677L8.17293 4.08337L12.574 4.26834Z"
        fill={color}
      />
    </svg>
  );
};

export default Star;
