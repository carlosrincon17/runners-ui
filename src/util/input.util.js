import React from "react";
import MaskedInput from "react-text-mask";
import {FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";

const renderFormInput = (name, label, handleInputChange, options = {}) => {
  const {additionalClass} = options;
  const id = `form-input${name}`;
  let input = (
    <input type={options.type || 'text'} id={id} name={name}
           pattern={options.pattern || null}
           onChange={handleInputChange}
           placeholder={label}
           className="form-control"
    />
  );
  if (options.mask) {
    input = (
      <MaskedInput type={options.type || 'text'} id={id} name={name}
                   mask={options.mask}
                   guide={true}
                   placeholder={label}
                   onChange={handleInputChange}
                   className="form-control"
      />
    );
  }
  return (
    <FormGroup className="col-md-6">
      <InputGroup className="input-group-alternative mb-3 input-group">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-hat-3"/>
          </InputGroupText>
        </InputGroupAddon>
        {input}
      </InputGroup>
    </FormGroup>
  );
}

export {renderFormInput};