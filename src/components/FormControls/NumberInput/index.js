import React from 'react';
import '../../../App.css';
const NumberInput = props => {

    let formControl = "form-control";
    if (props.touched === 'true' && props.valid === 'false') {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">

            <input type="number" className={formControl} {...props} maxLength="2" />
        </div>
    );
}

export default NumberInput;