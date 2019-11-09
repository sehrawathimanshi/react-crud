import React from 'react';

const TextArea = props => {

    let formControl = "form-control";

    if (props.touched === 'true' && props.valid === 'false') {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <textarea {...props} className={formControl} />
            </div>
    );
}

export default TextArea;