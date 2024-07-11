const Text = ({ className, as: Text, size, text }) => {
  return <Text className={`text-${size} ${className}`}>{text}</Text>;
};

export default Text;
