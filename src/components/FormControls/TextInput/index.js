import React from 'react';
import  '../../../App.css';
const TextInput = props => {

    let formControl = "form-control";
    if (props.touched === 'true' && props.valid === 'false') {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">

            <input type="text" className={formControl} {...props} />
            </div>
    );
}

export default TextInput;