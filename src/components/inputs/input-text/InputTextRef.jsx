import { forwardRef } from 'react';

const InputTextRef = forwardRef(function InputText(props, ref) {
  const { ...otherProps } = props;

  return(
    <input
      type="text"
      ref={ref}
      className="input-text"
      {...otherProps}
    />
  );
});

export default InputTextRef;
