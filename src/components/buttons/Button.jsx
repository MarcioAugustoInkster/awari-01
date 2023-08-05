
import './button.css';

const Button = ({action}) => {
  return(
    <button
      type="button"
      onClick={action}
    >
      Fazer login
    </button>
  );
};

export default Button;
