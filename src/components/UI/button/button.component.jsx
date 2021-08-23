import './button.styles.css';

const Button = ({ children, type, onClick }) => ( 
    <button type={type} onClick={onClick} className='button'>
        {children}
    </button>
);
 
export default Button;