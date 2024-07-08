import sprite from '../../assets/Icons/sprite.svg';

const Icon = ({ name, width, height }) => {
  return (
    <svg
      role="img"
      width={width}
      height={height}
    >
      <use xlinkHref={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
