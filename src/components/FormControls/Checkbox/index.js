
import React from 'react';

const Checkbox = props => {

    let formControl = "form-control";

    if (props.touched === 'true' && props.valid === 'false') {
        formControl = 'form-control control-error';
    }
    return (
        <div className="form-group col-md-4">
           <div>Active <input type="checkbox" checked={props.value} className={formControl} {...props}/> </div>
        </div>
    );
}

export default Checkbox;