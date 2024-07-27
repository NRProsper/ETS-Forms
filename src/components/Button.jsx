import PropTypes from "prop-types";

const Button = ({children, type="button", className, onClick}) => {
    return (
        <button type={type} onClick={onClick} className={`bg-[#9E896A] text-white py-3 px-16 rounded-[2.0625rem] ${className}`}>
            {children}
        </button>
    );
};

Button.prototype = {
    children: PropTypes.node.isRequired
};

export default Button;