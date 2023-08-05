const InputText = ({props, action, value}) => {
  const { ...otherProps } = props;

  return(
    <input
      type="text"
      onChange={action}
      value={value}
      className="input-text"
      {...otherProps}
    />
  );
};

export default InputText;
