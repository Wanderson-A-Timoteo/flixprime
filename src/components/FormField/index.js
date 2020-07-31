import React from 'react';

function FormField({ label, type, name, value, onChange }) {

    const fielId = `id_${name}`;
    
    return (
        <div>
            <label
                htmlFor={fielId}
            >
              {label}
              : 
              <input
                id={fielId} 
                type={type}
                value={value}
                name={name}
                onChange={onChange}  
              />
            </label>
          </div>
    );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
     
};

export default FormField;