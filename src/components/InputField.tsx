import React from 'react';
import '../styles/InputField.scss';

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  required: boolean;
};

const InputField = (props: InputFieldProps) => {
  const { label, type, name, handleChange, value, required } = props;

  return (
    <div className="input-filed">
      <label className="input-field__label">{label}</label>
      <input
        className="input-filed__input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
