import PropTypes from "prop-types";

const TextInput = ({ type = "text", placeholder, onChange, id }) => (
    <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border-2 border-[#9E896A] rounded-[2.5rem] px-7 py-5 focus:border-[#C7B598] focus:outline-none focus:ring-2 focus:ring-[#C7B598]/50 active:border-[#C7B598] active:ring-2 active:ring-[#C7B598]/50"
    />
);

TextInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default TextInput;
