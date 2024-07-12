const Text = ({ className, as: Text, size, children }) => {
  return <Text className={`text-${size} ${className}`}>{children}</Text>;
};

export default Text;
