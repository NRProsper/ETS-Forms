import PropTypes from 'prop-types';

const FormGroup = ({ label, htmlFor, children}) => {
    return (
        <div className="mb-8">
            <label htmlFor={htmlFor} className="block text-gray-700 font-semibold mb-2">
                {label}
            </label>
            {children}
        </div>
    );
};

FormGroup.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default FormGroup;
