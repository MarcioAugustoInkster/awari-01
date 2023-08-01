import './button.css';

const Button = ({type, text, size, action}) => {
  return (
    <button
      type={type === undefined ? 'button' : type}
      className={`simple-button${size === undefined ? ' btn-small' : ` ${size}`}`}
      onClick={action}
      data-testid="btnModuleRedirect"
    >
      {text}
    </button>
  );
};

export default Button;
