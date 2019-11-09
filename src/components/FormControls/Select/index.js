import React from 'react';

const Select = props => {

    let formControl = "form-control select-heigth";

    if (props.touched === 'true' && props.valid === 'false') {
        formControl = 'form-control control-error select-heigth';
    }
    console.log(props)
    return (
      <div className="form-group">

            <select className={formControl} value={props.value} onChange={props.onChange} name={props.name}>
              <option value=""   disabled>{props.placeholder}</option>
              {props.options.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.displayValue}
                </option>
              ))}
            </select>
            </div>
    );
}

export default Select;