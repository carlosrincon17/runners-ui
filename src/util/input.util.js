import React from "react";
import MaskedInput from "react-text-mask";
import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

const renderFormInput = (name, label, handleInputChange, options = {}, icon) => {
  const {select, list} = options;
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
  if (select) {
    return (
      <FormGroup className={"col-md-6"}>
        <Input type={"select"} placeholder={label} onChange={(event) => handleInputChange(event, options.onChange)}
        className={"input-group-alternative mb-3 input-group"}
        name={name}
        >
          <option>{label}</option>
          {list.map(item => (
            <option value={item}>{item}</option>
          ))}
        </Input>
      </FormGroup>
    )
  }
  return (
    <FormGroup className={options.fullSize ? "col-md-12": "col-md-6"}>
      <InputGroup className="input-group-alternative mb-3 input-group">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={icon}/>
          </InputGroupText>
        </InputGroupAddon>
        {input}
      </InputGroup>
    </FormGroup>
  );
};

export {renderFormInput};