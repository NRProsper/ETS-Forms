import PropTypes from "prop-types";

const Button = ({children, type="button", className}) => {
    return (
        <button type={type} className={`bg-[#9E896A] text-white py-3 px-16 rounded-[2.0625rem] ${className}`}>
            {children}
        </button>
    );
};

Button.prototype = {
    children: PropTypes.node.isRequired
};

export default Button;